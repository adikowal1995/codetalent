import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

interface CookieConsent {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

interface CookieContextType {
  cookieConsent: CookieConsent;
  hasConsented: boolean;
  setCookieConsent: (consent: CookieConsent) => void;
  acceptAll: () => void;
  rejectAll: () => void;
  acceptNecessary: () => void;
  showBanner: boolean;
  setShowBanner: (show: boolean) => void;
}

const CookieContext = createContext<CookieContextType | undefined>(undefined);

interface CookieProviderProps {
  children: ReactNode;
}

export const CookieProvider: React.FC<CookieProviderProps> = ({ children }) => {
  const [cookieConsent, setCookieConsent] = useState<CookieConsent>({
    necessary: true, // Always true as these are essential
    analytics: false,
    marketing: false,
    preferences: false,
  });

  const [hasConsented, setHasConsented] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const savedConsent = localStorage.getItem('cookieConsent');
    const consentTimestamp = localStorage.getItem('cookieConsentTimestamp');

    if (savedConsent) {
      try {
        const parsed = JSON.parse(savedConsent);
        setCookieConsent(parsed);
        setHasConsented(true);
      } catch (error) {
        console.error('Error parsing saved cookie consent:', error);
        setShowBanner(true);
      }
    } else {
      // Show banner if no consent has been given
      setShowBanner(true);
    }
  }, []);

  const updateConsent = (consent: CookieConsent) => {
    setCookieConsent(consent);
    setHasConsented(true);
    setShowBanner(false);

    // Save to localStorage with timestamp
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    localStorage.setItem('cookieConsentTimestamp', new Date().toISOString());
  };

  const acceptAll = () => {
    updateConsent({
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    });
  };

  const rejectAll = () => {
    updateConsent({
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    });
  };

  const acceptNecessary = () => {
    updateConsent({
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    });
  };

  const value: CookieContextType = {
    cookieConsent,
    hasConsented,
    setCookieConsent: updateConsent,
    acceptAll,
    rejectAll,
    acceptNecessary,
    showBanner,
    setShowBanner,
  };

  return (
    <CookieContext.Provider value={value}>{children}</CookieContext.Provider>
  );
};

export const useCookie = (): CookieContextType => {
  const context = useContext(CookieContext);
  if (context === undefined) {
    throw new Error('useCookie must be used within a CookieProvider');
  }
  return context;
};
