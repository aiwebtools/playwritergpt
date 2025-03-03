
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { PawPrint } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-vetchardark px-6">
      <div className="text-center max-w-md animate-fade-in">
        <div className="mb-8">
          <PawPrint size={64} className="text-vetprimary mx-auto animate-float" />
        </div>
        <h1 className="text-5xl font-bold text-white mb-4">404</h1>
        <p className="text-xl text-gray-300 mb-8">
          Oops! It seems this page has wandered off.
        </p>
        <Button 
          asChild 
          className="bg-vetprimary hover:bg-vethighlight text-white px-8 py-6 text-lg btn-hover-effect shadow-glow"
        >
          <a href="/">
            Return to Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
