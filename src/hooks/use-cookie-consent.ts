import { useCookie } from '@/contexts/CookieContext';

export const useCookieConsent = () => {
  const { cookieConsent, hasConsented } = useCookie();
  
  return {
    hasConsented,
    analytics: cookieConsent.analytics,
    marketing: cookieConsent.marketing,
    preferences: cookieConsent.preferences,
    necessary: cookieConsent.necessary, // Always true
  };
}; 