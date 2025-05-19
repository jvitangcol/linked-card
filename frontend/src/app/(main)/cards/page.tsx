import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex justify-center items-center h-full w-auto  p-5">
      <div className="flex flex-col justify-center items-center gap-8">
        <h1 className="font-bold text-3xl">Welcome to your cards page!</h1>
        <div className="flex items-center gap-5"></div>
        <Button>
          <Link href={"/cards/create"}>Create Card</Link>
        </Button>
      </div>
    </main>
  );
}
