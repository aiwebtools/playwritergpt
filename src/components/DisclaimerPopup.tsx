
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

const DisclaimerPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Check if user has already agreed to the disclaimer
    const hasAgreed = localStorage.getItem('disclaimerAgreed');
    
    if (!hasAgreed) {
      // Show the popup if user hasn't agreed yet
      setOpen(true);
    }
  }, []);

  const handleAgree = () => {
    // Save to localStorage that user has agreed
    localStorage.setItem('disclaimerAgreed', 'true');
    setOpen(false);
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="sm:max-w-md">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-xl font-bold text-white">
            🚨 Legal Disclaimer
          </AlertDialogTitle>
          <button 
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        </AlertDialogHeader>
        <AlertDialogDescription className="text-gray-200 space-y-4 py-4">
          <p className="text-sm">
            <strong>Educational and Creative Tool:</strong> PlayWriter GPT is an AI tool designed to assist with creative writing and playwriting. It does not guarantee commercial success, production feasibility, or universal acclaim for any plays created with its assistance.
          </p>
          <p className="text-sm">
            <strong>Original Content:</strong> While PlayWriter GPT aims to create original content, the user is responsible for ensuring the final work does not infringe on existing copyrights, trademarks, or intellectual property rights. We recommend reviewing all generated content for originality.
          </p>
          <p className="text-sm">
            <strong>Limitation of Liability:</strong> By using PlayWriter GPT, you acknowledge and agree that AI WEB TOOLS LLC and its affiliates shall not be liable for any damages, direct or indirect, arising from your use of or reliance on any information or content provided by this service.
          </p>
        </AlertDialogDescription>
        <AlertDialogFooter className="sm:justify-center">
          <AlertDialogAction asChild>
            <Button 
              onClick={handleAgree} 
              className="w-full sm:w-auto" 
              size="lg"
            >
              I AGREE
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DisclaimerPopup;
