import { ChevronRight, CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import customize from "@/assets/customize.png";
import Image from "next/image";

export default function Customize() {
  return (
    <section className=" bg-background py-10 scroll-mt-10" id="about">
      <div className="lg:container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-8">
          {/* Text */}
          <div className="space-y-4">
            <h6 className="font-semibold text-primary">Customize</h6>
            <div className="space-y-8">
              <h1 className="text-4xl md:text-[44px] font-bold text-primary">
                Design Your Unique Digital Business Card
              </h1>
              <p className="text-primary-foreground">
                With LinkCard, you can personalize your digital card to reflect
                your style. Choose from a variety of colors and layouts to make
                your card truly yours.
              </p>

              <div className="space-y-2">
                <div className="flex gap-3 items-start">
                  <CircleCheck />
                  <span>
                    Easily adjust colors to match your brand identity.
                  </span>
                </div>
                <div className="flex gap-3 items-start">
                  <CircleCheck />
                  <span>Add personal details that matter to you.</span>
                </div>
                <div className="flex gap-3 items-start">
                  <CircleCheck />
                  <span>Share your card effortlessly with a QR code.</span>
                </div>
              </div>
              <div className="space-x-2">
                <Button variant={"secondary"}>Create</Button>
                <Button variant={"ghost"}>
                  <span>Explore</span>
                  <ChevronRight />
                </Button>
              </div>
            </div>
          </div>

          {/* Image */}
          <div>
            <Image
              src={customize}
              alt=""
              className="object-cover rounded-2xl mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
