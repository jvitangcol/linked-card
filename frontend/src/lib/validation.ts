import { z } from "zod";

const requiredString = z.string().trim().min(1, "Required");
const stringWithTrim = z.string().trim().optional();
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
  personal: z.object({
    prefix: stringWithTrim,
    suffix: stringWithTrim,
    firstName: requiredString,
    lastName: requiredString,
  }),
  affiliation: z.object({
    title: stringWithTrim,
    department: stringWithTrim,
    company: stringWithTrim,
    headline: stringWithTrim,
  }),
  field: z.object({
    phone: z.object({
      number: phoneSchema,
      label: stringWithTrim,
    }),
    email: z.object({
      emailAddress: stringWithTrim,
      label: stringWithTrim,
    }),
    website: z.object({
      link: urlSchema,
      displayText: stringWithTrim,
    }),
    facebook: z.object({
      link: urlSchema,
      displayText: stringWithTrim,
    }),
    instagram: z.object({
      link: urlSchema,
      displayText: stringWithTrim,
    }),
    youtube: z.object({
      link: urlSchema,
      displayText: stringWithTrim,
    }),
    linkedIn: z.object({
      link: urlSchema,
      displayText: stringWithTrim,
    }),
    gitLab: z.object({
      link: urlSchema,
      displayText: stringWithTrim,
    }),
    gitHub: z.object({
      link: urlSchema,
      displayText: stringWithTrim,
    }),
  }),
});

export type CardValues = z.infer<typeof cardSchema>;
