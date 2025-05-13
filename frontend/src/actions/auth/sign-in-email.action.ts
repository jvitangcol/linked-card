"use server";

import { auth } from "@/lib/auth";
import { signInSchema, SignInValues } from "@/lib/validation";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { headers } from "next/headers";

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
  } catch (error) {
    if (isRedirectError(error)) throw error;
    console.error(error);

    return {
      error: "Something went wrong. Please try again",
    };
  }
}
