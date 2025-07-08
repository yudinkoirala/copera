import * as React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Calendar, Globe, MapPin, TrendingUp, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAdmin } from '@/contexts/AdminContext';

function NewsPage() {
  const { t } = useLanguage();
  const { newsArticles } = useAdmin();
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState(t('common.all'));
  const [selectedRegion, setSelectedRegion] = React.useState(t('common.allRegions'));
  const [filteredArticles, setFilteredArticles] = React.useState(newsArticles);

  const categories = [t('common.all'), ...new Set(newsArticles.map(article => article.category))];
  const regions = [t('common.allRegions'), t('common.nepal'), t('common.international')];

  React.useEffect(() => {
    let filtered = newsArticles.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           article.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === t('common.all') || article.category === selectedCategory;
      const regionKey = article.region === 'Nepal' ? t('common.nepal') : t('common.international');
      const matchesRegion = selectedRegion === t('common.allRegions') || regionKey === selectedRegion;
      
      return matchesSearch && matchesCategory && matchesRegion;
    });

    // Sort by date (newest first) and trending
    filtered.sort((a, b) => {
      if (a.trending && !b.trending) return -1;
      if (!a.trending && b.trending) return 1;
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    });

    setFilteredArticles(filtered);
  }, [searchQuery, selectedCategory, selectedRegion, t, newsArticles]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return t('common.justNow');
    if (diffInHours < 24) return `${diffInHours} ${t('common.hoursAgo')}`;
    if (diffInHours < 48) return t('common.yesterday');
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const featuredArticle = filteredArticles.find(article => article.trending) || filteredArticles[0];
  const otherArticles = filteredArticles.filter(article => article.id !== featuredArticle?.id);

  return (
    <div className="min-h-screen animate-fade-in">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">{t('news.mainTitle')}</h1>
          <p className="text-lg text-muted-foreground">
            {t('news.mainSubtitle')}
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder={t('news.search')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 hover:border-green-300 focus:border-green-500 transition-all duration-200"
            />
          </div>
          
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-48 hover-scale">
              <SelectValue placeholder={t('news.category')} />
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedRegion} onValueChange={setSelectedRegion}>
            <SelectTrigger className="w-full md:w-48 hover-scale">
              <SelectValue placeholder={t('news.region')} />
            </SelectTrigger>
            <SelectContent>
              {regions.map(region => (
                <SelectItem key={region} value={region}>
                  {region}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Featured Article */}
        {featuredArticle && (
          <Card className="mb-8 overflow-hidden hover-lift animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-green-100 to-green-200 overflow-hidden">
                <img 
                  src={featuredArticle.imageUrl} 
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 lg:p-8">
                <div className="flex items-center space-x-2 mb-4">
                  {featuredArticle.trending && (
                    <Badge className="bg-red-500 hover:bg-red-600 animate-scale-in">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      {t('news.trending')}
                    </Badge>
                  )}
                  <Badge variant="outline">{featuredArticle.category}</Badge>
                  <Badge variant={featuredArticle.region === 'Nepal' ? 'default' : 'secondary'}>
                    {featuredArticle.region === 'Nepal' ? (
                      <MapPin className="h-3 w-3 mr-1" />
                    ) : (
                      <Globe className="h-3 w-3 mr-1" />
                    )}
                    {featuredArticle.region === 'Nepal' ? t('common.nepal') : t('common.international')}
                  </Badge>
                </div>
                
                <h2 className="text-2xl lg:text-3xl font-bold mb-4">{featuredArticle.title}</h2>
                <p className="text-muted-foreground mb-4">{featuredArticle.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(featuredArticle.publishedAt)}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredArticle.readTime}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    by {featuredArticle.author} • {featuredArticle.source}
                  </span>
                </div>
                
                <Button className="btn-ripple hover-lift">{t('news.readFullArticle')}</Button>
              </div>
            </div>
          </Card>
        )}

        {/* Other Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {otherArticles.map((article) => (
            <Card key={article.id} className="hover-lift hover-glow group cursor-pointer overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 overflow-hidden">
                <img 
                  src={article.imageUrl} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  {article.trending && (
                    <Badge className="bg-red-500 hover:bg-red-600 text-xs animate-scale-in">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      {t('news.trending')}
                    </Badge>
                  )}
                  <Badge variant="outline" className="text-xs">{article.category}</Badge>
                  <Badge variant={article.region === 'Nepal' ? 'default' : 'secondary'} className="text-xs">
                    {article.region === 'Nepal' ? (
                      <MapPin className="h-3 w-3 mr-1" />
                    ) : (
                      <Globe className="h-3 w-3 mr-1" />
                    )}
                    {article.region === 'Nepal' ? t('common.nepal') : t('common.international')}
                  </Badge>
                </div>
                
                <CardTitle className="text-lg line-clamp-2 group-hover:text-green-600 transition-colors duration-300">{article.title}</CardTitle>
                <CardDescription className="line-clamp-3">{article.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {formatDate(article.publishedAt)}
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {article.readTime}
                  </span>
                </div>
                
                <div className="text-sm text-muted-foreground mb-4">
                  by {article.author} • {article.source}
                </div>
                
                <Button variant="outline" className="w-full btn-ripple hover-lift">{t('news.readMore')}</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <p className="text-muted-foreground text-lg">{t('news.noArticles')}</p>
          </div>
        )}

        {/* Newsletter Subscription */}
        <Card className="mt-12 bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">{t('news.stayUpdated')}</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              {t('news.newsletterDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder={t('news.enterEmail')} 
                className="flex-1 hover:border-green-300 focus:border-green-500 transition-all duration-200" 
              />
              <Button className="bg-green-600 hover:bg-green-700 btn-ripple hover-lift">{t('news.subscribe')}</Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

export default NewsPage;
