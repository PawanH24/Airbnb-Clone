import React from "react";
import QueryProvider from "./query.provider";
import AuthProvider from "./auth.provider";

const Providers = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <QueryProvider>
      <AuthProvider>{children}</AuthProvider>
    </QueryProvider>
  );
};
export default Providers;
