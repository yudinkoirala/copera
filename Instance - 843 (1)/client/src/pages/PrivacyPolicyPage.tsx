import * as React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">
              Last updated: December 20, 2024
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Personal Information</h4>
                  <p className="text-muted-foreground">
                    We collect information you provide directly to us, such as when you create an account, 
                    use our calculators, make a purchase, or contact us for support. This may include:
                  </p>
                  <ul className="list-disc ml-6 mt-2 text-muted-foreground">
                    <li>Name and contact information (email address, phone number)</li>
                    <li>Account credentials and profile information</li>
                    <li>Farm information and crop data you input into our tools</li>
                    <li>Payment information for purchases</li>
                    <li>Communications with our support team</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Automatically Collected Information</h4>
                  <p className="text-muted-foreground">
                    When you use our services, we automatically collect certain information, including:
                  </p>
                  <ul className="list-disc ml-6 mt-2 text-muted-foreground">
                    <li>Device information (IP address, browser type, operating system)</li>
                    <li>Usage data (pages visited, features used, time spent)</li>
                    <li>Location information (with your permission)</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                  <li>Provide, maintain, and improve our farming tools and services</li>
                  <li>Process transactions and send related information</li>
                  <li>Provide customer support and respond to your inquiries</li>
                  <li>Send technical notices, updates, and administrative messages</li>
                  <li>Personalize your experience and provide customized recommendations</li>
                  <li>Monitor and analyze usage patterns to improve our services</li>
                  <li>Detect, prevent, and address technical issues and security threats</li>
                  <li>Comply with legal obligations and protect our rights</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Information Sharing and Disclosure</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We do not sell, trade, or otherwise transfer your personal information to third parties, 
                  except in the following circumstances:
                </p>
                
                <div>
                  <h4 className="font-semibold mb-2">Service Providers</h4>
                  <p className="text-muted-foreground">
                    We may share your information with trusted third-party service providers who assist us in 
                    operating our platform, conducting business, or serving you, provided they agree to keep 
                    your information confidential.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Legal Requirements</h4>
                  <p className="text-muted-foreground">
                    We may disclose your information if required by law, legal process, or government request, 
                    or to protect the rights, property, or safety of Cropora, our users, or others.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Business Transfers</h4>
                  <p className="text-muted-foreground">
                    In the event of a merger, acquisition, or sale of assets, your information may be 
                    transferred as part of the business transaction.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Data Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We implement appropriate technical and organizational security measures to protect your 
                  personal information against unauthorized access, alteration, disclosure, or destruction. 
                  These measures include:
                </p>
                <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Employee training on data protection practices</li>
                  <li>Incident response procedures</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  However, no method of transmission over the internet or electronic storage is 100% secure, 
                  and we cannot guarantee absolute security.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Your Rights and Choices</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  You have certain rights regarding your personal information:
                </p>
                
                <div>
                  <h4 className="font-semibold mb-2">Access and Update</h4>
                  <p className="text-muted-foreground">
                    You can access and update your account information through your profile settings.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Data Portability</h4>
                  <p className="text-muted-foreground">
                    You can request a copy of your personal data in a portable format.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Deletion</h4>
                  <p className="text-muted-foreground">
                    You can request deletion of your account and personal information, subject to legal requirements.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Communication Preferences</h4>
                  <p className="text-muted-foreground">
                    You can opt out of promotional communications by following the unsubscribe links in emails 
                    or updating your preferences in your account settings.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Cookies and Tracking Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We use cookies and similar tracking technologies to enhance your experience on our platform. 
                  Cookies are small data files stored on your device that help us:
                </p>
                <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                  <li>Remember your preferences and settings</li>
                  <li>Provide personalized content and recommendations</li>
                  <li>Analyze website traffic and user behavior</li>
                  <li>Improve our services and user experience</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  You can control cookie settings through your browser preferences, but disabling cookies 
                  may affect the functionality of our services.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. International Data Transfers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your information may be transferred to and processed in countries other than your country of 
                  residence. We ensure that such transfers comply with applicable data protection laws and that 
                  appropriate safeguards are in place to protect your personal information.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Children's Privacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our services are not intended for children under 13 years of age. We do not knowingly collect 
                  personal information from children under 13. If we become aware that we have collected personal 
                  information from a child under 13, we will take steps to delete such information.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Changes to This Privacy Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or 
                  applicable laws. We will notify you of any material changes by posting the updated policy on 
                  our website and updating the "Last updated" date. Your continued use of our services after 
                  such changes constitutes acceptance of the updated Privacy Policy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data 
                  practices, please contact us at:
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-medium">Cropora Privacy Team</p>
                  <p className="text-muted-foreground">Email: privacy@cropora.com</p>
                  <p className="text-muted-foreground">Phone: +1-800-CROPORA</p>
                  <p className="text-muted-foreground">
                    Address: 123 Agriculture Drive, Farm City, FC 12345, United States
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default PrivacyPolicyPage;
