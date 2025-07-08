import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, Target, Award, Globe, Leaf, TrendingUp, Heart, Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

function AboutPage() {
  const { t } = useLanguage();

  const stats = [
    { label: t('about.activeFarmers'), value: '50K+', icon: Users },
    { label: t('about.countriesServed'), value: '25+', icon: Globe },
    { label: t('about.calculationsPerformed'), value: '1M+', icon: TrendingUp },
    { label: t('about.yearsExperience'), value: '8+', icon: Award }
  ];

  const values = [
    {
      icon: Leaf,
      title: t('about.sustainability'),
      description: t('about.sustainabilityDesc')
    },
    {
      icon: Heart,
      title: t('about.farmerCentric'),
      description: t('about.farmerCentricDesc')
    },
    {
      icon: Shield,
      title: t('about.reliability'),
      description: t('about.reliabilityDesc')
    },
    {
      icon: Target,
      title: t('about.innovation'),
      description: t('about.innovationDesc')
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'CEO & Co-Founder',
      expertise: 'Agricultural Science',
      bio: '15+ years in agricultural research and sustainable farming practices. PhD in Soil Science from UC Davis.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b9c9b6ae?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Michael Chen',
      role: 'CTO & Co-Founder',
      expertise: 'Agricultural Technology',
      bio: 'Former software engineer at John Deere with expertise in precision agriculture and IoT solutions.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Dr. Rajesh Patel',
      role: 'Head of Research',
      expertise: 'Crop Science',
      bio: 'Renowned agronomist with 20+ years of experience in crop nutrition and yield optimization.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Product',
      expertise: 'User Experience',
      bio: 'Product strategist focused on creating intuitive tools that make complex farming decisions simple.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face'
    }
  ];

  const milestones = [
    {
      year: '2016',
      title: 'Company Founded',
      description: 'Started with a simple NPK calculator to help local farmers in Iowa optimize their fertilizer use.'
    },
    {
      year: '2018',
      title: 'First 1,000 Users',
      description: 'Reached our first milestone of 1,000 active farmers using our tools regularly.'
    },
    {
      year: '2020',
      title: 'International Expansion',
      description: 'Expanded to serve farmers in developing countries, adapting tools for local conditions.'
    },
    {
      year: '2022',
      title: 'E-commerce Platform',
      description: 'Launched our agricultural marketplace connecting farmers with quality suppliers.'
    },
    {
      year: '2024',
      title: '50,000+ Active Users',
      description: 'Celebrating over 50,000 farmers worldwide using Cropora to improve their farming operations.'
    }
  ];

  const impacts = [
    { label: t('about.yieldIncrease'), value: '35%', icon: TrendingUp },
    { label: t('about.fertilizerReduction'), value: '25%', icon: Leaf },
    { label: t('about.costSavings'), value: '$2.5M', icon: Award }
  ];

  return (
    <div className="min-h-screen animate-fade-in">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 py-20 animate-fade-in">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-green-800 dark:text-green-200">
              {t('about.title')}
            </h1>
            <p className="text-lg md:text-xl mb-8 text-green-700 dark:text-green-300 max-w-3xl mx-auto">
              {t('about.subtitle')}
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 btn-ripple hover-lift">
                {t('about.joinCommunity')}
              </Button>
            </Link>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-background animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 stagger-children">
              {stats.map((stat, index) => (
                <div key={index} className="text-center hover-scale">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-green-200 dark:hover:bg-green-800 transition-colors duration-300">
                    <stat.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-green-600 mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-muted/50 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Target className="h-6 w-6 mr-2 text-green-600" />
                    {t('about.ourMission')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {t('about.missionText')}
                  </p>
                  <p className="text-muted-foreground">
                    {t('about.missionText2')}
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Globe className="h-6 w-6 mr-2 text-green-600" />
                    {t('about.ourVision')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {t('about.visionText')}
                  </p>
                  <p className="text-muted-foreground">
                    {t('about.visionText2')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-background animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('about.ourStory')}</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {t('about.storySubtitle')}
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8 stagger-children">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start space-x-6 hover-lift p-4 rounded-lg">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold hover:bg-green-700 transition-colors duration-300 hover-scale">
                        {milestone.year}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-muted/50 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('about.ourValues')}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('about.valuesSubtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover-lift hover-glow group">
                  <CardHeader>
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 dark:group-hover:bg-green-800 transition-colors duration-300">
                      <value.icon className="h-8 w-8 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 bg-background animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('about.meetTeam')}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('about.teamSubtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
              {team.map((member, index) => (
                <Card key={index} className="text-center hover-lift hover-glow group">
                  <CardHeader>
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-green-100 group-hover:border-green-200 transition-colors duration-300">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <CardDescription className="font-medium text-green-600">{member.role}</CardDescription>
                    <Badge variant="outline" className="mx-auto">{member.expertise}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="py-16 bg-muted/50 animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('about.ourImpact')}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('about.impactSubtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
              {impacts.map((impact, index) => (
                <Card key={index} className="text-center hover-lift hover-glow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <impact.icon className="h-8 w-8 text-green-600" />
                    </div>
                    <div className="text-4xl font-bold text-green-600 mb-2">{impact.value}</div>
                    <p className="text-muted-foreground">{impact.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-green-50 dark:bg-green-950 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-800 dark:text-green-200">
              {t('about.transformFarming')}
            </h2>
            <p className="text-lg text-green-700 dark:text-green-300 mb-8 max-w-2xl mx-auto">
              {t('about.transformDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/calculators">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 btn-ripple hover-lift">
                  {t('about.getStarted')}
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 hover-lift">
                  {t('about.contactTeam')}
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default AboutPage;
