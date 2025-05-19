import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function CardForm() {
  return (
    <section className="h-full border border-red-600">
      <div className="grid grid-cols-3">
        <div className="h-full border border-blue-600">Link Card</div>
        <div className="col-span-2 h-full border border-yellow-600">
          {/* Display */}
          <div>
            <h2>Display</h2>
            <div>
              <Label htmlFor="design">Design</Label>
            </div>

            <div>
              <Label>Base Color</Label>
            </div>
          </div>
          {/* Personal */}
          <div>
            <h2>Personal</h2>
            <div>
              <Label>Prefix</Label>
              <Input type="text" />
            </div>
            <div>
              <Label>First Name</Label>
              <Input type="text" />
            </div>
            <div>
              <Label>Last Name</Label>
              <Input type="text" />
            </div>
            <div>
              <Label>Suffix</Label>
              <Input type="text" />
            </div>
          </div>
          {/* Affiliation */}
          <div>
            <h2>Affiliation</h2>
            <div>
              <Label>Title</Label>
              <Input type="text" />
            </div>
            <div>
              <Label>Department</Label>
              <Input type="text" />
            </div>
            <div>
              <Label>Company</Label>
              <Input type="text" />
            </div>
            <div>
              <Label>Headline</Label>
              <Input type="text" />
            </div>
          </div>
          {/* Fields */}
          <div>
            <h2>Fields</h2>
            <div>
              <Label>Website</Label>
              <Input type="text" />
            </div>
            <div>
              <Label>Link</Label>
              <Input type="text" />
            </div>
            <div>
              <Label>Instagram</Label>
              <Input type="text" />
            </div>
            <div>
              <Label>Email</Label>
              <Input type="text" />
            </div>
            <div>
              <Label>Phone</Label>
              <Input type="text" />
            </div>
            <div>
              <Label>LinkedIn</Label>
              <Input type="text" />
            </div>
            <div>
              <Label>Facebook</Label>
              <Input type="text" />
            </div>
          </div>

          <div>
            <Button variant={"ghost"}>Cancel</Button>
            <Button>Submit</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
