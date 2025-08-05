import React, { useState } from 'react';
import { useCookie } from '@/contexts/CookieContext';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { X, Settings, Info } from 'lucide-react';

const CookieBanner: React.FC = () => {
  const {
    showBanner,
    setShowBanner,
    acceptAll,
    rejectAll,
    acceptNecessary,
    setCookieConsent,
    cookieConsent,
  } = useCookie();
  const [showDetails, setShowDetails] = useState(false);
  const [tempConsent, setTempConsent] = useState(cookieConsent);

  if (!showBanner) return null;

  const handleSavePreferences = () => {
    setCookieConsent(tempConsent);
  };

  const handleAcceptAll = () => {
    acceptAll();
  };

  const handleRejectAll = () => {
    rejectAll();
  };

  const handleAcceptNecessary = () => {
    acceptNecessary();
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col gap-4">
          {/* Main banner */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Info className="h-4 w-4 text-muted-foreground" />
                <h3 className="text-sm font-medium">Używamy plików cookie</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Używamy plików cookie, aby zapewnić najlepsze doświadczenia na
                naszej stronie. Niektóre pliki cookie są niezbędne do działania
                strony, inne pomagają nam ją ulepszać. Więcej informacji
                znajdziesz w naszej{' '}
                <a
                  href="/polityka-prywatnosci.html"
                  className="text-primary underline hover:text-primary/80"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Polityce Prywatności
                </a>{' '}
                i{' '}
                <a
                  href="/cookie-policy.html"
                  className="text-primary underline hover:text-primary/80"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Polityce Cookie
                </a>
                .
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowBanner(false)}
              className="h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-2">
            <Button onClick={handleAcceptAll} size="sm" className="text-xs">
              Akceptuj wszystkie
            </Button>
            <Button
              onClick={handleAcceptNecessary}
              variant="outline"
              size="sm"
              className="text-xs"
            >
              Tylko niezbędne
            </Button>
            <Button
              onClick={handleRejectAll}
              variant="outline"
              size="sm"
              className="text-xs"
            >
              Odrzuć wszystkie
            </Button>
            <Button
              onClick={() => setShowDetails(!showDetails)}
              variant="ghost"
              size="sm"
              className="text-xs"
            >
              <Settings className="h-3 w-3 mr-1" />
              Szczegóły
            </Button>
          </div>

          {/* Detailed preferences */}
          {showDetails && (
            <div className="space-y-4 pt-4 border-t">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-sm font-medium">
                      Niezbędne pliki cookie
                    </Label>
                    <p className="text-xs text-muted-foreground">
                      Zapewniają podstawowe funkcje strony. Nie można ich
                      wyłączyć.
                    </p>
                  </div>
                  <Switch checked={true} disabled />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-sm font-medium">
                      Analityczne pliki cookie
                    </Label>
                    <p className="text-xs text-muted-foreground">
                      Pomagają nam zrozumieć, jak użytkownicy korzystają ze
                      strony.
                    </p>
                  </div>
                  <Switch
                    checked={tempConsent.analytics}
                    onCheckedChange={checked =>
                      setTempConsent(prev => ({ ...prev, analytics: checked }))
                    }
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-sm font-medium">
                      Marketingowe pliki cookie
                    </Label>
                    <p className="text-xs text-muted-foreground">
                      Używane do wyświetlania spersonalizowanych reklam.
                    </p>
                  </div>
                  <Switch
                    checked={tempConsent.marketing}
                    onCheckedChange={checked =>
                      setTempConsent(prev => ({ ...prev, marketing: checked }))
                    }
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-sm font-medium">
                      Pliki cookie preferencji
                    </Label>
                    <p className="text-xs text-muted-foreground">
                      Zapamiętują Twoje ustawienia i preferencje.
                    </p>
                  </div>
                  <Switch
                    checked={tempConsent.preferences}
                    onCheckedChange={checked =>
                      setTempConsent(prev => ({
                        ...prev,
                        preferences: checked,
                      }))
                    }
                  />
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  onClick={handleSavePreferences}
                  size="sm"
                  className="text-xs"
                >
                  Zapisz preferencje
                </Button>
                <Button
                  onClick={() => setShowDetails(false)}
                  variant="outline"
                  size="sm"
                  className="text-xs"
                >
                  Anuluj
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
