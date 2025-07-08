import * as React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { User, Mail } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const { login } = useAuth();
  const { t } = useLanguage();
  const [guestName, setGuestName] = React.useState('');
  const [guestEmail, setGuestEmail] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const handleGoogleLogin = () => {
    setIsLoading(true);
    // Simulate Google OAuth flow
    setTimeout(() => {
      const googleUser = {
        id: `google_${Date.now()}`,
        name: 'John Doe',
        email: 'john.doe@gmail.com',
        avatar: 'https://lh3.googleusercontent.com/a/default-user=s96-c',
        type: 'google' as const,
        createdAt: new Date().toISOString(),
      };
      login(googleUser);
      setIsLoading(false);
      onClose();
    }, 1500);
  };

  const handleGuestLogin = () => {
    if (!guestName.trim()) return;
    
    const guestUser = {
      id: `guest_${Date.now()}`,
      name: guestName.trim(),
      email: guestEmail.trim() || `guest_${Date.now()}@cropora.local`,
      type: 'guest' as const,
      createdAt: new Date().toISOString(),
    };
    
    login(guestUser);
    onClose();
    setGuestName('');
    setGuestEmail('');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md animate-scale-in">
        <DialogHeader className="animate-fade-in">
          <DialogTitle className="text-center text-2xl font-bold text-green-600">
            {t('login.title')}
          </DialogTitle>
          <DialogDescription className="text-center">
            {t('login.subtitle')}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <Button 
            onClick={handleGoogleLogin} 
            className="w-full btn-ripple hover-lift group" 
            variant="outline"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="loading-spinner mr-2"></div>
            ) : (
              <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            )}
            {isLoading ? t('login.signingIn') : t('login.googleLogin')}
          </Button>

          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">{t('login.or')}</span>
            </div>
          </div>

          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="space-y-2">
              <Label htmlFor="guest-name">{t('login.name')}</Label>
              <div className="relative group">
                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground group-hover:text-green-600 transition-colors duration-200" />
                <Input
                  id="guest-name"
                  type="text"
                  placeholder={t('login.enterName')}
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="pl-10 hover:border-green-300 focus:border-green-500 transition-all duration-200"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="guest-email">{t('login.email')}</Label>
              <div className="relative group">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground group-hover:text-green-600 transition-colors duration-200" />
                <Input
                  id="guest-email"
                  type="email"
                  placeholder={t('login.enterEmail')}
                  value={guestEmail}
                  onChange={(e) => setGuestEmail(e.target.value)}
                  className="pl-10 hover:border-green-300 focus:border-green-500 transition-all duration-200"
                />
              </div>
            </div>

            <Button 
              onClick={handleGuestLogin} 
              className="w-full bg-green-600 hover:bg-green-700 btn-ripple hover-lift"
              disabled={!guestName.trim()}
            >
              {t('login.continueAsGuest')}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default LoginModal;
