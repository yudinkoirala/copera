import * as React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, MessageCircle, BookOpen, Calculator, ShoppingCart, Phone } from 'lucide-react';

function HelpCenterPage() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const helpCategories = [
    {
      icon: Calculator,
      title: 'Calculators & Tools',
      description: 'Learn how to use our NPK calculator, seed rate calculator, and other farming tools',
      articles: [
        'How to use the NPK Calculator',
        'Understanding Seed Rate Calculations',
        'Soil Testing Guidelines',
        'Fertilizer Application Tips'
      ]
    },
    {
      icon: ShoppingCart,
      title: 'Shopping & Orders',
      description: 'Help with placing orders, payments, shipping, and returns',
      articles: [
        'How to Place an Order',
        'Payment Methods',
        'Shipping Information',
        'Return Policy',
        'Track Your Order'
      ]
    },
    {
      icon: BookOpen,
      title: 'Account Management',
      description: 'Manage your account, profile settings, and authentication',
      articles: [
        'Creating an Account',
        'Login Issues',
        'Profile Settings',
        'Password Reset',
        'Account Security'
      ]
    },
    {
      icon: MessageCircle,
      title: 'General Support',
      description: 'Common questions and troubleshooting guides',
      articles: [
        'Getting Started Guide',
        'Troubleshooting Common Issues',
        'Mobile App Usage',
        'Browser Compatibility',
        'System Requirements'
      ]
    }
  ];

  const faqItems = [
    {
      question: 'How accurate is the NPK calculator?',
      answer: 'Our NPK calculator is based on scientific formulas and industry standards. It provides recommendations based on soil test results, crop requirements, and field conditions. For best results, use recent soil test data and consult with local agricultural experts.'
    },
    {
      question: 'Can I use Cropora tools offline?',
      answer: 'Some basic calculator functions work offline once the page is loaded. However, for the most up-to-date recommendations and to save your calculations, an internet connection is required.'
    },
    {
      question: 'Is there a mobile app available?',
      answer: 'Currently, Cropora is available as a responsive web application that works on all devices. A dedicated mobile app is in development and will be available soon.'
    },
    {
      question: 'How do I contact customer support?',
      answer: 'You can reach our support team through the Contact Support page, email us at support@cropora.com, or call our helpline at +1-800-CROPORA. We typically respond within 24 hours.'
    },
    {
      question: 'Are the farming guides free to access?',
      answer: 'Yes, all our basic farming guides and calculators are free to use. Premium features and advanced guides are available with a subscription.'
    }
  ];

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Help Center</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Find answers to your questions and get the help you need
          </p>
          
          <div className="max-w-md mx-auto flex space-x-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for help..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button onClick={handleSearch}>Search</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {helpCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                    <category.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.articles.map((article, articleIndex) => (
                    <li key={articleIndex}>
                      <Button variant="link" className="text-left p-0 h-auto text-blue-600 hover:text-blue-800">
                        {article}
                      </Button>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {faqItems.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center bg-muted/50 rounded-lg p-8">
          <Phone className="h-12 w-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Still Need Help?</h3>
          <p className="text-muted-foreground mb-4">
            Our support team is here to help you succeed with your farming goals
          </p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            Contact Support
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default HelpCenterPage;
