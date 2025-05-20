import { z } from "zod";

const requiredString = z.string().trim().min(1, "Required");
const stringWithTrim = z.string().trim();
const phoneSchema = z
  .string()
  .regex(/^[0-9]+$/, "Phone number must contain digits only");
const urlSchema = z
  .string()
  .regex(
    /^(https?:\/\/)?([\w\-]+\.)+[a-z]{2,}(:\d+)?(\/\S*)?$/i,
    "Invalid URL format"
  );

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

export const cardSchema = z.object({
  prefix: stringWithTrim,
  suffix: stringWithTrim,
  firstName: requiredString,
  lastName: requiredString,
  title: stringWithTrim,
  department: stringWithTrim,
  company: stringWithTrim,
  headline: stringWithTrim,
  phone: phoneSchema,
  phoneLabel: stringWithTrim,
  email: stringWithTrim.email("Invalid email address"),
  emailLabel: stringWithTrim,
  websiteLink: urlSchema,
  websiteLabel: stringWithTrim,
  facebookLink: urlSchema,
  facebookLabel: stringWithTrim,
  instagramLink: urlSchema,
  instagramLabel: stringWithTrim,
  youtubeLink: urlSchema,
  youtubeLabel: stringWithTrim,
  linkedInLink: urlSchema,
  linkedInLabel: stringWithTrim,
  gitLabLink: urlSchema,
  gitLabLabel: stringWithTrim,
  gitHubLink: urlSchema,
  gitHubLabel: stringWithTrim,
});

export type CardValues = z.infer<typeof cardSchema>;
