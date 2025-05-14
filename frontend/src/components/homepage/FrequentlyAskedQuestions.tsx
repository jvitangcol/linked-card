import { Dot } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../ui/button";

export default function FrequentlyAskedQuestions() {
  return (
    <section className="bg-background py-10">
      <div className="lg:container mx-auto px-5 space-y-8">
        <h1 className="text-4xl font-bold text-primary ">FAQs</h1>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              What is LinkCard and how does it work?
            </AccordionTrigger>
            <AccordionContent className="text-primary-foreground">
              <span className="font-semibold text-foreground">LinkCard</span> is
              a digital tool that lets you create personalized business or
              personal cards online. You can customize your card’s look, add
              your contact info or links, and then share it as a{" "}
              <span className="font-semibold text-foreground">
                URL, QR code,
              </span>{" "}
              or{" "}
              <span className="font-semibold text-foreground">
                downloadable image—all
              </span>{" "}
              in just a few clicks.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Can I customize the look of my digital card?
            </AccordionTrigger>
            <AccordionContent className="text-primary-foreground">
              Absolutely! LinkCard offers various{" "}
              <span className="font-semibold text-foreground">
                layouts, color schemes, and styles
              </span>{" "}
              so you can design a card that represents your personal or
              professional brand. Whether you prefer something minimalist or
              bold, there’s a design that suits your style.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              How do I share my LinkCard with others?
            </AccordionTrigger>
            <AccordionContent className="text-primary-foreground">
              You can share your LinkCard in three easy ways:
              <ul className="list-inside mt-3 space-y-2">
                <li className="flex gap-1">
                  <Dot className="text-primary" />
                  <span className="text-primary font-semibold">
                    Send a link
                  </span>{" "}
                  <span>via text, email, or social media</span>
                </li>
                <li className="flex gap-1">
                  <Dot className="text-primary" />
                  <span className="text-primary font-semibold">
                    Download it as an image
                  </span>
                  <span>and share or print it</span>
                </li>

                <li className="flex gap-1">
                  <Dot className="text-primary" />
                  <span className="text-primary font-semibold inline">
                    Generate a QR code
                  </span>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Do I need to download an app to use LinkCard?
            </AccordionTrigger>
            <AccordionContent className="text-primary-foreground">
              No download is needed! LinkCard is entirely web-based, so you can
              create, edit, and share your digital card directly from your
              browser—anytime, anywhere.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              Is LinkCard suitable for both personal and professional use?
            </AccordionTrigger>
            <AccordionContent className="text-primary-foreground">
              Absolutely. Whether you’re a freelancer, small business owner, job
              seeker, or just someone who wants a sleek way to share contact
              info, LinkCard is designed to be flexible for both personal and
              professional needs.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="space-y-3">
          <h3 className="text-2xl md:text-3xl font-semibold text-primary">
            Still have questions?
          </h3>
          <p className="text-primary-foreground ">
            Discover the future of networking with digital cards.
          </p>
          <Button variant={"secondary"}>Contact</Button>
        </div>
      </div>
    </section>
  );
}
