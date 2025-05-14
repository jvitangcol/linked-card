import { Button } from "@/components/ui/button";
import Link from "next/link";

interface MenuBarProps {
  className?: string;
}

export default function MenuBar({ className }: MenuBarProps) {
  return (
    <div className={className}>
      <Button
        variant={"ghost"}
        className="flex items-center justify-center"
        title="Home"
        asChild
      >
        <Link href={"/"}>
          <span>Home</span>
        </Link>
      </Button>
      <Button
        variant={"ghost"}
        className="flex items-center justify-center"
        title="Home"
        asChild
      >
        <Link href={"#about"}>
          <span>About</span>
        </Link>
      </Button>
      <Button
        variant={"ghost"}
        className="flex items-center justify-center"
        title="Home"
        asChild
      >
        <Link href={"#features"}>
          <span>Features</span>
        </Link>
      </Button>
    </div>
  );
}
