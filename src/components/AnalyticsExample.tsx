import React, { useEffect } from 'react';
import { useCookieConsent } from '@/hooks/use-cookie-consent';

// Example component showing how to use cookie consent
const AnalyticsExample: React.FC = () => {
  const { hasConsented, analytics, marketing } = useCookieConsent();

  useEffect(() => {
    // Only initialize analytics if user has consented
    if (hasConsented && analytics) {
      // Example: Initialize Google Analytics
      console.log('Analytics enabled - initializing tracking');

      // Example: Track page view
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: document.title,
          page_location: window.location.href,
        });
      }
    }
  }, [hasConsented, analytics]);

  useEffect(() => {
    // Only initialize marketing tracking if user has consented
    if (hasConsented && marketing) {
      console.log('Marketing tracking enabled');

      // Example: Initialize Facebook Pixel
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('init', 'FACEBOOK_PIXEL_ID');
        window.fbq('track', 'PageView');
      }
    }
  }, [hasConsented, marketing]);

  // This component doesn't render anything visible
  // It's just an example of how to use cookie consent
  return null;
};

export default AnalyticsExample;
