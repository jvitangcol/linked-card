import Link from "next/link";
import { Facebook, IdCard, Instagram, Linkedin, Twitter } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer className="bg-secondary border-t-2 border-primary">
      <div className="lg:container mx-auto px-5 space-y-7">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-10 ">
          {/* ---------------------------- Logo and input email -------------------------------- */}
          <div className="space-y-3 ">
            {/* Logo */}
            <Link
              href={"/"}
              className="flex gap-1 items-center font-semibold text-2xl"
            >
              <span>Link</span>
              <IdCard size={28} className="text-primary" />
            </Link>

            <p className="">
              Subscribe to our newsletter for the latest updates on features and
              releases.
            </p>

            <div className="space-y-2">
              <form className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <Input
                  type="email"
                  placeholder="Your email here"
                  className="md:col-span-2"
                />
                <Button type="submit" className="w-full md:w-[100px]">
                  Join
                </Button>
              </form>
              <p className="text-xs">
                By subscribing, you consent to our Privacy Policy and agree to
                receive updates.
              </p>
            </div>
          </div>

          {/* --------------------------- Links ----------------------------------- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
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
              </div>
            </div>
          </div>
        </div>

        {/* --------------------------- Credits ----------------------------------- */}
        <div className="pb-10">
          <div className="flex flex-col md:justify-between md:flex-row gap-4 text-sm">
            {/* All rights */}
            <h6 className="order-2 md:order-1 ">
              © 2025 LinkCard. All rights reserved.
            </h6>

            <div className="flex flex-col md:flex-row gap-2 order-1 md:order-2 underline">
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
