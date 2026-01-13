"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { GlobeIcon } from "@radix-ui/react-icons";
import { usePostHog } from "posthog-js/react";

export function NewPortfolioDialog() {
  const [open, setOpen] = useState(false);
  const posthog = usePostHog();

  useEffect(() => {
    // Show dialog when component mounts (page loads)
    setOpen(true);
  }, []);

  const handleVisitClick = () => {
    if (posthog) {
      posthog.capture("click", {
        type: "new_portfolio_dialog_visit",
        element: "Visit New Portfolio",
      });
    }
    window.open("https://lexwilliam.dev", "_blank", "noopener,noreferrer");
  };

  const handleClose = () => {
    if (posthog) {
      posthog.capture("click", {
        type: "new_portfolio_dialog_close",
        element: "Close Dialog",
      });
    }
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>New Portfolio Website!</DialogTitle>
          <DialogDescription className="pt-2">
            I have a new portfolio website at{" "}
            <span className="font-semibold text-white">lexwilliam.dev</span>.
            Check it out to see my latest work and projects!
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <Button
            onClick={handleVisitClick}
            className="bg-white text-black hover:bg-gray-200 flex-1"
          >
            <GlobeIcon className="w-4 h-4 mr-2" />
            Visit New Portfolio
          </Button>
          <Button
            onClick={handleClose}
            variant="outline"
            className="border-white text-white hover:bg-gray-800 flex-1"
          >
            Maybe Later
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
