import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import NewHeader from '@/components/layout/NewHeader';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RotateCcw, AlertCircle, Clock, CheckCircle, Mail, Phone, Gavel } from 'lucide-react';

const ReturnRefundPolicy = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <NewHeader />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <RotateCcw className="h-12 w-12" />
                <h1 className="font-heading font-bold text-4xl md:text-5xl">
                  Return & Refund Policy
                </h1>
              </div>
              <p className="text-xl opacity-90 mb-8">
                Clear guidelines for returns and refunds
              </p>
              <p className="text-lg opacity-80">
                Last updated: 20 September 2024
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="bg-white border-b sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4 py-4">
            {[
              { id: 'digital-products', label: 'Digital Products', icon: RotateCcw },
              { id: 'revisions', label: 'Revisions', icon: CheckCircle },
              { id: 'gift-cards', label: 'Gift Cards', icon: AlertCircle },
              { id: 'process', label: 'Refund Process', icon: Clock },
            ].map((item) => (
              <Button
                key={item.id}
                variant="outline"
                size="sm"
                onClick={() => scrollToSection(item.id)}
                className="flex items-center gap-2"
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Return & Refund Policy — Desireplay
                </h2>
                <p className="text-gray-600 mb-6">
                  At Desireplay, we strive to provide the best digital design services. Please read our refund policy carefully.
                </p>
              </div>

  
              {/* Digital Products */}
              <Card id="digital-products" className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <RotateCcw className="h-6 w-6 text-[#7C3AED]" />
                    Digital Products (Logos, Downloadable Assets)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600 font-medium">
                      All logo designs and digital deliverables are non-refundable once delivered and accepted, except where:
                    </p>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#7C3AED] rounded-full mt-2 flex-shrink-0"></div>
                        <span>The deliverable is not provided within the committed timeline without prior notice; or</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#7C3AED] rounded-full mt-2 flex-shrink-0"></div>
                        <span>There is demonstrable non-delivery or technical failure preventing delivery; or</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#7C3AED] rounded-full mt-2 flex-shrink-0"></div>
                        <span>The deliverable materially differs from the confirmed brief</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Revisions */}
              <Card id="revisions" className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <CheckCircle className="h-6 w-6 text-[#7C3AED]" />
                    Revisions & Acceptance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#7C3AED] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Each order includes <strong>3 rounds of revisions</strong> specified in the order</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#7C3AED] rounded-full mt-2 flex-shrink-0"></div>
                      <span>After final acceptance, refunds are not available</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#7C3AED] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Additional revisions beyond the included rounds may incur extra charges</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Gift Cards */}
              <Card id="gift-cards" className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <AlertCircle className="h-6 w-6 text-[#7C3AED]" />
                    Gift Cards
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#7C3AED] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Gift cards are non-refundable once issued</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#7C3AED] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Fraudulent use or chargebacks will be investigated; we may cancel suspect cards</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#7C3AED] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Gift cards expire 12 months from the date of purchase unless otherwise specified</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Refund Process */}
              <Card id="process" className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <Clock className="h-6 w-6 text-[#7C3AED]" />
                    How to Request a Refund / Cancellation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#7C3AED] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Email <strong>support@desireplay.com</strong> within 7 days of delivery with order ID and reason</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#7C3AED] rounded-full mt-2 flex-shrink-0"></div>
                        <span>We aim to respond within 7 working days</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#7C3AED] rounded-full mt-2 flex-shrink-0"></div>
                        <span>If eligible, refunds will be processed to original payment method within 30 days</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Chargebacks */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <AlertCircle className="h-6 w-6 text-[#7C3AED]" />
                    Chargebacks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    If you dispute a charge with your bank, we will respond and provide order evidence. We reserve the right to challenge frivolous or fraudulent chargeback claims.
                  </p>
                </CardContent>
              </Card>

              {/* Statutory Rights */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <Gavel className="h-6 w-6 text-[#7C3AED]" />
                    Statutory Rights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Nothing in this policy affects your statutory rights under Indian consumer protection laws.
                  </p>
                </CardContent>
              </Card>

              {/* Quick Reference Table */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Refund Eligibility Quick Reference</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Scenario</th>
                        <th className="text-left p-2">Refund Eligible</th>
                        <th className="text-left p-2">Time Limit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2">Non-delivery of service</td>
                        <td className="p-2">✓ Yes</td>
                        <td className="p-2">Within 7 days of due date</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Technical failure</td>
                        <td className="p-2">✓ Yes</td>
                        <td className="p-2">Within 7 days of delivery</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Material deviation from brief</td>
                        <td className="p-2">✓ Yes</td>
                        <td className="p-2">Within 7 days of delivery</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Customer changed mind</td>
                        <td className="p-2">✗ No</td>
                        <td className="p-2">N/A</td>
                      </tr>
                      <tr>
                        <td className="p-2">After final approval</td>
                        <td className="p-2">✗ No</td>
                        <td className="p-2">N/A</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Need Help with a Refund?
                </h3>
                <p className="text-gray-600 mb-4">
                  Our support team is here to help you with any refund-related questions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-[#7C3AED] hover:bg-[#6D28D9]">
                    <Mail className="h-4 w-4 mr-2" />
                    Email Support
                  </Button>
                  <Button variant="outline">
                    <Mail className="h-4 w-4 mr-2" />
                    Email Support
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReturnRefundPolicy;