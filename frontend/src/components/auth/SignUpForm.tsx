"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "@tanstack/react-form";
import type { AnyFieldApi } from "@tanstack/react-form";

import { signUpSchema, SignUpValues } from "@/lib/validation";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import LoadingButton from "@/components/LoadingButton";
import { signUpEmailAction } from "@/actions/auth/sign-up.action";
import { toast } from "sonner";

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

export default function SignUpForm() {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    } as SignUpValues,
    validators: {
      onChange: signUpSchema,
    },
    onSubmit: async ({ value }: { value: SignUpValues }) => {
      setIsPending(true);

      const { error } = await signUpEmailAction(value);

      if (error) {
        toast.error(error);
        setIsPending(false);
      } else {
        toast.success("Registration complete. You're all set");
        router.push("/login");
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
          {/* Name Field */}
          <form.Field name="name">
            {(field) => (
              <div className="space-y-2">
                <Label htmlFor={field.name}>Name</Label>
                <Input
                  type="text"
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

          {/* Email Field */}
          <form.Field name="email">
            {(field) => (
              <div className="space-y-2 ">
                <Label htmlFor={field.name}>Email</Label>
                <Input
                  type="email"
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  autoComplete="off"
                />
                <div className="h-3.5">
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
                <Input
                  type="password"
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                <div className="h-3.5">
                  <FieldInfo field={field} />
                </div>
              </div>
            )}
          </form.Field>

          <LoadingButton type="submit" className="w-full" loading={isPending}>
            Create Account
          </LoadingButton>
        </div>
      </form>

      <div className="mt-2 text-center text-xs">
        Already have an account{" "}
        <Link
          href={"/login"}
          className="text-primary underline underline-offset-4"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
}
