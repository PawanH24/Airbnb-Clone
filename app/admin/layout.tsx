"use client";
import AdminHeader from "@/components/layout/admin/header";
import AdminSidebar from "@/components/layout/admin/sidebar";
import withAuth from "@/hoc/withAuth.hoc";
import { Role } from "@/types/auth.types";

const AdminLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="flex h-screen w-full overflow-clip">
      <AdminSidebar />
      <section className="w-full">
        <AdminHeader />
        <div>{children}</div>
      </section>
    </main>
  );
};

const PrivateAdminLayout = withAuth(AdminLayout, [Role.ADMIN]);

export default PrivateAdminLayout;
