"use client";

import { useSession } from "@/lib/auth-client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MailIcon } from "lucide-react";

export default function CardHorizontal() {
  const { data } = useSession();

  return (
    <Card className="w-[336px] h-auto p-0 overflow-hidden">
      <CardHeader className="bg-accent h-[100px]"></CardHeader>
      <CardContent className="p-2">
        <CardTitle>{data?.user.name}</CardTitle>
        <div className="flex gap-2">
          <MailIcon />
          <span>{data?.user.email}</span>
        </div>
      </CardContent>
    </Card>
  );
}
