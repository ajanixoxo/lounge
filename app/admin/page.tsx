import AdminDashboard from "./AdminDashboard";
import menuData from "@/data/menu.json";

export const metadata = {
  title: "Admin Dashboard | Rixos Lounge",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminPage() {
  // Pass the raw imported static JSON down to the client component.
  // When this file is built (and rebuilt by Cloudflare after GitHub push),
  // it bundles the latest menu JSON.
  return <AdminDashboard initialData={menuData} />;
}
