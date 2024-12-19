import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface NegotiateDialogProps {
  vehicleName: string;
  price: number;
}

export function NegotiateDialog({ vehicleName, price }: NegotiateDialogProps) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Sent",
      description: "We'll get back to you shortly regarding your negotiation request.",
    });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg">Negotiate Price</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Negotiate Price</DialogTitle>
          <DialogDescription>
            Submit your offer for the {vehicleName}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Your Offer</label>
            <Input type="number" placeholder="Enter your offer" required />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Message</label>
            <Textarea 
              placeholder="Include any additional comments or questions"
              className="min-h-[100px]"
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Submit Offer
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}