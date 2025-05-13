import { z } from "zod";

const requiredString = z.string().trim().min(1, "Required");

export const signUpSchema = z.object({
  name: requiredString.min(3, "Name must be at least 3 characters"),
  email: requiredString.email("Invalid email address"),
  password: requiredString.min(8, "Must be at least 8 characters"),
});

export type SignUpValues = z.infer<typeof signUpSchema>;

export const signInSchema = z.object({
  email: requiredString.email("Invalid email address"),
  password: requiredString,
});

export type SignInValues = z.infer<typeof signInSchema>;
