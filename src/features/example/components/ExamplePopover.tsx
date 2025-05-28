import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

export function ExamplePopover() {
  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="secondary">Open popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          <div>
            <div>
              <h4>Dimensions</h4>
              <p>Set the dimensions for the layer.</p>
            </div>
            <div>
              <div>
                <Label htmlFor="width">Width</Label>
                <Input id="width" defaultValue="100%" />
              </div>
              <div>
                <Label htmlFor="maxWidth">Max. width</Label>
                <Input id="maxWidth" defaultValue="300px" />
              </div>
              <div>
                <Label htmlFor="height">Height</Label>
                <Input id="height" defaultValue="25px" />
              </div>
              <div>
                <Label htmlFor="maxHeight">Max. height</Label>
                <Input id="maxHeight" defaultValue="none" />
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
