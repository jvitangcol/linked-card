import MenuBar from "./Menubar";
import { Button } from "../ui/button";
import Link from "next/link";

export default function DesktopNavbar() {
  return (
    <div className="hidden md:block">
      <div className="flex gap-8">
        <MenuBar className="flex gap-2" />

        <div className="flex gap-2">
          <Button className="" variant={"secondary"}>
            <Link href={"login"}>Log in</Link>
          </Button>
          <Button>
            <Link href={"/sign-up"}>Sign up</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
