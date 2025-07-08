import * as React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import NPKCalculator from '../components/calculators/NPKCalculator';
import SeedRateCalculator from '../components/calculators/SeedRateCalculator';
import AIRecommendations from '../components/calculators/AIRecommendations';
import SoilTestingGuide from '../components/calculators/SoilTestingGuide';
import { Calculator, Sprout, Brain, TestTube } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

function CalculatorsPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen animate-fade-in">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">{t('calculators.title')}</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('calculators.subtitle')}
          </p>
        </div>

        <Tabs defaultValue="npk" className="w-full animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="npk" className="flex items-center space-x-2 hover-scale">
              <Calculator className="h-4 w-4" />
              <span className="hidden sm:inline">{t('calculators.npkTab')}</span>
              <span className="sm:hidden">NPK</span>
            </TabsTrigger>
            <TabsTrigger value="seed-rate" className="flex items-center space-x-2 hover-scale">
              <Sprout className="h-4 w-4" />
              <span className="hidden sm:inline">{t('calculators.seedRateTab')}</span>
              <span className="sm:hidden">Seeds</span>
            </TabsTrigger>
            <TabsTrigger value="ai-recommendations" className="flex items-center space-x-2 hover-scale">
              <Brain className="h-4 w-4" />
              <span className="hidden sm:inline">{t('calculators.aiRecommendationsTab')}</span>
              <span className="sm:hidden">AI</span>
            </TabsTrigger>
            <TabsTrigger value="soil-testing" className="flex items-center space-x-2 hover-scale">
              <TestTube className="h-4 w-4" />
              <span className="hidden sm:inline">{t('calculators.soilTestingTab')}</span>
              <span className="sm:hidden">Soil</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="npk">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calculator className="h-6 w-6 mr-2 text-green-600" />
                  {t('calculators.npkTitle')}
                </CardTitle>
                <CardDescription>
                  {t('calculators.npkDesc')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <NPKCalculator />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="seed-rate">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Sprout className="h-6 w-6 mr-2 text-green-600" />
                  {t('calculators.seedRateTitle')}
                </CardTitle>
                <CardDescription>
                  {t('calculators.seedRateDesc')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SeedRateCalculator />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ai-recommendations">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="h-6 w-6 mr-2 text-green-600" />
                  {t('calculators.aiRecommendationsTitle')}
                </CardTitle>
                <CardDescription>
                  {t('calculators.aiRecommendationsDesc')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <AIRecommendations />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="soil-testing">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TestTube className="h-6 w-6 mr-2 text-green-600" />
                  {t('calculators.soilTestingTitle')}
                </CardTitle>
                <CardDescription>
                  {t('calculators.soilTestingDesc')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SoilTestingGuide />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Quick Tips Section */}
        <div className="mt-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-2xl font-bold mb-6 text-center">{t('calculators.quickTips')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-lg">🌱 {t('calculators.soilTestingTip')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {t('calculators.soilTestingTipDesc')}
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-lg">📊 {t('calculators.dataAccuracy')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {t('calculators.dataAccuracyDesc')}
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-lg">🎯 {t('calculators.localConditions')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {t('calculators.localConditionsDesc')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default CalculatorsPage;
