import Link from "next/link";
import {
  Facebook,
  IdCard,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer className="bg-secondary border-t-2 border-primary">
      <div className="lg:container mx-auto px-5">
        <div className="grid grid-cols-1 gap-8 py-10 border border-red-600">
          {/* Logo and input email */}
          <div className="border border-blue-600">
            {/* Logo */}
            <Link
              href={"/"}
              className="flex gap-1 items-center font-semibold text-2xl"
            >
              <span>Link</span>
              <IdCard size={28} className="text-primary" />
            </Link>
            <div>
              <form className="flex flex-col gap-2">
                <Input type="email" placeholder="Your email here" />
                <Button type="submit" className="w-full">
                  Join
                </Button>
              </form>
            </div>

            <p className="text-xs">
              By subscribing, you consent to our Privacy Policy and agree to
              receive updates.
            </p>
          </div>

          {/* --------------------------- Links ----------------------------------- */}
          <div className="grid grid-cols-1 gap-8 border border-yellow-600">
            {/* Quick links */}
            <div className="space-y-4">
              <h4 className="font-semibold">Quick Links</h4>
              <div className="flex flex-col gap-2 text-sm">
                <Link
                  href={"/"}
                  className="hover:underline hover:text-secondary-foreground transition delay-75 duration-200 ease-initial"
                >
                  Homepage
                </Link>
                <Link
                  href={"#about"}
                  className="hover:underline hover:text-secondary-foreground transition delay-75 duration-200 ease-initial"
                >
                  About Us
                </Link>
                <Link
                  href={"/"}
                  className="hover:underline hover:text-secondary-foreground transition delay-75 duration-200 ease-initial"
                >
                  Contact Support
                </Link>
                <Link
                  href={"/"}
                  className="hover:underline hover:text-secondary-foreground transition delay-75 duration-200 ease-initial"
                >
                  Help Center
                </Link>
              </div>
            </div>

            {/* Stay connected */}
            <div className="space-y-4">
              <h4 className="font-semibold">Stay Connected</h4>
              <div className="flex flex-col gap-2 text-sm">
                <Link
                  href={"/"}
                  className="hover:underline hover:text-secondary-foreground transition delay-75 duration-200 ease-initial"
                >
                  Facebook Page
                </Link>
                <Link
                  href={"#about"}
                  className="hover:underline hover:text-secondary-foreground transition delay-75 duration-200 ease-initial"
                >
                  Instagram Feed
                </Link>
                <Link
                  href={"/"}
                  className="hover:underline hover:text-secondary-foreground transition delay-75 duration-200 ease-initial"
                >
                  Twitter Profile
                </Link>
                <Link
                  href={"/"}
                  className="hover:underline hover:text-secondary-foreground transition delay-75 duration-200 ease-initial"
                >
                  LinkedIn Page
                </Link>
                <Link
                  href={"/"}
                  className="hover:underline hover:text-secondary-foreground transition delay-75 duration-200 ease-initial"
                >
                  YouTube Channel
                </Link>
              </div>
            </div>

            {/* Follow Us */}
            <div className="space-y-4">
              <h4 className="font-semibold">Follow Us</h4>
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex gap-2">
                  <Facebook size={20} />
                  <Link
                    href={"/"}
                    className="hover:underline hover:text-secondary-foreground transition delay-75 duration-200 ease-initial"
                  >
                    Facebook
                  </Link>
                </div>

                <div className="flex gap-2">
                  <Instagram size={20} />
                  <Link
                    href={"#about"}
                    className="hover:underline hover:text-secondary-foreground transition delay-75 duration-200 ease-initial"
                  >
                    Instagram
                  </Link>
                </div>

                <div className="flex gap-2">
                  <Twitter size={20} />
                  <Link
                    href={"/"}
                    className="hover:underline hover:text-secondary-foreground transition delay-75 duration-200 ease-initial"
                  >
                    Twitter
                  </Link>
                </div>

                <div className="flex gap-2">
                  <Linkedin size={20} />
                  <Link
                    href={"/"}
                    className="hover:underline hover:text-secondary-foreground transition delay-75 duration-200 ease-initial"
                  >
                    LinkedIn
                  </Link>
                </div>

                <div className="flex gap-2">
                  <Youtube size={20} />
                  <Link
                    href={"/"}
                    className="hover:underline hover:text-secondary-foreground transition delay-75 duration-200 ease-initial"
                  >
                    YouTube
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* Credits */}
          <div>
            {/* All rights */}
            <h6>© 2025 LinkCard. All rights reserved.</h6>

            <div>
              <span>Privacy Policy</span>
              <span>Terms of Use</span>
              <span>Cookie Settings</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
