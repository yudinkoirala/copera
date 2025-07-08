import * as React from 'react';

type Language = 'en' | 'ne';

interface Translations {
  [key: string]: {
    en: string;
    ne: string;
  };
}

const translations: Translations = {
  // Header
  'header.home': { en: 'Home', ne: 'गृहपृष्ठ' },
  'header.calculators': { en: 'Calculators', ne: 'क्यालकुलेटर' },
  'header.shop': { en: 'Shop', ne: 'पसल' },
  'header.news': { en: 'News', ne: 'समाचार' },
  'header.about': { en: 'About', ne: 'हाम्रो बारे' },
  'header.contact': { en: 'Contact', ne: 'सम्पर्क' },
  'header.login': { en: 'Login', ne: 'लगइन' },

  // Hero Section
  'hero.title': { 
    en: 'Empowering Farmers with Tools, Technology, and Trade', 
    ne: 'उपकरण, प्रविधि र व्यापारका साथ किसानहरूलाई सशक्तिकरण' 
  },
  'hero.subtitle': { 
    en: 'Increase your farm\'s productivity and income with our comprehensive platform offering calculators, quality products, and the latest agricultural insights.', 
    ne: 'हाम्रो बृहत् प्लेटफर्मबाट क्यालकुलेटर, गुणस्तरीय उत्पादन र नवीनतम कृषि जानकारीका साथ आफ्नो खेतीको उत्पादकता र आम्दानी बढाउनुहोस्।' 
  },
  'hero.calculateNPK': { en: 'Calculate NPK Dose', ne: 'NPK मात्रा गणना गर्नुहोस्' },
  'hero.shopNow': { en: 'Shop Now', ne: 'अहिले किन्नुहोस्' },
  'hero.readNews': { en: 'Read News', ne: 'समाचार पढ्नुहोस्' },

  // Tools Section
  'tools.title': { en: 'Farming Tools & Calculators', ne: 'कृषि उपकरण र क्यालकुलेटर' },
  'tools.subtitle': { en: 'Use our precision tools to make data-driven decisions for your farm', ne: 'आफ्नो खेतीको लागि डाटामा आधारित निर्णय लिन हाम्रो सटीक उपकरणहरू प्रयोग गर्नुहोस्' },
  'tools.npkCalculator': { en: 'NPK Calculator', ne: 'NPK क्यालकुलेटर' },
  'tools.npkDescription': { en: 'Calculate the right NPK fertilizer dose for your crops based on soil test results and crop requirements.', ne: 'माटो परीक्षणको नतिजा र बालीको आवश्यकताको आधारमा आफ्नो बालीको लागि सही NPK मलको मात्रा गणना गर्नुहोस्।' },
  'tools.seedRateCalculator': { en: 'Seed Rate Calculator', ne: 'बीउ दर क्यालकुलेटर' },
  'tools.seedRateDescription': { en: 'Determine the optimal seed rate for different crops to maximize yield and minimize waste.', ne: 'उत्पादन बढाउन र बर्बादी कम गर्न विभिन्न बालीका लागि उत्तम बीउ दर निर्धारण गर्नुहोस्।' },
  'tools.technologyGuide': { en: 'Technology Guide', ne: 'प्रविधि गाइड' },
  'tools.technologyDescription': { en: 'Access comprehensive guides on modern farming techniques, pest management, and crop rotation.', ne: 'आधुनिक कृषि प्रविधि, कीट व्यवस्थापन र बाली फेरबदलमा बृहत् गाइडहरू पहुँच गर्नुहोस्।' },
  'tools.calculateNow': { en: 'Calculate Now', ne: 'अहिले गणना गर्नुहोस्' },
  'tools.calculateSeedRate': { en: 'Calculate Seed Rate', ne: 'बीउ दर गणना गर्नुहोस्' },
  'tools.readGuide': { en: 'Read Guide', ne: 'गाइड पढ्नुहोस्' },

  // Calculators Page
  'calculators.title': { en: 'Agricultural Calculators', ne: 'कृषि क्यालकुलेटरहरू' },
  'calculators.subtitle': { en: 'Use our precision tools to make data-driven decisions for your farm. Calculate optimal fertilizer doses, seed rates, and get AI-powered recommendations.', ne: 'आफ्नो खेतीको लागि डाटामा आधारित निर्णय लिन हाम्रो सटीक उपकरणहरू प्रयोग गर्नुहोस्। उत्तम मल मात्रा, बीउ दर गणना गर्नुहोस् र AI संचालित सिफारिसहरू प्राप्त गर्नुहोस्।' },
  'calculators.npkTab': { en: 'NPK Calculator', ne: 'NPK क्यालकुलेटर' },
  'calculators.seedRateTab': { en: 'Seed Rate', ne: 'बीउ दर' },
  'calculators.aiRecommendationsTab': { en: 'AI Recommendations', ne: 'AI सिफारिसहरू' },
  'calculators.soilTestingTab': { en: 'Soil Testing', ne: 'माटो परीक्षण' },
  'calculators.npkTitle': { en: 'NPK Fertilizer Calculator', ne: 'NPK मल क्यालकुलेटर' },
  'calculators.npkDesc': { en: 'Calculate the optimal NPK fertilizer dose for your crops based on soil test results, crop requirements, and field conditions.', ne: 'माटो परीक्षणको नतिजा, बालीको आवश्यकता र खेतको अवस्थाका आधारमा आफ्नो बालीको लागि उत्तम NPK मलको मात्रा गणना गर्नुहोस्।' },
  'calculators.seedRateTitle': { en: 'Seed Rate Calculator', ne: 'बीउ दर क्यालकुलेटर' },
  'calculators.seedRateDesc': { en: 'Determine the optimal seed rate for different crops to maximize yield and minimize waste based on field conditions and planting method.', ne: 'खेतको अवस्था र रोप्ने विधिका आधारमा उत्पादन बढाउन र बर्बादी कम गर्न विभिन्न बालीका लागि उत्तम बीउ दर निर्धारण गर्नुहोस्।' },
  'calculators.aiRecommendationsTitle': { en: 'AI Farming Recommendations', ne: 'AI कृषि सिफारिसहरू' },
  'calculators.aiRecommendationsDesc': { en: 'Get personalized farming advice and recommendations powered by artificial intelligence based on your location, crop, and growing conditions.', ne: 'आफ्नो स्थान, बाली र खेती गर्ने अवस्थाका आधारमा कृत्रिम बुद्धिमत्ताद्वारा संचालित व्यक्तिगत कृषि सल्लाह र सिफारिसहरू प्राप्त गर्नुहोस्।' },
  'calculators.soilTestingTitle': { en: 'Soil Testing Guide', ne: 'माटो परीक्षण गाइड' },
  'calculators.soilTestingDesc': { en: 'Learn how to properly test your soil and interpret the results for better fertilizer recommendations and crop management.', ne: 'राम्रो मल सिफारिस र बाली व्यवस्थापनका लागि कसरी माटो परीक्षण गर्ने र नतिजाको व्याख्या गर्ने भनेर सिक्नुहोस्।' },
  'calculators.quickTips': { en: 'Quick Tips for Better Results', ne: 'राम्रो नतिजाका लागि द्रुत सुझावहरू' },
  'calculators.soilTestingTip': { en: 'Soil Testing', ne: 'माटो परीक्षण' },
  'calculators.soilTestingTipDesc': { en: 'Test your soil every 2-3 years for accurate NPK calculations. Use recent soil test results for best recommendations.', ne: 'सटीक NPK गणनाका लागि हरेक २-३ वर्षमा आफ्नो माटो परीक्षण गर्नुहोस्। राम्रो सिफारिसका लागि भर्खरको माटो परीक्षण नतिजा प्रयोग गर्नुहोस्।' },
  'calculators.dataAccuracy': { en: 'Data Accuracy', ne: 'डाटा शुद्धता' },
  'calculators.dataAccuracyDesc': { en: 'Provide accurate field measurements and crop information. Small errors in input can lead to significant differences in output.', ne: 'सटीक खेत मापन र बाली जानकारी प्रदान गर्नुहोस्। इनपुटमा साना त्रुटिहरूले आउटपुटमा महत्वपूर्ण भिन्नता ल्याउन सक्छ।' },
  'calculators.localConditions': { en: 'Local Conditions', ne: 'स्थानीय अवस्थाहरू' },
  'calculators.localConditionsDesc': { en: 'Consider local climate, rainfall, and growing conditions. Consult with local agricultural experts for region-specific advice.', ne: 'स्थानीय मौसम, वर्षा र खेती गर्ने अवस्थालाई विचार गर्नुहोस्। क्षेत्र-विशेष सल्लाहका लागि स्थानीय कृषि विशेषज्ञहरूसँग सल्लाह गर्नुहोस्।' },

  // News Page
  'news.title': { en: 'Latest News & Insights', ne: 'नवीनतम समाचार र जानकारी' },
  'news.subtitle': { en: 'Stay updated with the latest developments in agriculture and farming technology', ne: 'कृषि र कृषि प्रविधिमा भएका नवीनतम विकासहरूसँग अद्यावधिक रहनुहोस्' },
  'news.readMore': { en: 'Read More', ne: 'थप पढ्नुहोस्' },
  'news.mainTitle': { en: 'Agricultural News', ne: 'कृषि समाचार' },
  'news.mainSubtitle': { en: 'Stay updated with the latest developments in agriculture from Nepal and around the world', ne: 'नेपाल र विदेशमा कृषिमा भएका नवीनतम विकासहरूसँग अद्यावधिक रहनुहोस्' },
  'news.search': { en: 'Search news articles...', ne: 'समाचार लेखहरू खोज्नुहोस्...' },
  'news.category': { en: 'Category', ne: 'श्रेणी' },
  'news.region': { en: 'Region', ne: 'क्षेत्र' },
  'news.trending': { en: 'Trending', ne: 'चर्चामा' },
  'news.readFullArticle': { en: 'Read Full Article', ne: 'पूरै लेख पढ्नुहोस्' },
  'news.noArticles': { en: 'No articles found matching your criteria.', ne: 'तपाईंको मापदण्ड मिल्ने कुनै लेख फेला परेन।' },
  'news.stayUpdated': { en: 'Stay Updated with Agricultural News', ne: 'कृषि समाचारसँग अद्यावधिक रहनुहोस्' },
  'news.newsletterDesc': { en: 'Subscribe to our newsletter and get the latest agricultural news, research updates, and farming insights delivered to your inbox.', ne: 'हाम्रो न्यूजलेटर सदस्यता लिनुहोस् र नवीनतम कृषि समाचार, अनुसन्धान अपडेट र कृषि अन्तर्दृष्टि आफ्नो इनबक्समा प्राप्त गर्नुहोस्।' },
  'news.enterEmail': { en: 'Enter your email address', ne: 'आफ्नो इमेल ठेगाना प्रविष्ट गर्नुहोस्' },
  'news.subscribe': { en: 'Subscribe', ne: 'सदस्यता लिनुहोस्' },

  // About Page
  'about.title': { en: 'About Cropora', ne: 'Cropora को बारेमा' },
  'about.subtitle': { en: 'We\'re on a mission to empower farmers worldwide with the tools, technology, and trade opportunities they need to build sustainable and profitable farming operations.', ne: 'हामी विश्वभरका किसानहरूलाई दिगो र नाफामुलक कृषि सञ्चालन निर्माण गर्न आवश्यक उपकरण, प्रविधि र व्यापारिक अवसरहरू प्रदान गर्ने मिशनमा छौं।' },
  'about.joinCommunity': { en: 'Join Our Community', ne: 'हाम्रो समुदायमा सामेल हुनुहोस्' },
  'about.activeFarmers': { en: 'Active Farmers', ne: 'सक्रिय किसानहरू' },
  'about.countriesServed': { en: 'Countries Served', ne: 'सेवा प्रदान गरिएका देशहरू' },
  'about.calculationsPerformed': { en: 'Calculations Performed', ne: 'गणनाहरू गरियो' },
  'about.yearsExperience': { en: 'Years of Experience', ne: 'वर्षको अनुभव' },
  'about.ourMission': { en: 'Our Mission', ne: 'हाम्रो मिशन' },
  'about.missionText': { en: 'To democratize access to agricultural knowledge and tools, enabling farmers of all sizes to make data-driven decisions that improve productivity, sustainability, and profitability.', ne: 'कृषि ज्ञान र उपकरणहरूमा पहुँचलाई लोकतान्त्रिक बनाउनु, सबै आकारका किसानहरूलाई उत्पादकता, दिगोपन र नाफामुखी सुधार गर्ने डाटा-आधारित निर्णयहरू लिन सक्षम बनाउनु।' },
  'about.missionText2': { en: 'We believe that every farmer, regardless of their location or resources, deserves access to the same high-quality tools and information that can transform their farming operations.', ne: 'हामी विश्वास गर्छौं कि हरेक किसान, उनीहरूको स्थान वा स्रोतसाधन जे भए पनी, उनीहरूको कृषि सञ्चालनलाई रूपान्तरण गर्न सक्ने उस्तै उच्च गुणस्तरका उपकरण र जानकारीमा पहुँच पाउन योग्य छ।' },
  'about.ourVision': { en: 'Our Vision', ne: 'हाम्रो दृष्टिकोण' },
  'about.visionText': { en: 'A world where every farmer has the knowledge, tools, and market access needed to feed the global population sustainably while building prosperous farming communities.', ne: 'एक संसार जहाँ हरेक किसानसँग समृद्ध कृषि समुदायहरू निर्माण गर्दा विश्वव्यापी जनसंख्यालाई दिगो रूपमा खुवाउन आवश्यक ज्ञान, उपकरण र बजार पहुँच छ।' },
  'about.visionText2': { en: 'We envision a future where technology bridges the gap between traditional farming wisdom and modern agricultural science, creating more resilient food systems worldwide.', ne: 'हामी एक भविष्यको कल्पना गर्छौं जहाँ प्रविधिले परम्परागत कृषि बुद्धि र आधुनिक कृषि विज्ञानबीचको खाडललाई पुल्छ, विश्वव्यापी रूपमा थप लचिलो खाद्य प्रणालीहरू सिर्जना गर्छ।' },
  'about.ourStory': { en: 'Our Story', ne: 'हाम्रो कथा' },
  'about.storySubtitle': { en: 'From a simple idea to a global platform serving farmers worldwide', ne: 'साधारण विचारदेखि विश्वभरका किसानहरूलाई सेवा प्रदान गर्ने विश्वव्यापी प्लेटफर्मसम्म' },
  'about.ourValues': { en: 'Our Values', ne: 'हाम्रा मूल्यहरू' },
  'about.valuesSubtitle': { en: 'The principles that guide everything we do', ne: 'हामीले गर्ने सबै कुराको मार्गदर्शन गर्ने सिद्धान्तहरू' },
  'about.sustainability': { en: 'Sustainability', ne: 'दिगोपन' },
  'about.sustainabilityDesc': { en: 'Promoting environmentally friendly farming practices that protect our planet for future generations.', ne: 'भावी पुस्ताका लागि हाम्रो ग्रहको संरक्षण गर्ने वातावरण मैत्री कृषि अभ्यासहरूको प्रवर्द्धन।' },
  'about.farmerCentric': { en: 'Farmer-Centric', ne: 'किसान-केन्द्रित' },
  'about.farmerCentricDesc': { en: 'Every decision we make is guided by what\'s best for the farming community and their success.', ne: 'हामीले गर्ने हरेक निर्णय कृषक समुदाय र उनीहरूको सफलताका लागि के राम्रो छ भन्ने कुराले निर्देशित हुन्छ।' },
  'about.reliability': { en: 'Reliability', ne: 'भरपर्दोता' },
  'about.reliabilityDesc': { en: 'Providing accurate, tested tools and information that farmers can depend on for critical decisions.', ne: 'महत्वपूर्ण निर्णयहरूका लागि किसानहरूले भर पर्न सक्ने सटीक, परीक्षण गरिएका उपकरण र जानकारी प्रदान गर्ने।' },
  'about.innovation': { en: 'Innovation', ne: 'नवाचार' },
  'about.innovationDesc': { en: 'Continuously developing new technologies and solutions to address evolving agricultural challenges.', ne: 'विकसित हुँदै गएका कृषि चुनौतीहरूलाई सम्बोधन गर्न नयाँ प्रविधि र समाधानहरूको निरन्तर विकास।' },
  'about.meetTeam': { en: 'Meet Our Team', ne: 'हाम्रो टोलीलाई चिन्नुहोस्' },
  'about.teamSubtitle': { en: 'Passionate experts dedicated to transforming agriculture', ne: 'कृषिको रूपान्तरणमा समर्पित भावुक विशेषज्ञहरू' },
  'about.ourImpact': { en: 'Our Impact', ne: 'हाम्रो प्रभाव' },
  'about.impactSubtitle': { en: 'Real results from farmers around the world', ne: 'संसारभरका किसानहरूबाट वास्तविक परिणामहरू' },
  'about.yieldIncrease': { en: 'Average increase in crop yields', ne: 'बालीको उत्पादनमा औसत वृद्धि' },
  'about.fertilizerReduction': { en: 'Reduction in fertilizer waste', ne: 'मल बर्बादीमा कमी' },
  'about.costSavings': { en: 'Saved in input costs annually', ne: 'वार्षिक इनपुट लागतमा बचत' },
  'about.transformFarming': { en: 'Ready to Transform Your Farming?', ne: 'आफ्नो कृषिको रूपान्तरण गर्न तयार हुनुहुन्छ?' },
  'about.transformDesc': { en: 'Join thousands of farmers who are already using Cropora to optimize their operations and increase their profits.', ne: 'हजारौं किसानहरूमा सामेल हुनुहोस् जसले पहिले नै आफ्ना सञ्चालनहरू अनुकूलन गर्न र आफ्नो नाफा बढाउन Cropora प्रयोग गरिरहेका छन्।' },
  'about.getStarted': { en: 'Get Started Today', ne: 'आज नै सुरु गर्नुहोस्' },
  'about.contactTeam': { en: 'Contact Our Team', ne: 'हाम्रो टोलीलाई सम्पर्क गर्नुहोस्' },

  // Contact Page
  'contact.title': { en: 'Get in Touch', ne: 'सम्पर्कमा रहनुहोस्' },
  'contact.subtitle': { en: 'We\'re here to help you succeed. Whether you have questions about our tools, need technical support, or want to explore partnership opportunities, we\'d love to hear from you.', ne: 'हामी तपाईंलाई सफल हुन मद्दत गर्न यहाँ छौं। तपाईंसँग हाम्रा उपकरणहरूको बारेमा प्रश्नहरू छन्, प्राविधिक सहायता चाहिन्छ, वा साझेदारी अवसरहरू अन्वेषण गर्न चाहनुहुन्छ, हामी तपाईंबाट सुन्न चाहन्छौं।' },
  'contact.howCanHelp': { en: 'How Can We Help?', ne: 'हामी कसरी मद्दत गर्न सक्छौं?' },
  'contact.helpSubtitle': { en: 'Choose the best way to reach us based on your needs', ne: 'आफ्नो आवश्यकताका आधारमा हामीलाई सम्पर्क गर्ने उत्तम तरिका छान्नुहोस्' },
  'contact.emailUs': { en: 'Email Us', ne: 'हामीलाई इमेल गर्नुहोस्' },
  'contact.emailDesc': { en: 'Send us an email and we\'ll respond within 24 hours', ne: 'हामीलाई इमेल पठाउनुहोस् र हामी २४ घण्टा भित्र जवाफ दिनेछौं' },
  'contact.callUs': { en: 'Call Us', ne: 'हामीलाई फोन गर्नुहोस्' },
  'contact.callDesc': { en: 'Speak directly with our support team', ne: 'हाम्रो सहयोग टोलीसँग प्रत्यक्ष कुरा गर्नुहोस्' },
  'contact.liveChat': { en: 'Live Chat', ne: 'लाइभ च्याट' },
  'contact.liveChatDesc': { en: 'Chat with our team in real-time', ne: 'हाम्रो टोलीसँग वास्तविक समयमा कुराकानी गर्नुहोस्' },
  'contact.supportCenter': { en: 'Support Center', ne: 'सहयोग केन्द्र' },
  'contact.supportCenterDesc': { en: 'Browse our comprehensive help resources', ne: 'हाम्रो बृहत् सहायता स्रोतहरू ब्राउज गर्नुहोस्' },
  'contact.sendMessage': { en: 'Send us a Message', ne: 'हामीलाई सन्देश पठाउनुहोस्' },
  'contact.messageDesc': { en: 'Fill out the form below and we\'ll get back to you within 24 hours', ne: 'तलको फारम भर्नुहोस् र हामी २४ घण्टा भित्र तपाईंलाई फिर्ता सम्पर्क गर्नेछौं' },
  'contact.fullName': { en: 'Full Name', ne: 'पूरा नाम' },
  'contact.emailAddress': { en: 'Email Address', ne: 'इमेल ठेगाना' },
  'contact.phoneNumber': { en: 'Phone Number', ne: 'फोन नम्बर' },
  'contact.companyFarm': { en: 'Company/Farm Name', ne: 'कम्पनी/फार्मको नाम' },
  'contact.category': { en: 'Category', ne: 'श्रेणी' },
  'contact.country': { en: 'Country', ne: 'देश' },
  'contact.subject': { en: 'Subject', ne: 'विषय' },
  'contact.message': { en: 'Message', ne: 'सन्देश' },
  'contact.sendMessageBtn': { en: 'Send Message', ne: 'सन्देश पठाउनुहोस्' },
  'contact.ourOffices': { en: 'Our Offices', ne: 'हाम्रा कार्यालयहरू' },
  'contact.contactByDept': { en: 'Contact by Department', ne: 'विभाग अनुसार सम्पर्क' },
  'contact.deptSubtitle': { en: 'Reach out to the right team for your specific needs', ne: 'आफ्ना विशिष्ट आवश्यकताहरूका लागि उपयुक्त टोलीलाई सम्पर्क गर्नुहोस्' },
  'contact.salesPartnerships': { en: 'Sales & Partnerships', ne: 'बिक्री र साझेदारी' },
  'contact.salesDesc': { en: 'Product demos, pricing, and partnership opportunities', ne: 'उत्पादन प्रदर्शन, मूल्य निर्धारण, र साझेदारी अवसरहरू' },
  'contact.technicalSupport': { en: 'Technical Support', ne: 'प्राविधिक सहयोग' },
  'contact.techSupportDesc': { en: 'Help with calculators, tools, and technical issues', ne: 'क्यालकुलेटर, उपकरण, र प्राविधिक समस्याहरूमा सहायता' },
  'contact.researchDev': { en: 'Research & Development', ne: 'अनुसन्धान र विकास' },
  'contact.researchDesc': { en: 'Feedback on tools, new feature suggestions, and research collaboration', ne: 'उपकरणहरूमा प्रतिक्रिया, नयाँ सुविधा सुझावहरू, र अनुसन्धान सहयोग' },
  'contact.specialties': { en: 'Specialties:', ne: 'विशेषताहरू:' },
  'contact.faq': { en: 'Frequently Asked Questions', ne: 'बारम्बार सोधिने प्रश्नहरू' },
  'contact.faqSubtitle': { en: 'Quick answers to common questions', ne: 'सामान्य प्रश्नहरूका द्रुत उत्तरहरू' },
  'contact.stayConnected': { en: 'Stay Connected', ne: 'जडित रहनुहोस्' },
  'contact.socialDesc': { en: 'Follow us on social media for the latest updates, farming tips, and community stories.', ne: 'नवीनतम अपडेटहरू, कृषि सुझावहरू, र समुदायिक कथाहरूका लागि हामीलाई सामाजिक सञ्जालमा फलो गर्नुहोस्।' },
  'contact.newsletterSignup': { en: 'Newsletter Signup', ne: 'न्यूजलेटर साइनअप' },
  'contact.newsletterDesc': { en: 'Get weekly farming insights, tool updates, and exclusive content delivered to your inbox.', ne: 'साप्ताहिक कृषि अन्तर्दृष्टि, उपकरण अपडेटहरू, र विशेष सामग्री आफ्नो इनबक्समा प्राप्त गर्नुहोस्।' },

  // Testimonials Section
  'testimonials.title': { en: 'What Farmers Say About Us', ne: 'किसानहरूले हाम्रो बारेमा के भन्छन्' },
  'testimonials.subtitle': { en: 'Real stories from farmers who have improved their productivity with our tools', ne: 'हाम्रो उपकरणहरूले आफ्नो उत्पादकता सुधार गरेका किसानहरूका वास्तविक कथाहरू' },

  // Login Modal
  'login.title': { en: 'Welcome to Cropora', ne: 'Cropora मा स्वागत छ' },
  'login.subtitle': { en: 'Sign in to access your farming tools and personalized content', ne: 'आफ्नो कृषि उपकरण र व्यक्तिगत सामग्री पहुँच गर्न साइन इन गर्नुहोस्' },
  'login.googleLogin': { en: 'Continue with Google', ne: 'Google सँग जारी राख्नुहोस्' },
  'login.signingIn': { en: 'Signing in...', ne: 'साइन इन गर्दै...' },
  'login.or': { en: 'Or', ne: 'वा' },
  'login.name': { en: 'Name', ne: 'नाम' },
  'login.enterName': { en: 'Enter your name', ne: 'आफ्नो नाम प्रविष्ट गर्नुहोस्' },
  'login.email': { en: 'Email (optional)', ne: 'इमेल (वैकल्पिक)' },
  'login.enterEmail': { en: 'Enter your email', ne: 'आफ्नो इमेल प्रविष्ट गर्नुहोस्' },
  'login.continueAsGuest': { en: 'Continue as Guest', ne: 'अतिथिको रूपमा जारी राख्नुहोस्' },

  // Footer
  'footer.description': { en: 'Empowering farmers with tools, technology, and trade to increase productivity and income.', ne: 'उत्पादकता र आम्दानी बढाउन उपकरण, प्रविधि र व्यापारका साथ किसानहरूलाई सशक्तिकरण।' },
  'footer.quickLinks': { en: 'Quick Links', ne: 'द्रुत लिंकहरू' },
  'footer.support': { en: 'Support', ne: 'सहयोग' },
  'footer.helpCenter': { en: 'Help Center', ne: 'सहायता केन्द्र' },
  'footer.contactSupport': { en: 'Contact Support', ne: 'सहयोग सम्पर्क' },
  'footer.privacyPolicy': { en: 'Privacy Policy', ne: 'गोपनीयता नीति' },
  'footer.termsOfService': { en: 'Terms of Service', ne: 'सेवाका सर्तहरू' },
  'footer.newsletter': { en: 'Newsletter', ne: 'न्यूजलेटर' },
  'footer.newsletterDescription': { en: 'Subscribe to our newsletter for the latest updates and farming tips.', ne: 'नवीनतम अपडेट र कृषि सुझावहरूको लागि हाम्रो न्यूजलेटर सदस्यता लिनुहोस्।' },
  'footer.enterEmail': { en: 'Enter your email', ne: 'आफ्नो इमेल प्रविष्ट गर्नुहोस्' },
  'footer.subscribe': { en: 'Subscribe', ne: 'सदस्यता' },
  'footer.copyright': { en: '© 2024 Cropora. All rights reserved.', ne: '© २०२४ Cropora। सबै अधिकार सुरक्षित।' },

  // User Menu
  'userMenu.profile': { en: 'Profile', ne: 'प्रोफाइल' },
  'userMenu.myCalculations': { en: 'My Calculations', ne: 'मेरो गणनाहरू' },
  'userMenu.settings': { en: 'Settings', ne: 'सेटिङहरू' },
  'userMenu.logout': { en: 'Log out', ne: 'लग आउट' },
  'userMenu.googleAccount': { en: 'google account', ne: 'गुगल खाता' },
  'userMenu.guestAccount': { en: 'guest account', ne: 'अतिथि खाता' },

  // Search
  'search.placeholder': { en: 'Search everything...', ne: 'सबै खोज्नुहोस्...' },
  'search.noResults': { en: 'No results found', ne: 'कुनै परिणाम फेला परेन' },
  'search.tryAgain': { en: 'Try searching for something else or check your spelling', ne: 'अन्य केही खोज्ने प्रयास गर्नुहोस् वा आफ्नो हिज्जे जाँच गर्नुहोस्' },
  'search.recentSearches': { en: 'Recent Searches', ne: 'हालैका खोजहरू' },
  'search.trending': { en: 'Trending', ne: 'चर्चामा' },
  'search.quickActions': { en: 'Quick Actions', ne: 'द्रुत कार्यहरू' },
  'search.searchResults': { en: 'Search Results', ne: 'खोज परिणामहरू' },

  // Common
  'common.loading': { en: 'Loading...', ne: 'लोड गर्दै...' },
  'common.search': { en: 'Search', ne: 'खोज्नुहोस्' },
  'common.language': { en: 'Language', ne: 'भाषा' },
  'common.english': { en: 'English', ne: 'अङ्ग्रेजी' },
  'common.nepali': { en: 'नेपाली', ne: 'नेपाली' },
  'common.all': { en: 'All', ne: 'सबै' },
  'common.allRegions': { en: 'All Regions', ne: 'सबै क्षेत्रहरू' },
  'common.nepal': { en: 'Nepal', ne: 'नेपाल' },
  'common.international': { en: 'International', ne: 'अन्तर्राष्ट्रिय' },
  'common.justNow': { en: 'Just now', ne: 'भर्खर' },
  'common.hoursAgo': { en: 'hours ago', ne: 'घण्टा अगाडि' },
  'common.yesterday': { en: 'Yesterday', ne: 'हिजो' }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = React.createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = React.useState<Language>('en');

  const t = React.useCallback((key: string): string => {
    return translations[key]?.[language] || key;
  }, [language]);

  const value = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = React.useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
