import * as React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, ShoppingCart, Heart, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useSearch } from '@/contexts/SearchContext';
import LoginModal from '@/components/auth/LoginModal';
import UserMenu from '@/components/auth/UserMenu';
import LanguageToggle from '@/components/ui/language-toggle';
import ThemeToggle from '@/components/ui/theme-toggle';
import SearchModal from '@/components/search/SearchModal';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { isAuthenticated } = useAuth();
  const { getTotalItems } = useCart();
  const { items: wishlistItems } = useWishlist();
  const { t } = useLanguage();
  const { setIsSearchOpen } = useSearch();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleSearchClick = () => {
    setIsSearchOpen(true);
  };

  const navigationItems = [
    { to: "/", label: t('header.home') },
    { to: "/calculators", label: t('header.calculators') },
    { to: "/shop", label: t('header.shop') },
    { to: "/news", label: t('header.news') },
    { to: "/about", label: t('header.about') },
    { to: "/contact", label: t('header.contact') }
  ];

  return (
    <>
      <header className={`sticky top-0 z-50 w-full border-b border-border/40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-md' 
          : 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'
      }`}>
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center group-hover:bg-green-700 transition-all duration-300 group-hover:scale-110 hover-glow">
              <span className="text-white font-bold text-sm group-hover:rotate-12 transition-transform duration-300">C</span>
            </div>
            <span className="text-xl font-bold text-green-600 group-hover:text-green-700 transition-colors duration-300">
              Cropora
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item, index) => (
              <Link 
                key={item.to}
                to={item.to} 
                className="text-foreground/60 hover:text-foreground transition-all duration-200 relative group hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            <LanguageToggle />
            <ThemeToggle />
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover-scale group" 
              onClick={handleSearchClick}
              title={`${t('common.search')} (${navigator.platform.includes('Mac') ? '⌘' : 'Ctrl'}+K)`}
            >
              <Search className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
              <span className="sr-only">{t('common.search')}</span>
            </Button>
            
            <Link to="/shop/wishlist">
              <Button variant="ghost" size="icon" className="relative hover-scale group">
                <Heart className="h-4 w-4 group-hover:scale-110 group-hover:text-red-500 transition-all duration-200" />
                {wishlistItems.length > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs animate-scale-in bg-red-500 hover:bg-red-600">
                    {wishlistItems.length}
                  </Badge>
                )}
              </Button>
            </Link>

            <Link to="/shop/cart">
              <Button variant="ghost" size="icon" className="relative hover-scale group">
                <ShoppingCart className="h-4 w-4 group-hover:scale-110 group-hover:text-green-600 transition-all duration-200" />
                {getTotalItems() > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs animate-scale-in bg-green-600 hover:bg-green-700">
                    {getTotalItems()}
                  </Badge>
                )}
              </Button>
            </Link>

            {isAuthenticated ? (
              <UserMenu />
            ) : (
              <Button 
                variant="outline" 
                size="sm" 
                className="hidden md:flex btn-ripple hover-lift hover-glow" 
                onClick={handleLoginClick}
              >
                {t('header.login')}
              </Button>
            )}
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden hover-scale group" 
              onClick={handleMenuToggle}
            >
              {isMenuOpen ? (
                <X className="h-4 w-4 group-hover:rotate-90 transition-transform duration-300" />
              ) : (
                <Menu className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu with slide animation */}
        <div className={`md:hidden bg-background border-t border-border/40 px-4 transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 py-4' : 'max-h-0 py-0'
        }`}>
          <nav className="flex flex-col space-y-2 stagger-children">
            <Button
              variant="ghost"
              className="justify-start py-2 px-2 hover-scale"
              onClick={handleSearchClick}
            >
              <Search className="h-4 w-4 mr-2" />
              {t('common.search')}
            </Button>
            {navigationItems.map((item) => (
              <Link 
                key={item.to}
                to={item.to} 
                className="text-foreground/60 hover:text-foreground transition-all duration-200 py-2 hover:bg-muted/50 px-2 rounded-md hover-scale"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            {!isAuthenticated && (
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-2 btn-ripple hover-lift" 
                onClick={handleLoginClick}
              >
                {t('header.login')}
              </Button>
            )}
          </nav>
        </div>
      </header>

      <LoginModal isOpen={isLoginModalOpen} onClose={handleCloseLoginModal} />
      <SearchModal />
    </>
  );
}

export default Header;
