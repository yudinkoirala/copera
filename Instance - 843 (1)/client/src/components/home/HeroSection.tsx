import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calculator, ShoppingCart, Newspaper, ArrowDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

function HeroSection() {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const { t } = useLanguage();

  React.useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#tools-section');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-green-200 dark:bg-green-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-gentle"></div>
        <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-green-300 dark:bg-green-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-gentle" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 text-green-800 dark:text-green-200 transition-all duration-1000 ${
            isLoaded ? 'animate-fade-in' : 'opacity-0 translate-y-8'
          }`}>
            {t('hero.title')}
          </h1>
          
          <p className={`text-lg md:text-xl mb-8 text-green-700 dark:text-green-300 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
            isLoaded ? 'animate-fade-in' : 'opacity-0 translate-y-8'
          }`}>
            {t('hero.subtitle')}
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-1000 delay-500 ${
            isLoaded ? 'animate-fade-in' : 'opacity-0 translate-y-8'
          }`}>
            <Link to="/calculators">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white btn-ripple hover-lift group transform transition-all duration-200">
                <Calculator className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-200" />
                {t('hero.calculateNPK')}
              </Button>
            </Link>
            <Link to="/shop">
              <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 hover-lift hover-glow group">
                <ShoppingCart className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                {t('hero.shopNow')}
              </Button>
            </Link>
            <Link to="/news">
              <Button size="lg" variant="ghost" className="text-green-600 hover:bg-green-50 hover-scale group">
                <Newspaper className="mr-2 h-5 w-5 group-hover:rotate-6 transition-transform duration-200" />
                {t('hero.readNews')}
              </Button>
            </Link>
          </div>

          <button
            onClick={scrollToNextSection}
            className={`animate-bounce-gentle text-green-600 hover:text-green-700 transition-colors duration-200 ${
              isLoaded ? 'animate-fade-in' : 'opacity-0'
            }`}
            style={{ animationDelay: '1s' }}
          >
            <ArrowDown className="h-6 w-6 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
