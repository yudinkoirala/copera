import * as React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MessageCircle, HelpCircle, MapPin, Clock, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = React.useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    category: '',
    country: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const contactMethods = [
    {
      icon: Mail,
      title: t('contact.emailUs'),
      description: t('contact.emailDesc'),
      value: 'support@cropora.com',
      action: 'mailto:support@cropora.com'
    },
    {
      icon: Phone,
      title: t('contact.callUs'),
      description: t('contact.callDesc'),
      value: '+1 (555) 123-4567',
      action: 'tel:+15551234567'
    },
    {
      icon: MessageCircle,
      title: t('contact.liveChat'),
      description: t('contact.liveChatDesc'),
      value: 'Available 24/7',
      action: '#'
    },
    {
      icon: HelpCircle,
      title: t('contact.supportCenter'),
      description: t('contact.supportCenterDesc'),
      value: 'Browse Resources',
      action: '/help'
    }
  ];

  const offices = [
    {
      city: 'San Francisco',
      country: 'USA',
      address: '123 Farm Tech Avenue, San Francisco, CA 94105',
      phone: '+1 (555) 123-4567',
      email: 'sf@cropora.com'
    },
    {
      city: 'London',
      country: 'UK',
      address: '456 Agriculture Lane, London EC1A 1BB',
      phone: '+44 20 7123 4567',
      email: 'london@cropora.com'
    },
    {
      city: 'Kathmandu',
      country: 'Nepal',
      address: 'Thamel, Kathmandu 44600',
      phone: '+977 1 234 5678',
      email: 'kathmandu@cropora.com'
    }
  ];

  const departments = [
    {
      name: t('contact.salesPartnerships'),
      description: t('contact.salesDesc'),
      email: 'sales@cropora.com',
      specialties: ['Product Demos', 'Enterprise Solutions', 'Partnership Opportunities']
    },
    {
      name: t('contact.technicalSupport'),
      description: t('contact.techSupportDesc'),
      email: 'support@cropora.com',
      specialties: ['Calculator Issues', 'Account Problems', 'API Integration']
    },
    {
      name: t('contact.researchDev'),
      description: t('contact.researchDesc'),
      email: 'research@cropora.com',
      specialties: ['Feature Requests', 'Research Collaboration', 'Data Analysis']
    }
  ];

  const faqs = [
    {
      question: 'How accurate are the NPK calculations?',
      answer: 'Our NPK calculator uses scientifically validated formulas and is regularly updated based on the latest agricultural research. Accuracy depends on the quality of input data, particularly soil test results.'
    },
    {
      question: 'Can I use Cropora tools offline?',
      answer: 'Currently, our tools require an internet connection. However, we are developing offline capabilities for basic calculations that will be available in future updates.'
    },
    {
      question: 'Do you offer custom solutions for large farms?',
      answer: 'Yes, we provide enterprise solutions tailored for large farming operations. Contact our sales team to discuss your specific needs and pricing options.'
    },
    {
      question: 'Is my farm data secure?',
      answer: 'We take data security seriously. All farm data is encrypted and stored securely. We never share personal farming data with third parties without explicit consent.'
    }
  ];

  return (
    <div className="min-h-screen animate-fade-in">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 py-20 animate-fade-in">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-green-800 dark:text-green-200">
              {t('contact.title')}
            </h1>
            <p className="text-lg md:text-xl mb-8 text-green-700 dark:text-green-300 max-w-3xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 bg-background animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('contact.howCanHelp')}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('contact.helpSubtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
              {contactMethods.map((method, index) => (
                <Card key={index} className="text-center hover-lift hover-glow group cursor-pointer">
                  <CardHeader>
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 dark:group-hover:bg-green-800 transition-colors duration-300">
                      <method.icon className="h-8 w-8 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <CardTitle className="text-xl">{method.title}</CardTitle>
                    <CardDescription>{method.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="font-medium text-green-600 mb-4">{method.value}</p>
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:border-green-600 group-hover:text-green-600 btn-ripple"
                      onClick={() => method.action.startsWith('#') ? {} : window.open(method.action)}
                    >
                      Contact Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-muted/50 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('contact.sendMessage')}</h2>
                <p className="text-lg text-muted-foreground">
                  {t('contact.messageDesc')}
                </p>
              </div>

              <Card className="hover-lift">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">{t('contact.fullName')}</Label>
                        <Input
                          id="fullName"
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => handleInputChange('fullName', e.target.value)}
                          className="hover:border-green-300 focus:border-green-500 transition-all duration-200"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">{t('contact.emailAddress')}</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="hover:border-green-300 focus:border-green-500 transition-all duration-200"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">{t('contact.phoneNumber')}</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="hover:border-green-300 focus:border-green-500 transition-all duration-200"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">{t('contact.companyFarm')}</Label>
                        <Input
                          id="company"
                          type="text"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          className="hover:border-green-300 focus:border-green-500 transition-all duration-200"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="category">{t('contact.category')}</Label>
                        <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                          <SelectTrigger className="hover-scale">
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="support">Technical Support</SelectItem>
                            <SelectItem value="sales">Sales Inquiry</SelectItem>
                            <SelectItem value="partnership">Partnership</SelectItem>
                            <SelectItem value="feedback">Feedback</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="country">{t('contact.country')}</Label>
                        <Select value={formData.country} onValueChange={(value) => handleInputChange('country', value)}>
                          <SelectTrigger className="hover-scale">
                            <SelectValue placeholder="Select country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="nepal">Nepal</SelectItem>
                            <SelectItem value="usa">United States</SelectItem>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                            <SelectItem value="india">India</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">{t('contact.subject')}</Label>
                      <Input
                        id="subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        className="hover:border-green-300 focus:border-green-500 transition-all duration-200"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">{t('contact.message')}</Label>
                      <Textarea
                        id="message"
                        rows={6}
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className="hover:border-green-300 focus:border-green-500 transition-all duration-200"
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-green-600 hover:bg-green-700 btn-ripple hover-lift">
                      <Send className="h-4 w-4 mr-2" />
                      {t('contact.sendMessageBtn')}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Offices */}
        <section className="py-16 bg-background animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('contact.ourOffices')}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
              {offices.map((office, index) => (
                <Card key={index} className="hover-lift hover-glow">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <MapPin className="h-5 w-5 mr-2 text-green-600" />
                      {office.city}, {office.country}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{office.address}</p>
                    <div className="space-y-2">
                      <p className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-green-600" />
                        <a href={`tel:${office.phone}`} className="hover:text-green-600 transition-colors duration-200">
                          {office.phone}
                        </a>
                      </p>
                      <p className="flex items-center">
                        <Mail className="h-4 w-4 mr-2 text-green-600" />
                        <a href={`mailto:${office.email}`} className="hover:text-green-600 transition-colors duration-200">
                          {office.email}
                        </a>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Departments */}
        <section className="py-16 bg-muted/50 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('contact.contactByDept')}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('contact.deptSubtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
              {departments.map((dept, index) => (
                <Card key={index} className="hover-lift hover-glow">
                  <CardHeader>
                    <CardTitle className="text-xl">{dept.name}</CardTitle>
                    <CardDescription>{dept.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-green-600 font-medium mb-4">{dept.email}</p>
                    <div>
                      <p className="font-medium mb-2">{t('contact.specialties')}</p>
                      <ul className="space-y-1">
                        {dept.specialties.map((specialty, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground">• {specialty}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-background animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('contact.faq')}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('contact.faqSubtitle')}
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6 stagger-children">
              {faqs.map((faq, index) => (
                <Card key={index} className="hover-lift">
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
        </section>

        {/* Social & Newsletter */}
        <section className="py-16 bg-green-50 dark:bg-green-950 animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-200">
                  {t('contact.stayConnected')}
                </h3>
                <p className="text-green-700 dark:text-green-300 mb-6">
                  {t('contact.socialDesc')}
                </p>
                <div className="flex justify-center lg:justify-start space-x-4">
                  <Button variant="outline" size="icon" className="hover-scale border-green-600 text-green-600">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </Button>
                  <Button variant="outline" size="icon" className="hover-scale border-green-600 text-green-600">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </Button>
                  <Button variant="outline" size="icon" className="hover-scale border-green-600 text-green-600">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-200">
                  {t('contact.newsletterSignup')}
                </h3>
                <p className="text-green-700 dark:text-green-300 mb-6">
                  {t('contact.newsletterDesc')}
                </p>
                <div className="flex space-x-2">
                  <Input 
                    type="email" 
                    placeholder={t('news.enterEmail')} 
                    className="flex-1 hover:border-green-300 focus:border-green-500 transition-all duration-200" 
                  />
                  <Button className="bg-green-600 hover:bg-green-700 btn-ripple hover-lift">
                    {t('news.subscribe')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default ContactPage;
