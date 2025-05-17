import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PencilRuler, ChevronRight, Footprints, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Create() {
  return (
    <section className="bg-background pt-16">
      <div className="lg:container mx-auto px-5">
        <div className="space-y-4">
          <h6 className="font-semibold text-center">Create</h6>
          <h1 className="text-4xl md:text-[44px] font-bold text-primary-foreground text-center">
            Your Digital Card Awaits
          </h1>
          <p className="text-muted-foreground text-center">
            Easily customize and share your personal or business details.
          </p>
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* card 1 */}
            <Card className="md:col-span-2">
              <CardHeader>
                <PencilRuler size={44} />
                <CardTitle className="text-[32px] md:text-4xl font-bold">
                  Customize Your Card
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Select your design, colors, and details to make your card
                  uniquely yours.
                </CardDescription>
              </CardContent>
              <CardFooter className="space-x-2">
                <Button variant={"secondary"}>Start</Button>
                <Button variant={"ghost"}>
                  <span>Share</span>
                  <ChevronRight />
                </Button>
              </CardFooter>
            </Card>

            {/* card 2 */}
            <Card>
              <CardHeader>
                <Footprints size={44} />
                <CardTitle className="text-xl font-bold">
                  Steps to Create Your Card
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Follow these simple steps to get started.
                </CardDescription>
              </CardContent>
              <CardFooter className="space-x-2">
                <Button variant={"ghost"} className="bg-card">
                  <span>Save</span>
                  <ChevronRight />
                </Button>
              </CardFooter>
            </Card>

            {/* card 2 */}
            <Card>
              <CardHeader>
                <Share2 size={44} />
                <CardTitle className="text-xl font-bold">
                  Sharing Your Card Made Easy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Share via link, QR code, or save as image.
                </CardDescription>
              </CardContent>
              <CardFooter className="space-x-2">
                <Button variant={"ghost"} className="bg-card">
                  <span>Explore</span>
                  <ChevronRight />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
