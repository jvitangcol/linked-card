"use server";

import { auth } from "@/lib/auth";
import { signInSchema, SignInValues } from "@/lib/validation";
import { headers } from "next/headers";
import { APIError } from "better-auth/api";

export async function signInEmailAction(credentials: SignInValues) {
  try {
    const { email, password } = signInSchema.parse(credentials);

    await auth.api.signInEmail({
      headers: await headers(),
      body: {
        email,
        password,
      },
    });

    return { error: null };
  } catch (err) {
    if (err instanceof APIError) {
      return { error: err.message };
    }

    return { error: "Internal Server Error" };
  }
}
