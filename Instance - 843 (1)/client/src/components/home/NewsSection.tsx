import * as React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLanguage } from '@/contexts/LanguageContext';

function NewsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();

  const newsArticles = [
    {
      title: 'AI-Powered Farming: The Future of Agriculture',
      description: 'Discover how artificial intelligence is revolutionizing farming practices and increasing crop yields.',
      date: 'December 15, 2024',
      category: 'Technology',
      delay: '0.1s'
    },
    {
      title: 'Global Food Security: Challenges and Solutions',
      description: 'Exploring the challenges facing global food security and innovative solutions being developed.',
      date: 'December 12, 2024',
      category: 'Industry',
      delay: '0.2s'
    },
    {
      title: 'Sustainable Farming Practices for 2025',
      description: 'Learn about the latest sustainable farming techniques that protect the environment while maintaining productivity.',
      date: 'December 10, 2024',
      category: 'Sustainability',
      delay: '0.3s'
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`text-center mb-12 transition-all duration-800 ${
            isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('news.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('news.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsArticles.map((article, index) => (
            <Card 
              key={index} 
              className={`hover-lift hover-glow group cursor-pointer transition-all duration-800 ${
                isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: isVisible ? article.delay : '0s' }}
            >
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg mb-4 flex items-center justify-center group-hover:from-blue-300 group-hover:to-blue-400 transition-all duration-300 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="text-blue-700 font-medium group-hover:scale-110 transition-transform duration-300">News Image</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4 mr-1 group-hover:text-green-600 transition-colors duration-300" />
                  {article.date}
                  <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs group-hover:bg-green-200 transition-colors duration-300">
                    {article.category}
                  </span>
                </div>
                <CardTitle className="text-xl group-hover:text-green-600 transition-colors duration-300">
                  {article.title}
                </CardTitle>
                <CardDescription className="group-hover:text-muted-foreground/80 transition-colors duration-300">
                  {article.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/news">
                  <Button variant="outline" className="w-full group-hover:border-green-600 group-hover:text-green-600 btn-ripple group/button">
                    {t('news.readMore')}
                    <ArrowRight className="h-4 w-4 ml-1 group-hover/button:translate-x-1 transition-transform duration-200" />
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

export default NewsSection;
