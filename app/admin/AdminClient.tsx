"use client";

import { useEffect, useState } from "react";
import AdminDashboard from "./AdminDashboard";
import LoginForm from "@/components/auth/LoginForm";
import menuData from "@/data/menu.json";

export default function AdminClient() {
  const [authed, setAuthed] = useState<boolean | null>(null);

  useEffect(() => {
    let mounted = true;
    fetch('/api/auth/me')
      .then((r) => r.json())
      .then((j) => { if (mounted) setAuthed(!!j.authenticated); })
      .catch(() => { if (mounted) setAuthed(false); });
    return () => { mounted = false };
  }, []);

  if (authed === null) return <div className="p-8">Checking authentication...</div>;
  if (!authed) return <div className="p-8"><LoginForm /></div>;

  return <AdminDashboard initialData={menuData} />;
}
