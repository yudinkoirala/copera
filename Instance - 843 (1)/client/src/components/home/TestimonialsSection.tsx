import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLanguage } from '@/contexts/LanguageContext';

function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();

  const testimonials = [
    {
      name: 'John Smith',
      location: 'Iowa, USA',
      rating: 5,
      testimonial: 'Cropora\'s NPK calculator helped me increase my corn yield by 25%. The tools are incredibly accurate and easy to use.',
      avatar: 'JS',
      delay: '0.1s'
    },
    {
      name: 'Maria Garcia',
      location: 'California, USA',
      rating: 5,
      testimonial: 'The seed rate calculator saved me thousands of dollars in seed costs while maintaining optimal plant density.',
      avatar: 'MG',
      delay: '0.2s'
    },
    {
      name: 'David Chen',
      location: 'Texas, USA',
      rating: 4,
      testimonial: 'Great platform with excellent customer support. The technology guides are very comprehensive and helpful.',
      avatar: 'DC',
      delay: '0.3s'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 transition-all duration-300 hover:scale-125 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
        style={{ animationDelay: `${i * 0.1}s` }}
      />
    ));
  };

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`text-center mb-12 transition-all duration-800 ${
            isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className={`hover-lift group transition-all duration-800 ${
                isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: isVisible ? testimonial.delay : '0s' }}
            >
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold group-hover:bg-green-700 transition-colors duration-300 hover-scale">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <CardTitle className="text-lg group-hover:text-green-600 transition-colors duration-300">
                      {testimonial.name}
                    </CardTitle>
                    <CardDescription>{testimonial.location}</CardDescription>
                  </div>
                </div>
                <div className="flex items-center space-x-1 mt-2">
                  {renderStars(testimonial.rating)}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic group-hover:text-foreground/80 transition-colors duration-300">
                  "{testimonial.testimonial}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
