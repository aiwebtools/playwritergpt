
import { useState, useEffect } from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Check immediately
    checkMobile()
    
    // Use ResizeObserver for better performance
    if (typeof ResizeObserver !== 'undefined') {
      const resizeObserver = new ResizeObserver(checkMobile)
      resizeObserver.observe(document.documentElement)
      return () => resizeObserver.disconnect()
    } else {
      // Fallback for browsers without ResizeObserver
      window.addEventListener('resize', checkMobile, { passive: true })
      return () => window.removeEventListener('resize', checkMobile)
    }
  }, [])

  // Default to false during SSR
  return isMobile === null ? false : isMobile
}
