"use client";
import { getProfile, logout } from "@/api/auth.api";
import AuthContext from "@/context/auth.context";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const AuthProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryFn: getProfile,
    queryKey: ["profile"],
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: "always",
    retry: false,
  });

  //*logout
  const { mutate, isPending } = useMutation({
    mutationFn: logout,
    onSuccess: (response) => {
      router.replace("/");
      toast.success(response.message ?? "Logout success");

      queryClient.setQueryData(["profile"], null);
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
    onError: (error) => {
      toast.error(error.message ?? "something went wrong");
    },
  });

  return (
    <AuthContext.Provider
      value={{
        user: data?.data.user ?? null,
        isLoading: isLoading || isPending,
        isAuthenticated: !!data?.data.user,
        login: () => {},
        logout: mutate,
        createAccount: () => {},
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
