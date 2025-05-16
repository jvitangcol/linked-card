import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import signUpImage from "@/assets/sign-up.png";
import SignUpForm from "@/components/auth/SignUpForm";
import { IdCard } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default function Page() {
  return (
    <main className="flex flex-col  justify-center items-center min-h-svh bg-background p-6">
      <Card className="md:w-[700px] py-0 overflow-hidden">
        <CardContent className="grid p-0 md:grid-cols-2">
          <div className="p-6 md:p-8">
            {/* ----------------------------------- login form ------------------------------- */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <Link href={"/"} className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-primary">Link</span>
                  <IdCard size={32} className="text-secondary" />
                </Link>
                <h1 className="text-xl font-bold text-primary">
                  Create an account
                </h1>
                <p className="text-balance text-muted-foreground">
                  Share your details that matters to you{" "}
                </p>
              </div>
              <SignUpForm />
            </div>
          </div>
          {/* ----------------------------------- Image ------------------------------------ */}
          <div className="relative hidden md:block">
            <Image
              src={signUpImage}
              alt="image"
              className="absolute inset-0 h-full w-full object-cover z-10"
            />
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
