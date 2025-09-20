import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import NewHeader from '@/components/layout/NewHeader';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, ShoppingBag, Heart, Gavel, CheckCircle } from 'lucide-react';

const TermsConditions = () => {
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
                <FileText className="h-12 w-12" />
                <h1 className="font-heading font-bold text-4xl md:text-5xl">
                  Terms & Conditions
                </h1>
              </div>
              <p className="text-xl opacity-90 mb-8">
                Please read these terms carefully before using our services
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
              { id: 'products', label: 'Products', icon: ShoppingBag },
              { id: 'orders', label: 'Order Process', icon: CheckCircle },
              { id: 'intellectual', label: 'Intellectual Property', icon: Heart },
              { id: 'liability', label: 'Liability', icon: Gavel },
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
                  Terms & Conditions — Desireplay
                </h2>
                <p className="text-gray-600 mb-6">
                  By using <a href="https://desireplay.com" className="text-[#7C3AED] hover:underline">https://desireplay.com</a> and placing an order you agree to these terms.
                </p>
              </div>

              {/* Products & Deliverables */}
              <Card id="products" className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <ShoppingBag className="h-6 w-6 text-[#7C3AED]" />
                    Products & Deliverables
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#7C3AED] rounded-full mt-2 flex-shrink-0"></div>
                      <span>We sell custom digital logos and gift cards</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#7C3AED] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Logos are delivered digitally after payment and brief approval</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#7C3AED] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Gift cards are delivered via email (or physical if chosen) to the address/email you provide</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Order Process */}
              <Card id="orders" className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <CheckCircle className="h-6 w-6 text-[#7C3AED]" />
                    Order Process & Approvals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#7C3AED] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Orders placed and paid are accepted subject to verification</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#7C3AED] rounded-full mt-2 flex-shrink-0"></div>
                      <span>We may request ID or further info for fraud checks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#7C3AED] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Delivery timelines start after payment + final brief</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Intellectual Property */}
              <Card id="intellectual" className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <Heart className="h-6 w-6 text-[#7C3AED]" />
                    Intellectual Property
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#7C3AED] rounded-full mt-2 flex-shrink-0"></div>
                      <span>On full payment and acceptance, design ownership transfers as agreed in the order</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#7C3AED] rounded-full mt-2 flex-shrink-0"></div>
                      <span>We reserve the right to display work in our portfolio unless you request NDA/opt-out in writing</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Liability */}
              <Card id="liability" className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <Gavel className="h-6 w-6 text-[#7C3AED]" />
                    Liability & Disclaimers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#7C3AED] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Our liability for any direct loss is limited to the order value</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#7C3AED] rounded-full mt-2 flex-shrink-0"></div>
                      <span>We are not liable for indirect or consequential losses</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#7C3AED] rounded-full mt-2 flex-shrink-0"></div>
                      <span>These terms are governed by the laws of India. Disputes resolved in courts at Mumbai</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Acceptance Box */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  By Using Our Service, You Agree To:
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Provide accurate information for orders</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Make timely payments as specified</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Respect intellectual property rights</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Follow our terms and conditions</span>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Have Questions?
                </h3>
                <p className="text-gray-600 mb-4">
                  If you have any questions about these terms, please contact us.
                </p>
                <Button className="bg-[#7C3AED] hover:bg-[#6D28D9]">
                  Contact Support
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsConditions;