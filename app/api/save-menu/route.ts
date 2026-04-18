import { NextResponse } from "next/server";
import { commitFileToGitHub } from "@/lib/github";

export async function POST(req: Request) {
  try {
    const newMenuData = await req.json();

    const token = process.env.GITHUB_TOKEN;
    const owner = process.env.GITHUB_OWNER;
    const repo = process.env.GITHUB_REPO;
    const branch = process.env.GITHUB_BRANCH || "main";

    if (!token || !owner || !repo) {
      return NextResponse.json(
        { success: false, error: "GitHub credentials are not configured in environment variables." },
        { status: 500 }
      );
    }

    // Format the JSON nicely with 2 spaces
    const jsonContent = JSON.stringify(newMenuData, null, 2);

    await commitFileToGitHub({
      owner,
      repo,
      path: "data/menu.json",
      content: jsonContent,
      message: `Update menu.json via Admin Panel - ${new Date().toISOString()}`,
      token,
      branch,
    });

    return NextResponse.json({ success: true, message: "Menu updated successfully. Please wait a minute for deployment to finish." });
  } catch (error: any) {
    console.error("Failed to commit menu:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to commit changes to GitHub." },
      { status: 500 }
    );
  }
}
