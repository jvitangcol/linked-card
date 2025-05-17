"use server";

import { auth } from "@/lib/auth";
import { signUpSchema, SignUpValues } from "@/lib/validation";
import { APIError } from "better-auth/api";

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
  } catch (err) {
    if (err instanceof APIError) {
      return { error: err.message };
    }

    return { error: "Internal Server Error" };
  }
}
