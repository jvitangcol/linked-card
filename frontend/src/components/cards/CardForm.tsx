"use client";

// import { useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
import { useForm } from "@tanstack/react-form";
import type { AnyFieldApi } from "@tanstack/react-form";

// import LoadingButton from "@/components/LoadingButton";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cardSchema, CardValues } from "@/lib/validation";

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

export function CardForm() {
  // const router = useRouter();
  // const [isPending, setIsPending] = useState(false);

  const cardForm = useForm({
    defaultValues: {
      prefix: "",
      suffix: "",
      firstName: "",
      lastName: "",
      title: "",
      department: "",
      company: "",
      headline: "",
      phone: "",
      phoneLabel: "",
      email: "",
      emailLabel: "",
      websiteLink: "",
      websiteLabel: "",
      facebookLink: "",
      facebookLabel: "",
      instagramLink: "",
      instagramLabel: "",
      youtubeLink: "",
      youtubeLabel: "",
      linkedInLink: "",
      linkedInLabel: "",
      gitLabLink: "",
      gitLabLabel: "",
      gitHubLink: "",
      gitHubLabel: "",
    } as CardValues,
    validators: {
      onChange: cardSchema,
      onChangeAsyncDebounceMs: 500,
    },
    onSubmit: async ({ value }) => {
      console.log(value);
    },
  });

  return (
    <section className="grid grid-cols-1 h-full">
      <div className="grid grid-cols-3 gap-5">
        <div className="flex justify-center items-start p-5 h-full">
          Card Preview
        </div>

        {/* Card Form ------------------------------------------------------- */}
        <div className="space-y-6 col-span-2 h-full">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              cardForm.handleSubmit();
            }}
          ></form>
          {/* Display -------------------------------------------------------------------------- */}
          {/* <div>
            <h2>Display</h2>
            <div>
              <Label htmlFor="design">Design</Label>
            </div>

            <div>
              <Label>Base Color</Label>
            </div>
          </div> */}
          {/* Personal ---------------------------------------------------------------------- */}
          <div className="space-y-3">
            <h2 className="font-semibold text-2xl">Personal</h2>

            <div className="grid grid-cols-2 gap-3 ">
              {/* Prefix Field --------------------------- */}
              <cardForm.Field name="prefix">
                {(field) => (
                  <div className="space-y-2">
                    <Label htmlFor={field.name}>Prefix</Label>
                    <Input
                      type="text"
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                    <FieldInfo field={field} />
                  </div>
                )}
              </cardForm.Field>
              <div className="space-y-2">
                <Label>Suffix</Label>
                <Input type="text" />
              </div>
              <div className="space-y-2">
                <Label>First Name</Label>
                <Input type="text" />
              </div>
              <div className="space-y-2">
                <Label>Last Name</Label>
                <Input type="text" />
              </div>
            </div>
          </div>

          {/* Affiliation -------------------------------------------------------------------- */}
          <div className="space-y-3">
            <h2 className="font-semibold text-2xl">Affiliation</h2>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label>Title</Label>
                <Input type="text" />
              </div>
              <div className="space-y-2">
                <Label>Department</Label>
                <Input type="text" />
              </div>
              <div className="space-y-2">
                <Label>Company</Label>
                <Input type="text" />
              </div>
              <div className="space-y-2">
                <Label>Headline</Label>
                <Input type="text" />
              </div>
            </div>
          </div>

          {/* Fields ---------------------------------------------------------------------------- */}
          <div className="space-y-3">
            <h2 className="font-semibold text-2xl">Fields</h2>
            <div className="grid grid-cols-3 gap-3">
              <div className="space-y-2">
                <Label>Phone</Label>
                <Input type="tel" placeholder="eg. 09123456789" />
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select information type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="personal">personal</SelectItem>
                    <SelectItem value="work">work</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Email</Label>
                <Input type="email" placeholder="Enter a valid email" />
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select information type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="personal">personal</SelectItem>
                    <SelectItem value="work">work</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Website</Label>
                <Input type="url" placeholder="www.samplelink.com" />
                <Input type="text" placeholder="Display text" />
              </div>

              <div className="space-y-2">
                <Label>Facebook</Label>
                <Input type="url" placeholder="www.samplelink.com" />
                <Input type="text" placeholder="Display text" />
              </div>
              <div className="space-y-2">
                <Label>Instagram</Label>
                <Input type="url" placeholder="www.samplelink.com" />
                <Input type="text" placeholder="Display text" />
              </div>
              <div className="space-y-2">
                <Label>Twitter / X</Label>
                <Input type="url" placeholder="www.samplelink.com" />
                <Input type="text" placeholder="Display text" />
              </div>

              <div className="space-y-2">
                <Label>LinkedIn</Label>
                <Input type="url" placeholder="www.samplelink.com" />
                <Input type="text" placeholder="Display text" />
              </div>
              <div className="space-y-2">
                <Label>GitLab</Label>
                <Input type="url" placeholder="www.samplelink.com" />
                <Input type="text" placeholder="Display text" />
              </div>
              <div className="space-y-2">
                <Label>GitHub</Label>
                <Input type="url" placeholder="www.samplelink.com" />
                <Input type="text" placeholder="Display text" />
              </div>
            </div>
          </div>

          <div>
            <Button variant={"ghost"}>Cancel</Button>
            <Button>Submit</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
