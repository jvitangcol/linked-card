"use client";

import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import { useForm } from "@tanstack/react-form";
import type { AnyFieldApi } from "@tanstack/react-form";
import { useRouter } from "next/navigation";
import { EyeOff, Eye } from "lucide-react";

import { signInSchema, SignInValues } from "@/lib/validation";
import { signInEmailAction } from "@/actions/auth/sign-in-email.action";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import LoadingButton from "@/components/LoadingButton";

function FieldInfo({ field }: { field: AnyFieldApi }) {
  return (
    <>
      {field.state.meta.isTouched && !field.state.meta.isValid ? (
        <em className="text-destructive text-xs">
          {field.state.meta.errors.map((err) => err.message).join(", ")}
        </em>
      ) : null}
      {field.state.meta.isValidating ? "Validating..." : null}
    </>
  );
}

export default function LoginForm() {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onChange: signInSchema,
    },
    onSubmit: async ({ value }: { value: SignInValues }) => {
      setIsPending(true);

      const { error } = await signInEmailAction(value);

      if (error) {
        toast.error(error);
        setIsPending(false);
      } else {
        toast.success("Login successful.");
        router.push("/cards");
      }
    },
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <div className="space-y-6">
          {/* Email Field */}
          <form.Field name="email">
            {(field) => (
              <div className="space-y-2">
                <Label htmlFor={field.name}>Email</Label>
                <Input
                  type="email"
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  autoComplete="off"
                />
                <div>
                  <FieldInfo field={field} />
                </div>
              </div>
            )}
          </form.Field>

          {/* Password Field */}
          <form.Field name="password">
            {(field) => (
              <div className="space-y-2 ">
                <Label htmlFor={field.name}>Password</Label>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    title={showPassword ? "Hide password" : "Show password"}
                    className="absolute right-3 top-1/2 -translate-y-1/2 transform text-muted-foreground"
                  >
                    {showPassword ? (
                      <EyeOff className="size-5" />
                    ) : (
                      <Eye className="size-5" />
                    )}
                  </button>
                </div>

                <FieldInfo field={field} />
              </div>
            )}
          </form.Field>

          <LoadingButton type="submit" className="w-full" loading={isPending}>
            Login
          </LoadingButton>
        </div>
      </form>

      <div className="mt-2 text-center text-xs">
        <span>Don&apos;t have an account? </span>
        <Link href={"/auth/sign-up"} className="underline underline-offset-4">
          Sign up
        </Link>
      </div>
    </div>
  );
}
