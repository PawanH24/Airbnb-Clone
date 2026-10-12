"use client";
import useAuth from "@/hooks/useAuth.hooks";

const AdminHeader = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <nav className="flex items-center h-16 border-b border-gray-300 w-full pl-3 pr-10 ">
      <h3 className="text-lg">
        Welcome Back{" "}
        <span className="font-semibold italic lowercase text-rose-600">
          {user?.role}
        </span>
      </h3>
    </nav>
  );
};

export default AdminHeader;
