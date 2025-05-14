import Link from "next/link";
import { IdCard } from "lucide-react";

import MobileNavbar from "@/components/homepage/MobileNavbar";
import DesktopNavbar from "@/components/homepage/DesktopNavbar";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 h-16 w-full px-5  z-50 bg-background border-b-2 border-primary text-primary-foreground">
      <div className="lg:container mx-auto">
        <div className="flex justify-between items-center h-16">
          <Link
            href={"/"}
            className="flex gap-1 items-center font-semibold text-2xl"
          >
            <span>Link</span>
            <IdCard size={28} className="text-primary" />
          </Link>

          <div>
            <MobileNavbar />
            <DesktopNavbar />
          </div>
        </div>
      </div>
    </header>
  );
}
