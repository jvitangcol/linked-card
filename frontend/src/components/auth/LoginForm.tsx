"use client";

import Link from "next/link";
import { useForm } from "@tanstack/react-form";
import type { AnyFieldApi } from "@tanstack/react-form";
import { useRouter } from "next/navigation";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { signInSchema } from "@/lib/validation";
import { signIn } from "@/lib/auth-client";

function FieldInfo({ field }: { field: AnyFieldApi }) {
  return (
    <>
      {field.state.meta.isTouched && !field.state.meta.isValid ? (
        <em className="text-destructive text-sm">
          <em>
            {field.state.meta.errors.map((err) => err.message).join(", ")}
          </em>
        </em>
      ) : null}
      {field.state.meta.isValidating ? "Validating..." : null}
    </>
  );
}

export default function LoginForm() {
  const router = useRouter();
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onChange: signInSchema,
    },
    onSubmit: async ({ value }) => {
      await signIn.email(
        {
          email: value.email,
          password: value.password,
        },
        {
          onRequest: () => {},
          onResponse: () => {},
          onError: (ctx) => {
            toast.error(ctx.error.message);
          },
          onSuccess: () => {
            router.push("/cards");
          },
        }
      );
    },
  });

  return (
    <div className="space-y-4 border">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Welcome Back</h1>
        <p className="text-sm text-muted-foreground">Share it digital</p>
      </div>

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
              <div className="space-y-2">
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

          <Button type="submit" className="w-full">
            Login
          </Button>
        </div>
      </form>

      <div className="text-center">
        <span>Don&apos;t have an account? </span>
        <Link href={"/sign-up"} className="text-primary hover:underline">
          Sign up
        </Link>
      </div>
    </div>
  );
}
