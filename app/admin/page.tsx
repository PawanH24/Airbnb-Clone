"use client";
import { logout } from "@/api/auth.api";
import useAuth from "@/hooks/useAuth.hooks";

const AdminDashboard = () => {
  const { logout } = useAuth();
  return (
    <main className="h-full">
      <h1>Admin Dashboard Page</h1>
      <button type="button" onClick={logout} className="border border-black">
        Logout
      </button>
    </main>
  );
};
export default AdminDashboard;
