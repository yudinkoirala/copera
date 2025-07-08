import * as React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function TermsOfServicePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">
              Last updated: December 20, 2024
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  By accessing and using Cropora's website, mobile application, and related services 
                  (collectively, the "Service"), you agree to be bound by these Terms of Service ("Terms"). 
                  If you do not agree to these Terms, please do not use our Service. These Terms constitute 
                  a legally binding agreement between you and Cropora, Inc. ("Cropora," "we," "us," or "our").
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Description of Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Cropora provides an agricultural platform that includes:
                </p>
                <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                  <li>Farming calculators and tools (NPK calculator, seed rate calculator, etc.)</li>
                  <li>Agricultural product marketplace</li>
                  <li>Educational content and farming guides</li>
                  <li>News and industry insights</li>
                  <li>Community features and support</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Our Service is designed to help farmers and agricultural professionals make informed 
                  decisions about their farming practices, but all recommendations should be verified 
                  with local agricultural experts and conditions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. User Accounts and Registration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Account Creation</h4>
                  <p className="text-muted-foreground">
                    To access certain features of our Service, you may need to create an account. You agree to 
                    provide accurate, current, and complete information during registration and to update such 
                    information to keep it accurate, current, and complete.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Account Security</h4>
                  <p className="text-muted-foreground">
                    You are responsible for maintaining the confidentiality of your account credentials and for 
                    all activities that occur under your account. You agree to notify us immediately of any 
                    unauthorized use of your account.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Account Termination</h4>
                  <p className="text-muted-foreground">
                    We reserve the right to suspend or terminate your account at any time for violation of 
                    these Terms or for any other reason at our sole discretion.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Acceptable Use Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  You agree not to use the Service to:
                </p>
                <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                  <li>Violate any applicable laws, regulations, or third-party rights</li>
                  <li>Transmit harmful, offensive, or inappropriate content</li>
                  <li>Engage in fraudulent, deceptive, or misleading activities</li>
                  <li>Interfere with or disrupt the Service or servers</li>
                  <li>Attempt to gain unauthorized access to other users' accounts or data</li>
                  <li>Use automated systems to access the Service without permission</li>
                  <li>Reverse engineer, decompile, or modify any part of the Service</li>
                  <li>Remove or modify any proprietary notices or labels</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Calculator Tools and Recommendations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Educational Purpose</h4>
                  <p className="text-muted-foreground">
                    Our calculators and tools are provided for educational and informational purposes only. 
                    All recommendations and calculations should be verified with local agricultural experts, 
                    soil testing, and field conditions.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">No Guarantee of Results</h4>
                  <p className="text-muted-foreground">
                    We do not guarantee specific farming outcomes, crop yields, or financial results from 
                    using our tools. Agricultural success depends on many factors beyond our calculators, 
                    including weather, soil conditions, pest management, and market conditions.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Professional Consultation</h4>
                  <p className="text-muted-foreground">
                    We strongly recommend consulting with local agricultural extension services, agronomists, 
                    and other qualified professionals before making significant farming decisions.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Intellectual Property Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Our Content</h4>
                  <p className="text-muted-foreground">
                    The Service and its content, including but not limited to text, graphics, images, logos, 
                    software, and data, are owned by Cropora or our licensors and are protected by copyright, 
                    trademark, and other intellectual property laws.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">User Content</h4>
                  <p className="text-muted-foreground">
                    You retain ownership of any content you submit to the Service. By submitting content, 
                    you grant us a worldwide, royalty-free license to use, display, and distribute your 
                    content in connection with the Service.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Restrictions</h4>
                  <p className="text-muted-foreground">
                    You may not copy, modify, distribute, sell, or lease any part of our Service or content 
                    without our written permission.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. E-commerce and Payments</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Product Information</h4>
                  <p className="text-muted-foreground">
                    We strive to provide accurate product descriptions and pricing, but we do not warrant 
                    that product descriptions or pricing is accurate, complete, or error-free.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Orders and Payment</h4>
                  <p className="text-muted-foreground">
                    All orders are subject to acceptance and availability. We reserve the right to refuse 
                    or cancel orders at our discretion. Payment is due at the time of order placement.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Returns and Refunds</h4>
                  <p className="text-muted-foreground">
                    Returns and refunds are governed by our Return Policy, which is incorporated by reference 
                    into these Terms.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Privacy and Data Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your privacy is important to us. Our collection and use of personal information is governed 
                  by our Privacy Policy, which is incorporated by reference into these Terms. By using the 
                  Service, you consent to the collection and use of your information as described in our 
                  Privacy Policy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Disclaimers and Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Service Disclaimers</h4>
                  <p className="text-muted-foreground">
                    THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, 
                    EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO WARRANTIES 
                    OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Limitation of Liability</h4>
                  <p className="text-muted-foreground">
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, CROPORA SHALL NOT BE LIABLE FOR ANY INDIRECT, 
                    INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO 
                    LOSS OF PROFITS, DATA, OR USE, ARISING OUT OF OR RELATING TO THE SERVICE.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Maximum Liability</h4>
                  <p className="text-muted-foreground">
                    Our total liability to you for all claims arising out of or relating to the Service 
                    shall not exceed the amount you paid us in the 12 months preceding the claim.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Indemnification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You agree to indemnify, defend, and hold harmless Cropora and its officers, directors, 
                  employees, and agents from and against any claims, damages, obligations, losses, 
                  liabilities, costs, or debt arising from your use of the Service or violation of these Terms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>11. Termination</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Either party may terminate these Terms at any time. Upon termination, your right to use 
                  the Service will cease immediately. Sections that by their nature should survive termination 
                  will remain in effect after termination, including intellectual property rights, disclaimers, 
                  and limitation of liability.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>12. Governing Law and Dispute Resolution</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Governing Law</h4>
                  <p className="text-muted-foreground">
                    These Terms are governed by and construed in accordance with the laws of the State of 
                    Delaware, without regard to conflict of law principles.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Dispute Resolution</h4>
                  <p className="text-muted-foreground">
                    Any disputes arising out of or relating to these Terms or the Service will be resolved 
                    through binding arbitration in accordance with the rules of the American Arbitration 
                    Association, except that you may bring claims in small claims court if they qualify.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>13. Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We may modify these Terms at any time by posting the revised Terms on our website. 
                  Your continued use of the Service after such changes constitutes acceptance of the 
                  modified Terms. We will provide notice of material changes through the Service or 
                  by email.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>14. Miscellaneous</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Entire Agreement</h4>
                  <p className="text-muted-foreground">
                    These Terms, together with our Privacy Policy, constitute the entire agreement between 
                    you and Cropora regarding the Service.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Severability</h4>
                  <p className="text-muted-foreground">
                    If any provision of these Terms is found to be unenforceable, the remaining provisions 
                    will remain in full force and effect.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Waiver</h4>
                  <p className="text-muted-foreground">
                    Our failure to enforce any provision of these Terms will not constitute a waiver of 
                    that provision or any other provision.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>15. Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about these Terms, please contact us at:
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-medium">Cropora Legal Team</p>
                  <p className="text-muted-foreground">Email: legal@cropora.com</p>
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

export default TermsOfServicePage;
