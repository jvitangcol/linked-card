import Image from "next/image";

import hero from "@/assets/hero.png";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="hero" className="pt-16 h-dvh bg-background scroll-mt-20">
      <div className="h-full ">
        <div className="h-[200px] md:h-[300px] lg:h-[550px]">
          <Image src={hero} alt="" className="object-cover h-full" />
        </div>
        <div className="lg:container mx-auto px-5 h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 my-10 md:my-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">
              Transform Your Details into a Digital Card
            </h1>

            <div className="space-y-4">
              <p>
                LinkCard empowers you to effortlessly create customizable
                digital cards for personal or business use. Share your
                information in style with just a click, whether as a link, QR
                code, or image.
              </p>
              <div className="space-x-2">
                <Button>Get Started</Button>
                <Button variant={"outline"} className="bg-card">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
