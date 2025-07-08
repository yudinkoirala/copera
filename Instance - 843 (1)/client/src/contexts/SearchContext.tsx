import * as React from 'react';
import { useLanguage } from './LanguageContext';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: 'page' | 'calculator' | 'news' | 'product' | 'feature';
  url: string;
  keywords: string[];
  icon?: string;
}

interface SearchContextType {
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchResults: SearchResult[];
  isSearching: boolean;
  searchAllContent: (query: string) => void;
}

const SearchContext = React.createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [searchResults, setSearchResults] = React.useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = React.useState(false);
  const { t } = useLanguage();

  // All searchable content
  const allContent: SearchResult[] = React.useMemo(() => [
    // Pages
    {
      id: 'home',
      title: t('header.home'),
      description: t('hero.subtitle'),
      category: 'page',
      url: '/',
      keywords: ['home', 'farming', 'agriculture', 'tools', 'गृहपृष्ठ', 'कृषि'],
      icon: '🏠'
    },
    {
      id: 'calculators',
      title: t('header.calculators'),
      description: t('calculators.subtitle'),
      category: 'page',
      url: '/calculators',
      keywords: ['calculator', 'npk', 'seed', 'fertilizer', 'क्यालकुलेटर', 'मल'],
      icon: '🧮'
    },
    {
      id: 'shop',
      title: t('header.shop'),
      description: 'Buy quality agricultural products and farming supplies',
      category: 'page',
      url: '/shop',
      keywords: ['shop', 'buy', 'products', 'seeds', 'fertilizer', 'पसल', 'बीउ'],
      icon: '🛒'
    },
    {
      id: 'news',
      title: t('header.news'),
      description: t('news.mainSubtitle'),
      category: 'page',
      url: '/news',
      keywords: ['news', 'agriculture', 'updates', 'समाचार', 'कृषि'],
      icon: '📰'
    },
    {
      id: 'about',
      title: t('header.about'),
      description: t('about.subtitle'),
      category: 'page',
      url: '/about',
      keywords: ['about', 'company', 'mission', 'team', 'हाम्रो बारे'],
      icon: '👥'
    },
    {
      id: 'contact',
      title: t('header.contact'),
      description: t('contact.subtitle'),
      category: 'page',
      url: '/contact',
      keywords: ['contact', 'support', 'help', 'email', 'सम्पर्क'],
      icon: '📞'
    },

    // Calculators
    {
      id: 'npk-calculator',
      title: t('calculators.npkTitle'),
      description: t('calculators.npkDesc'),
      category: 'calculator',
      url: '/calculators',
      keywords: ['npk', 'nitrogen', 'phosphorus', 'potassium', 'fertilizer', 'dose', 'मल', 'नाइट्रोजन'],
      icon: '🧪'
    },
    {
      id: 'seed-rate-calculator',
      title: t('calculators.seedRateTitle'),
      description: t('calculators.seedRateDesc'),
      category: 'calculator',
      url: '/calculators',
      keywords: ['seed', 'rate', 'planting', 'sowing', 'density', 'बीउ', 'दर'],
      icon: '🌱'
    },
    {
      id: 'ai-recommendations',
      title: t('calculators.aiRecommendationsTitle'),
      description: t('calculators.aiRecommendationsDesc'),
      category: 'calculator',
      url: '/calculators',
      keywords: ['ai', 'artificial intelligence', 'recommendations', 'advice', 'कृत्रिम बुद्धिमत्ता'],
      icon: '🤖'
    },
    {
      id: 'soil-testing',
      title: t('calculators.soilTestingTitle'),
      description: t('calculators.soilTestingDesc'),
      category: 'calculator',
      url: '/calculators',
      keywords: ['soil', 'testing', 'analysis', 'ph', 'nutrients', 'माटो', 'परीक्षण'],
      icon: '🔬'
    },

    // News articles (sample)
    {
      id: 'organic-farming-nepal',
      title: 'Nepal Introduces New Organic Farming Incentive Program for 2025',
      description: 'Government announces Rs 2 billion fund to support organic farmers transition',
      category: 'news',
      url: '/news',
      keywords: ['organic', 'nepal', 'farming', 'government', 'incentive', 'program', 'जैविक'],
      icon: '🌿'
    },
    {
      id: 'rice-production-terai',
      title: 'Rice Production in Terai Region Shows 15% Increase',
      description: 'Favorable monsoon and improved seed varieties contribute to bumper harvest',
      category: 'news',
      url: '/news',
      keywords: ['rice', 'terai', 'production', 'increase', 'harvest', 'धान', 'तराई'],
      icon: '🌾'
    },
    {
      id: 'ai-precision-agriculture',
      title: 'AI-Powered Precision Agriculture Gains Momentum Globally',
      description: 'Farmers worldwide adopting AI and IoT sensors to optimize yields',
      category: 'news',
      url: '/news',
      keywords: ['ai', 'precision', 'agriculture', 'iot', 'sensors', 'global', 'technology'],
      icon: '🚜'
    },

    // Products (sample)
    {
      id: 'npk-fertilizer',
      title: 'NPK Fertilizer 20-20-20',
      description: 'Balanced nutrition for all crops with micronutrients',
      category: 'product',
      url: '/shop',
      keywords: ['npk', 'fertilizer', '20-20-20', 'balanced', 'nutrition', 'micronutrients', 'मल'],
      icon: '🧪'
    },
    {
      id: 'hybrid-tomato-seeds',
      title: 'Hybrid Tomato Seeds',
      description: 'High-yielding disease-resistant tomato varieties',
      category: 'product',
      url: '/shop',
      keywords: ['tomato', 'seeds', 'hybrid', 'disease-resistant', 'high-yield', 'बीउ', 'टमाटर'],
      icon: '🍅'
    },
    {
      id: 'soil-ph-meter',
      title: 'Digital Soil pH Meter',
      description: 'Accurate soil pH and moisture measurement tool',
      category: 'product',
      url: '/shop',
      keywords: ['soil', 'ph', 'meter', 'digital', 'moisture', 'measurement', 'माटो'],
      icon: '📊'
    },

    // Features
    {
      id: 'weather-forecast',
      title: 'Weather Forecast',
      description: 'Get accurate weather predictions for your farming area',
      category: 'feature',
      url: '/calculators',
      keywords: ['weather', 'forecast', 'prediction', 'farming', 'climate', 'मौसम'],
      icon: '🌤️'
    },
    {
      id: 'crop-calendar',
      title: 'Crop Calendar',
      description: 'Planting and harvesting schedule for different crops',
      category: 'feature',
      url: '/calculators',
      keywords: ['crop', 'calendar', 'planting', 'harvesting', 'schedule', 'बाली'],
      icon: '📅'
    },
    {
      id: 'disease-identification',
      title: 'Disease Identification',
      description: 'Identify crop diseases and get treatment recommendations',
      category: 'feature',
      url: '/calculators',
      keywords: ['disease', 'identification', 'crop', 'treatment', 'pest', 'रोग'],
      icon: '🔍'
    }
  ], [t]);

  const searchAllContent = React.useCallback((query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);

    // Simulate search delay for better UX
    setTimeout(() => {
      const normalizedQuery = query.toLowerCase().trim();
      const results: SearchResult[] = [];

      allContent.forEach(item => {
        let score = 0;

        // Title exact match (highest priority)
        if (item.title.toLowerCase().includes(normalizedQuery)) {
          score += 100;
        }

        // Description match
        if (item.description.toLowerCase().includes(normalizedQuery)) {
          score += 50;
        }

        // Keywords match
        item.keywords.forEach(keyword => {
          if (keyword.toLowerCase().includes(normalizedQuery)) {
            score += 30;
          }
          if (keyword.toLowerCase().startsWith(normalizedQuery)) {
            score += 20;
          }
        });

        // Fuzzy matching for typos
        if (fuzzyMatch(item.title.toLowerCase(), normalizedQuery) ||
            fuzzyMatch(item.description.toLowerCase(), normalizedQuery)) {
          score += 10;
        }

        if (score > 0) {
          results.push({ ...item });
        }
      });

      // Sort by score (relevance)
      results.sort((a, b) => {
        const aScore = calculateScore(a, normalizedQuery);
        const bScore = calculateScore(b, normalizedQuery);
        return bScore - aScore;
      });

      setSearchResults(results.slice(0, 10)); // Limit to top 10 results
      setIsSearching(false);
    }, 200);
  }, [allContent]);

  const calculateScore = (item: SearchResult, query: string): number => {
    let score = 0;
    const lowerTitle = item.title.toLowerCase();
    const lowerDesc = item.description.toLowerCase();

    if (lowerTitle.includes(query)) score += 100;
    if (lowerDesc.includes(query)) score += 50;
    
    item.keywords.forEach(keyword => {
      if (keyword.toLowerCase().includes(query)) score += 30;
    });

    return score;
  };

  const fuzzyMatch = (text: string, query: string): boolean => {
    if (query.length < 3) return false;
    
    const words = text.split(' ');
    return words.some(word => {
      if (word.length < query.length) return false;
      
      let matches = 0;
      let j = 0;
      
      for (let i = 0; i < word.length && j < query.length; i++) {
        if (word[i] === query[j]) {
          matches++;
          j++;
        }
      }
      
      return matches >= Math.ceil(query.length * 0.7);
    });
  };

  React.useEffect(() => {
    searchAllContent(searchQuery);
  }, [searchQuery, searchAllContent]);

  // Keyboard shortcuts
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl/Cmd + K to open search
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      
      // Escape to close search
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
        setSearchQuery('');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen]);

  const value = {
    isSearchOpen,
    setIsSearchOpen,
    searchQuery,
    setSearchQuery,
    searchResults,
    isSearching,
    searchAllContent,
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = React.useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
}
