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
      personal: {
        prefix: "",
        suffix: "",
        firstName: "",
        lastName: "",
      },
      affiliation: {
        title: "",
        department: "",
        company: "",
        headline: "",
      },
      field: {
        phone: {
          number: "",
          label: "",
        },
        email: {
          emailAddress: "",
          label: "",
        },
        website: {
          link: "",
          displayText: "",
        },
        facebook: {
          link: "",
          displayText: "",
        },
        instagram: {
          link: "",
          displayText: "",
        },
        youtube: {
          link: "",
          displayText: "",
        },
        linkedIn: {
          link: "",
          displayText: "",
        },
        gitLab: {
          link: "",
          displayText: "",
        },
        gitHub: {
          link: "",
          displayText: "",
        },
      },
    } as CardValues,
    validators: {
      onChange: cardSchema,
      onChangeAsyncDebounceMs: 500,
    },
    onSubmit: async ({ value }) => {
      alert(JSON.stringify(value));
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
              cardForm.handleSubmit();
            }}
          >
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
                <cardForm.Field name="personal.prefix">
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

                {/* Suffix Field --------------------------- */}
                <cardForm.Field name="personal.suffix">
                  {(field) => (
                    <div className="space-y-2">
                      <Label htmlFor={field.name}>Suffix</Label>
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

                {/* First Name Field --------------------------- */}
                <cardForm.Field name="personal.firstName">
                  {(field) => (
                    <div className="space-y-2">
                      <Label htmlFor={field.name}>First name</Label>
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

                {/* Last Name Field --------------------------- */}
                <cardForm.Field name="personal.lastName">
                  {(field) => (
                    <div className="space-y-2">
                      <Label htmlFor={field.name}>Last name</Label>
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
              </div>
            </div>

            {/* Affiliation -------------------------------------------------------------------- */}
            <div className="space-y-3">
              <h2 className="font-semibold text-2xl">Affiliation</h2>
              <div className="grid grid-cols-2 gap-3">
                {/* Title Field --------------------------- */}
                <cardForm.Field name="affiliation.title">
                  {(field) => (
                    <div className="space-y-2">
                      <Label htmlFor={field.name}>Title</Label>
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

                {/* Department Field --------------------------- */}
                <cardForm.Field name="affiliation.department">
                  {(field) => (
                    <div className="space-y-2">
                      <Label htmlFor={field.name}>Department</Label>
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

                {/* Company Field --------------------------- */}
                <cardForm.Field name="affiliation.company">
                  {(field) => (
                    <div className="space-y-2">
                      <Label htmlFor={field.name}>Company</Label>
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

                {/* Headline Field --------------------------- */}
                <cardForm.Field name="affiliation.headline">
                  {(field) => (
                    <div className="space-y-2">
                      <Label htmlFor={field.name}>Headline</Label>
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
              </div>
            </div>

            {/* Fields ---------------------------------------------------------------------------- */}
            <div className="space-y-3">
              <h2 className="font-semibold text-2xl">Fields</h2>
              <div className="grid grid-cols-3 gap-3">
                {/* Phone Field --------------------------- */}
                <div className="space-y-2">
                  <Label>Phone</Label>
                  <cardForm.Field name="field.phone">
                    {(field) => (
                      <div className="space-y-2">
                        <Input
                          type="tel"
                          placeholder="eg. 09123456789"
                          name={field.name}
                          id={field.name}
                          value={field.state.value.number}
                          onChange={(e) =>
                            field.handleChange({
                              ...field.state.value,
                              number: e.target.value,
                            })
                          }
                        />
                        <FieldInfo field={field} />
                      </div>
                    )}
                  </cardForm.Field>

                  <cardForm.Field name="field.phone.label">
                    {(field) => (
                      <div className="space-y-2">
                        <Select
                          value={field.state.value}
                          onValueChange={(val) => field.handleChange(val)}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select information type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="personal">personal</SelectItem>
                            <SelectItem value="work">work</SelectItem>
                          </SelectContent>
                        </Select>
                        <FieldInfo field={field} />
                      </div>
                    )}
                  </cardForm.Field>
                </div>

                {/* Email Field --------------------------- */}
                <div className="space-y-2">
                  <cardForm.Field name="field.email.emailAddress">
                    {(field) => (
                      <div>
                        <Label htmlFor={field.name}>Email</Label>
                        <Input
                          type="email"
                          placeholder="Enter a valid email"
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                        />
                        <FieldInfo field={field} />
                      </div>
                    )}
                  </cardForm.Field>
                  <cardForm.Field name="field.email.label">
                    {(field) => (
                      <div className="space-y-2">
                        <Select
                          value={field.state.value}
                          onValueChange={(val) => field.handleChange(val)}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select information type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="personal">personal</SelectItem>
                            <SelectItem value="work">work</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}
                  </cardForm.Field>
                </div>

                {/* Website Field --------------------------- */}
                <div className="space-y-2">
                  <cardForm.Field name="field.website.link">
                    {(field) => (
                      <div className="space-y-2">
                        <Label htmlFor={field.name}>Website</Label>
                        <Input
                          type="url"
                          placeholder="www.samplelink.com"
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                        />
                        <FieldInfo field={field} />
                      </div>
                    )}
                  </cardForm.Field>

                  <cardForm.Field name="field.website.displayText">
                    {(field) => (
                      <div className="space-y-2">
                        <Input
                          type="text"
                          placeholder="Display text"
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                        />
                        <FieldInfo field={field} />
                      </div>
                    )}
                  </cardForm.Field>
                </div>

                {/* Facebook Field --------------------------- */}
                <div className="space-y-2">
                  <cardForm.Field name="field.facebook.link">
                    {(field) => (
                      <div className="space-y-2">
                        <Label htmlFor={field.name}>Facebook</Label>
                        <Input
                          type="url"
                          placeholder="www.samplelink.com"
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                        />
                        <FieldInfo field={field} />
                      </div>
                    )}
                  </cardForm.Field>

                  <cardForm.Field name="field.website.displayText">
                    {(field) => (
                      <div className="space-y-2">
                        <Input
                          type="text"
                          placeholder="Display text"
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                        />
                        <FieldInfo field={field} />
                      </div>
                    )}
                  </cardForm.Field>
                </div>

                {/* Instagram Field --------------------------- */}
                <div className="space-y-2">
                  <cardForm.Field name="field.instagram.link">
                    {(field) => (
                      <div className="space-y-2">
                        <Label htmlFor={field.name}>Instagram</Label>
                        <Input
                          type="url"
                          placeholder="www.samplelink.com"
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                        />
                        <FieldInfo field={field} />
                      </div>
                    )}
                  </cardForm.Field>

                  <cardForm.Field name="field.instagram.displayText">
                    {(field) => (
                      <div className="space-y-2">
                        <Input
                          type="text"
                          placeholder="Display text"
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                        />
                        <FieldInfo field={field} />
                      </div>
                    )}
                  </cardForm.Field>
                </div>

                {/* Twitter Field --------------------------- */}
                <div className="space-y-2">
                  <cardForm.Field name="field.youtube.link">
                    {(field) => (
                      <div className="space-y-2">
                        <Label htmlFor={field.name}>Youtube</Label>
                        <Input
                          type="url"
                          placeholder="www.samplelink.com"
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                        />
                        <FieldInfo field={field} />
                      </div>
                    )}
                  </cardForm.Field>

                  <cardForm.Field name="field.youtube.displayText">
                    {(field) => (
                      <div className="space-y-2">
                        <Input
                          type="text"
                          placeholder="Display text"
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                        />
                        <FieldInfo field={field} />
                      </div>
                    )}
                  </cardForm.Field>
                </div>

                {/* LinkedIn Field --------------------------- */}
                <div className="space-y-2">
                  <cardForm.Field name="field.linkedIn.link">
                    {(field) => (
                      <div className="space-y-2">
                        <Label htmlFor={field.name}>LinkedIn</Label>
                        <Input
                          type="url"
                          placeholder="www.samplelink.com"
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                        />
                        <FieldInfo field={field} />
                      </div>
                    )}
                  </cardForm.Field>
                  <Input type="text" placeholder="Display text" />
                </div>

                {/* GitLab Field --------------------------- */}
                <div className="space-y-2">
                  <cardForm.Field name="field.gitLab.link">
                    {(field) => (
                      <div>
                        <Label htmlFor={field.name}>GitLab</Label>
                        <Input
                          type="url"
                          placeholder="www.samplelink.com"
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                        />
                        <FieldInfo field={field} />
                      </div>
                    )}
                  </cardForm.Field>

                  <cardForm.Field name="field.gitLab.displayText">
                    {(field) => (
                      <div className="space-y-2">
                        <Input
                          type="text"
                          placeholder="Display text"
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                        />
                        <FieldInfo field={field} />
                      </div>
                    )}
                  </cardForm.Field>
                </div>

                {/* GitHub Field --------------------------- */}
                <div className="space-y-2">
                  <cardForm.Field name="field.gitHub.link">
                    {(field) => (
                      <div className="space-y-2">
                        <Label htmlFor={field.name}>GitHub</Label>
                        <Input
                          type="url"
                          placeholder="www.samplelink.com"
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                        />
                        <FieldInfo field={field} />
                      </div>
                    )}
                  </cardForm.Field>

                  <cardForm.Field name="field.gitHub.displayText">
                    {(field) => (
                      <div className="space-y-2">
                        <Input
                          type="text"
                          placeholder="Display text"
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                        />
                      </div>
                    )}
                  </cardForm.Field>
                </div>
              </div>
            </div>

            <div>
              <Button variant={"ghost"}>Cancel</Button>
              <Button>Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
