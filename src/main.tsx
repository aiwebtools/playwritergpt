
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

// Apply specific styles for Facebook browser
if (isFacebookBrowser()) {
  console.log('Facebook browser detected, applying specific optimizations');
  document.documentElement.classList.add('fb-browser');
  
  // Add specific handling for autoplay in Facebook browser
  const unmuteVideos = () => {
    const iframes = document.querySelectorAll('iframe[src*="youtube.com"]');
    iframes.forEach(iframe => {
      // Cast Element to HTMLIFrameElement to access src property
      const iframeElement = iframe as HTMLIFrameElement;
      let src = iframeElement.src;
      if (src.indexOf('mute=1') > -1) {
        src = src.replace('mute=1', 'mute=0');
      } else if (src.indexOf('mute=') === -1) {
        src += '&mute=0';
      }
      iframeElement.src = src;
    });
  };
  
  // Try to unmute videos on user interaction (required by most browsers)
  document.addEventListener('click', unmuteVideos, { once: true });
}

// Safely get root element and render
const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<App />);
} else {
  console.error("Root element not found");
}
