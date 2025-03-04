
import { useState, useEffect } from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  // Initialize with window size if available (client side), otherwise false for SSR
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < MOBILE_BREAKPOINT;
    }
    return false;
  });

  useEffect(() => {
    // Skip if SSR
    if (typeof window === 'undefined') return;
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    
    // Use ResizeObserver for better performance if available
    if (typeof ResizeObserver !== 'undefined') {
      const resizeObserver = new ResizeObserver(() => {
        // Debounce resize events for better performance
        if (window.requestAnimationFrame) {
          window.requestAnimationFrame(checkMobile);
        } else {
          setTimeout(checkMobile, 66); // Fallback to approximately 15fps rate limit
        }
      });
      
      resizeObserver.observe(document.documentElement);
      return () => resizeObserver.disconnect();
    } else {
      // Fallback for browsers without ResizeObserver
      const handleResize = () => {
        if (window.requestAnimationFrame) {
          window.requestAnimationFrame(checkMobile);
        } else {
          setTimeout(checkMobile, 66);
        }
      };
      
      window.addEventListener('resize', handleResize, { passive: true });
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return isMobile;
}
