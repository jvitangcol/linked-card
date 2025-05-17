import { Button } from "../ui/button";

export default function Slogan() {
  return (
    <section className="bg-background py-10">
      <div className="lg:container mx-auto px-5 space-y-4">
        <h1 className="text-4xl md:text-[44px] font-bold text-primary-foreground">
          Create Your Digital Card Today
        </h1>
        <p>
          Easily design and share your personalized digital card in just a few
          simple steps.
        </p>

        {/* Buttons */}
        <div className="space-x-2">
          <Button>Start</Button>
          <Button variant={"outline"}>Learn More</Button>
        </div>
      </div>
    </section>
  );
}
