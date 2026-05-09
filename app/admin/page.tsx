import AdminClient from "./AdminClient";
import menuData from "@/data/menu.json";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Admin Dashboard | Rixos Lounge",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminPage() {
  // Render a client wrapper which will check /api/auth/me and show login if needed.
  return <AdminClient />;
}
