import Footer from "@/components/layout/client/footer/footer";
import NavBar from "@/components/layout/client/nav/nav";
import React from "react";

const ClientLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main>
      <NavBar />
      <section className="min-h-[85vh]">{children}</section>
      <Footer />
    </main>
  );
};

export default ClientLayout;
