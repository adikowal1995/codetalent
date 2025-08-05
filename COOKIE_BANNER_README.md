# GDPR Cookie Banner Implementation

This project includes a GDPR-compliant cookie banner that respects user privacy and provides granular control over cookie preferences.

## Features

- **GDPR Compliant**: Follows EU GDPR requirements for cookie consent
- **Granular Control**: Users can choose specific cookie categories
- **Persistent Storage**: Consent preferences are saved in localStorage
- **Subtle Design**: Minimal, non-intrusive banner design
- **TypeScript**: Fully typed implementation
- **Responsive**: Works on all device sizes

## Cookie Categories

1. **Necessary Cookies** - Always enabled, required for basic site functionality
2. **Analytics Cookies** - Help understand how users interact with the site
3. **Marketing Cookies** - Used for personalized advertising
4. **Preference Cookies** - Remember user settings and preferences

## Usage

### Basic Implementation

The cookie banner is automatically included in the app via `App.tsx`:

```tsx
import { CookieProvider } from '@/contexts/CookieContext';
import CookieBanner from '@/components/CookieBanner';

// Wrap your app with CookieProvider
<CookieProvider>
  <CookieBanner />
  {/* Your app content */}
</CookieProvider>;
```

### Checking Cookie Consent

Use the `useCookieConsent` hook to check consent status:

```tsx
import { useCookieConsent } from '@/hooks/use-cookie-consent';

const MyComponent = () => {
  const { hasConsented, analytics, marketing, preferences } =
    useCookieConsent();

  useEffect(() => {
    if (hasConsented && analytics) {
      // Initialize analytics tracking
      console.log('Analytics enabled');
    }
  }, [hasConsented, analytics]);

  return <div>Your component</div>;
};
```

### Direct Context Usage

For more advanced usage, you can use the cookie context directly:

```tsx
import { useCookie } from '@/contexts/CookieContext';

const MyComponent = () => {
  const {
    cookieConsent,
    hasConsented,
    acceptAll,
    rejectAll,
    setCookieConsent,
  } = useCookie();

  // Your component logic
};
```

## Banner Behavior

- **First Visit**: Banner appears at the bottom of the page
- **User Actions**:
  - "Akceptuj wszystkie" - Accepts all cookies
  - "Tylko niezbędne" - Accepts only necessary cookies
  - "Odrzuć wszystkie" - Rejects all optional cookies
  - "Szczegóły" - Opens detailed preferences panel
- **Persistence**: User choice is saved and banner won't show again
- **Reopen**: Users can reopen banner via browser settings (clear localStorage)

## Styling

The banner uses Tailwind CSS classes and follows the app's design system:

- Fixed positioning at bottom
- Backdrop blur effect
- Responsive design
- Consistent with app theme

## GDPR Compliance

✅ **Explicit Consent**: Users must actively choose their preferences
✅ **Granular Control**: Separate toggles for different cookie types
✅ **Clear Information**: Detailed descriptions of each cookie category
✅ **Privacy Policy Link**: Direct link to privacy policy in banner
✅ **Cookie Policy Link**: Direct link to detailed cookie policy
✅ **Easy Withdrawal**: Users can change preferences anytime via footer link
✅ **No Pre-ticked Boxes**: All optional cookies default to disabled
✅ **Persistent Storage**: Consent is saved with timestamp
✅ **Legal Basis**: Clear explanation of processing grounds
✅ **Contact Information**: Easy way to contact about cookie preferences
✅ **Data Retention**: Clear information about cookie duration

## Customization

### Text Content

Edit the text in `CookieBanner.tsx` to match your language/requirements:

```tsx
<h3 className="text-sm font-medium">Używamy plików cookie</h3>
<p className="text-sm text-muted-foreground">
  Używamy plików cookie, aby zapewnić najlepsze doświadczenia...
</p>
```

### Cookie Categories

Modify the cookie categories in `CookieContext.tsx`:

```tsx
interface CookieConsent {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
  // Add more categories as needed
}
```

### Styling

The banner uses Tailwind classes. Modify the styling in `CookieBanner.tsx`:

```tsx
<div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur">
  {/* Banner content */}
</div>
```

## Testing

The banner will appear on first visit. To test different scenarios:

1. **Fresh Visit**: Clear localStorage and refresh
2. **Accept All**: Click "Akceptuj wszystkie"
3. **Reject All**: Click "Odrzuć wszystkie"
4. **Custom Preferences**: Click "Szczegóły" and configure manually

## Browser Compatibility

- Modern browsers with localStorage support
- Responsive design for mobile devices
- Graceful degradation for older browsers
