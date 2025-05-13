"use server";

import { auth } from "@/lib/auth";
import { signUpSchema, SignUpValues } from "@/lib/validation";
import { isRedirectError } from "next/dist/client/components/redirect-error";

export async function signUpEmailAction(credentials: SignUpValues) {
  try {
    const { name, email, password } = signUpSchema.parse(credentials);

    await auth.api.signUpEmail({
      body: {
        name,
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
