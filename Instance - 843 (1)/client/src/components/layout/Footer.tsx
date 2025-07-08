import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';

function Footer() {
  const { t } = useLanguage();

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    
    if (email) {
      alert('Thank you for subscribing to our newsletter!');
      (e.target as HTMLFormElement).reset();
    }
  };

  return (
    <footer className="bg-muted/50 border-t border-border/40">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="animate-fade-in">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center hover-scale">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-xl font-bold text-green-600">Cropora</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              {t('footer.description')}
            </p>
            <div className="flex space-x-2">
              <Button 
                variant="outline" 
                size="icon" 
                className="hover-scale"
                onClick={() => window.open('https://instagram.com', '_blank')}
              >
                <span className="sr-only">Instagram</span>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.928-.875 2.079-1.365 3.323-1.365s2.395.49 3.323 1.365c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.928.875-2.026 1.297-3.323 1.297zm7.598 0c-1.297 0-2.448-.49-3.323-1.297-.875-.796-1.365-1.947-1.365-3.244s.49-2.448 1.365-3.323c.875-.875 2.026-1.365 3.323-1.365s2.448.49 3.323 1.365c.875.875 1.365 2.026 1.365 3.323s-.49 2.448-1.365 3.244c-.875.875-2.026 1.297-3.323 1.297z"/>
                </svg>
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="hover-scale"
                onClick={() => window.open('https://twitter.com', '_blank')}
              >
                <span className="sr-only">X</span>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="hover-scale"
                onClick={() => window.open('https://facebook.com', '_blank')}
              >
                <span className="sr-only">Facebook</span>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </Button>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/calculators" className="text-muted-foreground hover:text-foreground transition-colors hover-scale inline-block">
                  {t('tools.npkCalculator')}
                </Link>
              </li>
              <li>
                <Link to="/calculators" className="text-muted-foreground hover:text-foreground transition-colors hover-scale inline-block">
                  {t('tools.seedRateCalculator')}
                </Link>
              </li>
              <li>
                <Link to="/calculators" className="text-muted-foreground hover:text-foreground transition-colors hover-scale inline-block">
                  {t('tools.technologyGuide')}
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-muted-foreground hover:text-foreground transition-colors hover-scale inline-block">
                  {t('header.shop')}
                </Link>
              </li>
            </ul>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-semibold mb-4">{t('footer.support')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/help" className="text-muted-foreground hover:text-foreground transition-colors hover-scale inline-block">
                  {t('footer.helpCenter')}
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-muted-foreground hover:text-foreground transition-colors hover-scale inline-block">
                  {t('footer.contactSupport')}
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors hover-scale inline-block">
                  {t('footer.privacyPolicy')}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors hover-scale inline-block">
                  {t('footer.termsOfService')}
                </Link>
              </li>
            </ul>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="font-semibold mb-4">{t('footer.newsletter')}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {t('footer.newsletterDescription')}
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex space-x-2">
              <Input 
                type="email" 
                name="email"
                placeholder={t('footer.enterEmail')} 
                className="flex-1 hover:border-green-300 focus:border-green-500 transition-all duration-200"
                required
              />
              <Button type="submit" className="bg-green-600 hover:bg-green-700 btn-ripple hover-lift">
                {t('footer.subscribe')}
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-border/40 mt-8 pt-8 text-center text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
