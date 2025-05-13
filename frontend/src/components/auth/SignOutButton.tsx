"use client";

import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const SignOutButton = () => {
  const router = useRouter();

  async function handleClick() {
    await signOut({
      fetchOptions: {
        onError: (ctx) => {
          toast.error(ctx.error.message);
        },
        onSuccess: () => {
          toast.success("You logged out. See you soon");
          router.push("/login");
        },
      },
    });
  }
  return (
    <Button onClick={handleClick} size={"default"} variant={"ghost"}>
      <LogOut /> Log out
    </Button>
  );
};
