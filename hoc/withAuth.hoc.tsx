"use client";
import useAuth from "@/hooks/useAuth.hooks";
import { Role } from "@/types/auth.types";
import { useRouter } from "next/navigation";
import { ComponentType, useEffect, useRef } from "react";
import logo from "@/assets/airbnb_logo.png";

import toast from "react-hot-toast";
import Image from "next/image";

function withAuth<P extends object>(
  Component: ComponentType<P>,
  roles?: Role[],
) {
  return function PrivatePage(props: P) {
    //login

    const { isLoading, isAuthenticated, user } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (isLoading) return;

      if (!isAuthenticated || !user) {
        if (window.location.pathname !== "/login") {
          toast.error("Login to continue");
        }
        router.replace("/login");
        return;
      }
      if (roles && !roles.includes(user.role)) {
        toast.error("You don't have permission to access this page");
        if (user.role === Role.HOST) {
          router.replace("/host");
        } else {
          router.replace("/");
        }
        return;
      }
    }, [isLoading, isAuthenticated, user, router, roles]);

    if (isLoading) {
      return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
          {/* Main Brand Logo Visual Anchor */}
          <div className="relative flex items-center justify-center">
            {/* Outer Ripple Ring */}
            <div className="absolute h-20 w-20 animate-ping rounded-full bg-[#ff385c]/10 duration-1000" />

            {/* Core Brand Accent Circle (Solid Pink Backdrop) */}
            <div className="relative flex h-16 w-16 animate-pulse items-center justify-center rounded-full bg-[#ff385c] shadow-lg shadow-[#ff385c]/20">
              <Image
                height={32}
                width={32}
                src={logo}
                alt="logo"
                className="object-contain brightness-0 invert"
                priority
              />
            </div>
          </div>
        </div>
      );
    }

    if (!isAuthenticated || !user) {
      return null;
    }

    if (roles && !roles.includes(user?.role)) {
      return null;
    }
    return <Component {...props} />;
  };
}
export default withAuth;
