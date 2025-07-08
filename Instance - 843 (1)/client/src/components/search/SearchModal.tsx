import * as React from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  ArrowRight, 
  Clock, 
  TrendingUp, 
  Calculator,
  ShoppingCart,
  Newspaper,
  User,
  FileText,
  Command,
  X
} from 'lucide-react';
import { useSearch } from '@/contexts/SearchContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';

function SearchModal() {
  const { 
    isSearchOpen, 
    setIsSearchOpen, 
    searchQuery, 
    setSearchQuery, 
    searchResults, 
    isSearching 
  } = useSearch();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isSearchOpen]);

  const handleResultClick = (url: string) => {
    navigate(url);
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  const handleClose = () => {
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'calculator':
        return <Calculator className="h-4 w-4 text-blue-500" />;
      case 'product':
        return <ShoppingCart className="h-4 w-4 text-green-500" />;
      case 'news':
        return <Newspaper className="h-4 w-4 text-orange-500" />;
      case 'page':
        return <FileText className="h-4 w-4 text-purple-500" />;
      case 'feature':
        return <TrendingUp className="h-4 w-4 text-indigo-500" />;
      default:
        return <Search className="h-4 w-4 text-gray-500" />;
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'calculator':
        return t('header.calculators');
      case 'product':
        return 'Product';
      case 'news':
        return t('header.news');
      case 'page':
        return 'Page';
      case 'feature':
        return 'Feature';
      default:
        return category;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'calculator':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'product':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'news':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'page':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'feature':
        return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const recentSearches = ['NPK Calculator', 'Tomato Seeds', 'Weather Forecast', 'Soil Testing'];
  const trendingSearches = ['Rice Production', 'Organic Farming', 'AI Agriculture', 'Crop Calendar'];

  return (
    <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
      <DialogContent className="max-w-2xl p-0 gap-0 overflow-hidden animate-scale-in">
        {/* Search Header */}
        <div className="flex items-center border-b border-border px-4 py-3">
          <Search className="h-4 w-4 text-muted-foreground mr-3" />
          <Input
            ref={inputRef}
            type="text"
            placeholder={`${t('common.search')}... (${navigator.platform.includes('Mac') ? '⌘' : 'Ctrl'}+K)`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-base"
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClose}
            className="ml-2 hover-scale"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Search Content */}
        <div className="max-h-96 overflow-y-auto">
          {/* Loading State */}
          {isSearching && (
            <div className="p-8 text-center">
              <div className="loading-spinner mx-auto mb-4"></div>
              <p className="text-muted-foreground">{t('common.loading')}</p>
            </div>
          )}

          {/* Search Results */}
          {!isSearching && searchQuery && searchResults.length > 0 && (
            <div className="p-2">
              <div className="px-2 py-1 text-xs font-medium text-muted-foreground mb-2">
                Search Results ({searchResults.length})
              </div>
              <div className="space-y-1 stagger-children">
                {searchResults.map((result, index) => (
                  <Button
                    key={result.id}
                    variant="ghost"
                    className="w-full justify-start h-auto p-3 hover-lift group"
                    onClick={() => handleResultClick(result.url)}
                  >
                    <div className="flex items-center space-x-3 w-full">
                      <div className="flex-shrink-0">
                        {result.icon ? (
                          <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                            {result.icon}
                          </span>
                        ) : (
                          getCategoryIcon(result.category)
                        )}
                      </div>
                      <div className="flex-1 text-left">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-medium group-hover:text-green-600 transition-colors duration-200">
                            {result.title}
                          </span>
                          <Badge className={`text-xs ${getCategoryColor(result.category)}`}>
                            {getCategoryLabel(result.category)}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-1">
                          {result.description}
                        </p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-green-600 group-hover:translate-x-1 transition-all duration-200" />
                    </div>
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* No Results */}
          {!isSearching && searchQuery && searchResults.length === 0 && (
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="font-medium mb-2">No results found</h3>
              <p className="text-sm text-muted-foreground">
                Try searching for something else or check your spelling
              </p>
            </div>
          )}

          {/* Default State - Recent & Trending */}
          {!searchQuery && (
            <div className="p-4 space-y-6">
              {/* Recent Searches */}
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Recent Searches</span>
                </div>
                <div className="space-y-1 stagger-children">
                  {recentSearches.map((search, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      className="w-full justify-start h-auto p-2 hover-lift group"
                      onClick={() => setSearchQuery(search)}
                    >
                      <Clock className="h-4 w-4 text-muted-foreground mr-3 group-hover:text-green-600 transition-colors duration-200" />
                      <span className="group-hover:text-green-600 transition-colors duration-200">
                        {search}
                      </span>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Trending Searches */}
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Trending</span>
                </div>
                <div className="space-y-1 stagger-children">
                  {trendingSearches.map((search, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      className="w-full justify-start h-auto p-2 hover-lift group"
                      onClick={() => setSearchQuery(search)}
                    >
                      <TrendingUp className="h-4 w-4 text-muted-foreground mr-3 group-hover:text-green-600 transition-colors duration-200" />
                      <span className="group-hover:text-green-600 transition-colors duration-200">
                        {search}
                      </span>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div>
                <div className="text-sm font-medium mb-3">Quick Actions</div>
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant="outline"
                    className="h-auto p-3 hover-lift group"
                    onClick={() => handleResultClick('/calculators')}
                  >
                    <Calculator className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-sm">Calculators</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-auto p-3 hover-lift group"
                    onClick={() => handleResultClick('/shop')}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-sm">Shop</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-auto p-3 hover-lift group"
                    onClick={() => handleResultClick('/news')}
                  >
                    <Newspaper className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-sm">News</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-auto p-3 hover-lift group"
                    onClick={() => handleResultClick('/about')}
                  >
                    <User className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-sm">About</span>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Search Footer */}
        <div className="border-t border-border px-4 py-2 bg-muted/30">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <kbd className="px-1.5 py-0.5 text-xs font-mono bg-background border rounded">↵</kbd>
                <span>to select</span>
              </div>
              <div className="flex items-center space-x-1">
                <kbd className="px-1.5 py-0.5 text-xs font-mono bg-background border rounded">esc</kbd>
                <span>to close</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <span>Search by</span>
              <div className="flex items-center space-x-1">
                <Command className="h-3 w-3" />
                <span className="font-medium">Cropora</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default SearchModal;
