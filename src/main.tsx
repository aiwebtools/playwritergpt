
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Function to check if we're in a Facebook browser
const isFacebookBrowser = () => {
  const userAgent = navigator.userAgent || navigator.vendor;
  return userAgent.indexOf('FBAN') > -1 || userAgent.indexOf('FBAV') > -1;
};

// Function to check if we're in a mobile browser
const isMobileBrowser = () => {
  const userAgent = navigator.userAgent || navigator.vendor;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
};

// Apply specific styles and behaviors for different browsers
if (isFacebookBrowser()) {
  console.log('Facebook browser detected, applying specific optimizations');
  document.documentElement.classList.add('fb-browser');
}

if (isMobileBrowser()) {
  console.log('Mobile browser detected, applying mobile optimizations');
  document.documentElement.classList.add('mobile-browser');
  
  // On mobile, reduce animation duration and disable complex animations
  document.documentElement.style.setProperty('--animation-duration', '0.3s');
  document.documentElement.classList.add('reduced-motion');
}

// Enhanced video autoplay support - mobile-optimized
const setupVideoAutoplay = () => {
  // Function to enhance YouTube iframes for autoplay
  const enhanceYouTubeVideos = () => {
    const iframes = document.querySelectorAll('iframe[src*="youtube.com"]');
    iframes.forEach(iframe => {
      const iframeElement = iframe as HTMLIFrameElement;
      let src = iframeElement.src;
      
      try {
        // Skip if the URL is already processed or too complex
        if (src.includes('autoplay=1') && src.length > 300) {
          console.log('Skipping already enhanced YouTube iframe');
          return;
        }
        
        // Create a clean URL instead of modifying the existing one
        const baseUrl = src.split('?')[0]; // Get the base URL without parameters
        const isMobile = isMobileBrowser();
        
        // Set parameters for unmuted autoplay and appropriate quality
        const params = new URLSearchParams({
          autoplay: '1',
          mute: '0',
          controls: '1',
          rel: '0',
          showinfo: '0',
          enablejsapi: '1',
          hd: '1',
          vq: isMobile ? 'hd720' : 'hd1080',
          loop: '1'
        });
        
        // Extract video ID and set it as the playlist for looping
        const videoId = src.split('/').pop()?.split('?')[0] || '';
        if (videoId) {
          params.set('playlist', videoId);
        }
        
        // Mobile specific optimizations
        if (isMobile) {
          params.set('playsinline', '1');
          params.set('modestbranding', '1');
        }
        
        const cleanUrl = `${baseUrl}?${params.toString()}`;
        iframeElement.src = cleanUrl;
        
        console.log('Enhanced YouTube iframe for autoplay:', cleanUrl);
      } catch (error) {
        console.error('Error enhancing YouTube iframe:', error);
      }
    });
  };
  
  // Initial enhancement with a slight delay to ensure DOM is ready
  setTimeout(enhanceYouTubeVideos, 1000);
  
  // Re-enhance videos when visibility changes
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      enhanceYouTubeVideos();
    }
  });
  
  // Handle page resize (e.g., orientation change on mobile)
  window.addEventListener('resize', () => {
    setTimeout(enhanceYouTubeVideos, 500);
  }, { passive: true });
};

// Setup video autoplay when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupVideoAutoplay);
} else {
  setupVideoAutoplay();
}

// Add touch-specific event handlers for mobile
if (isMobileBrowser()) {
  document.addEventListener('DOMContentLoaded', () => {
    // Add touch-active class to interactive elements when touched
    const interactiveElements = document.querySelectorAll('button, a, .interactive-card');
    interactiveElements.forEach(element => {
      element.addEventListener('touchstart', () => {
        element.classList.add('touch-active');
      }, { passive: true });
      
      element.addEventListener('touchend', () => {
        setTimeout(() => {
          element.classList.remove('touch-active');
        }, 200);
      }, { passive: true });
    });
  });
}

// Safely get root element and render
const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<App />);
} else {
  console.error("Root element not found");
}
