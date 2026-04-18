export async function getFileSha(owner: string, repo: string, path: string, token: string) {
  const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "Lounge-Admin-CMS",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    if (response.status === 404) return null;
    throw new Error(`Failed to fetch file: ${response.statusText}`);
  }

  const data = await response.json();
  return data.sha as string;
}

export async function commitFileToGitHub({
  owner,
  repo,
  path,
  content,
  message,
  token,
  branch = "main",
}: {
  owner: string;
  repo: string;
  path: string;
  content: string;
  message: string;
  token: string;
  branch?: string;
}) {
  // 1. Get the current SHA of the file (required by GitHub API to update a file)
  const currentSha = await getFileSha(owner, repo, path, token);

  // 2. Base64 encode the new content
  const base64Content = Buffer.from(content).toString("base64");

  // 3. Send the PUT request to commit the file
  const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
  const payload = {
    message,
    content: base64Content,
    branch,
    ...(currentSha && { sha: currentSha }),
  };

  const response = await fetch(url, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "Lounge-Admin-CMS",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(`Failed to commit file: ${response.statusText} - ${JSON.stringify(errorData)}`);
  }

  return response.json();
}
