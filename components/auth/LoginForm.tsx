"use client";

import { useState } from "react";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/auth/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ username, password }) });
      const json = await res.json();
  if (!res.ok) throw new Error(json.error || 'Login failed');
  // refresh to update server-side session state
  window.location.reload();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="max-w-md mx-auto bg-white/5 p-6 rounded">
      <h2 className="text-lg font-semibold mb-4">Admin Login</h2>
      {error && <div className="text-red-400 mb-3">{error}</div>}
      <label className="block text-sm text-white/60 mb-2">Username</label>
      <input value={username} onChange={(e) => setUsername(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 mb-3" />
      <label className="block text-sm text-white/60 mb-2">Password</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 mb-4" />
      <div className="flex justify-end">
        <button className="bg-[#f4ef0e] text-black px-4 py-2 rounded" disabled={loading}>{loading ? 'Signing in...' : 'Sign in'}</button>
      </div>
    </form>
  );
}
