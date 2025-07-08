import * as React from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Languages, Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage();

  const languages = [
    { code: 'en' as const, name: t('common.english'), flag: '🇺🇸' },
    { code: 'ne' as const, name: t('common.nepali'), flag: '🇳🇵' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  const handleLanguageChange = (newLanguage: 'en' | 'ne') => {
    setLanguage(newLanguage);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 w-8 hover-scale group">
          <Languages className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
          <span className="sr-only">{t('common.language')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[160px] animate-scale-in">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className="flex items-center justify-between cursor-pointer hover-scale group"
          >
            <div className="flex items-center space-x-2">
              <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                {lang.flag}
              </span>
              <span className="group-hover:text-green-600 transition-colors duration-200">
                {lang.name}
              </span>
            </div>
            {language === lang.code && (
              <Check className="h-4 w-4 text-green-600 animate-scale-in" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LanguageToggle;
