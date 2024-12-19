import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { SignUpForm } from "./SignUpForm";

export function SignUpDialog() {
  const [open, setOpen] = useState(false);

  const handleSuccess = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Sign Up</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Your Account</DialogTitle>
          <DialogDescription>
            Join us to access exclusive features and offers
          </DialogDescription>
        </DialogHeader>
        <SignUpForm onSuccess={handleSuccess} />
      </DialogContent>
    </Dialog>
  );
}