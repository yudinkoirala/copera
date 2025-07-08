import * as React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calculator, Sprout, BookOpen } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLanguage } from '@/contexts/LanguageContext';

function ToolsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();

  const tools = [
    {
      icon: Calculator,
      title: t('tools.npkCalculator'),
      description: t('tools.npkDescription'),
      buttonText: t('tools.calculateNow'),
      link: '/calculators',
      delay: '0.1s'
    },
    {
      icon: Sprout,
      title: t('tools.seedRateCalculator'),
      description: t('tools.seedRateDescription'),
      buttonText: t('tools.calculateSeedRate'),
      link: '/calculators',
      delay: '0.2s'
    },
    {
      icon: BookOpen,
      title: t('tools.technologyGuide'),
      description: t('tools.technologyDescription'),
      buttonText: t('tools.readGuide'),
      link: '/calculators',
      delay: '0.3s'
    }
  ];

  return (
    <section id="tools-section" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`text-center mb-12 transition-all duration-800 ${
            isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('tools.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('tools.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <Card 
              key={index} 
              className={`text-center hover-lift hover-glow group cursor-pointer transition-all duration-800 ${
                isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: isVisible ? tool.delay : '0s' }}
            >
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 dark:group-hover:bg-green-800 transition-colors duration-300">
                  <tool.icon className="h-8 w-8 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-xl group-hover:text-green-600 transition-colors duration-300">
                  {tool.title}
                </CardTitle>
                <CardDescription className="group-hover:text-muted-foreground/80 transition-colors duration-300">
                  {tool.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to={tool.link}>
                  <Button className="w-full bg-green-600 hover:bg-green-700 btn-ripple transform transition-all duration-200 hover:scale-105">
                    {tool.buttonText}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ToolsSection;
