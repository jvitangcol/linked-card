import { Save, Link, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import share from "@/assets/share.png";
import Image from "next/image";

export default function Share() {
  return (
    <section className="bg-background py-10 scroll-mt-10" id="features">
      <div className="lg:container mx-auto px-5">
        {/* Wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Column One */}
          <div className="space-y-5">
            <h6 className="font-semibold text-primary">Share</h6>

            <h1 className="text-4xl md:text-[44px] font-bold text-primary">
              Easily Save and Share Your Digital Card
            </h1>
            <p className="text-primary-foreground">
              With LinkCard, you can effortlessly save your digital card as an
              image, share it via a link, or generate a convenient QR code.
              Choose the option that best fits your needs and share your details
              with ease.
            </p>

            {/* Small Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-primary">
              <div className="space-y-2">
                <Save size={40} />
                <h5 className=" text-lg font-bold">Save as Image</h5>
                <p>
                  Download your card as a high-quality image for easy sharing.
                </p>
              </div>
              <div className="space-y-2">
                <Link size={40} />
                <h5 className="text-lg font-bold">Share Link</h5>
                <p>
                  Generate a unique link to share your card with anyone
                  instantly.
                </p>
              </div>
            </div>

            {/* Buttons  */}
            <div className="space-x-2">
              <Button variant={"outline"} className="bg-card">
                Learn More
              </Button>
              <Button variant={"ghost"}>
                <span>Sign up</span> <ChevronRight />
              </Button>
            </div>
          </div>
          {/* Column Two */}
          <div>
            <Image
              src={share}
              alt=""
              className="object-cover rounded-2xl mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
