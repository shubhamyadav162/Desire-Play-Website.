import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import NewHeader from '@/components/layout/NewHeader';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Truck, Package, Clock, CheckCircle, AlertCircle, Download, Mail } from 'lucide-react';

const ShippingDeliveryPolicy = () => {
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
                <Truck className="h-12 w-12" />
                <h1 className="font-heading font-bold text-4xl md:text-5xl">
                  Delivery Policy
                </h1>
              </div>
              <p className="text-xl opacity-90 mb-8">
                Clear delivery timelines for your digital and physical products
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
              { id: 'digital-delivery', label: 'Digital Delivery', icon: Download },
              { id: 'physical-delivery', label: 'Physical Delivery', icon: Package },
              { id: 'failed-delivery', label: 'Failed Delivery', icon: AlertCircle },
              { id: 'tracking', label: 'Tracking', icon: Truck },
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
                  Delivery Policy — Desireplay
                </h2>
                <p className="text-gray-600 mb-6">
                  We ensure timely delivery of all your digital and physical products. Here's what you can expect.
                </p>
              </div>

              {/* Digital Delivery */}
              <Card id="digital-delivery" className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <Download className="h-6 w-6 text-[#7C3AED]" />
                    Digital Logos Delivery
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Delivery Method</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Email download link</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Private drive link</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Direct file attachment</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Timeline</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-2">
                          <Clock className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span><strong>3-7 business days</strong> after order confirmation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Clock className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>After final brief approval</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Clock className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Revisions follow order schedule</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Physical Delivery */}
              <Card id="physical-delivery" className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <Package className="h-6 w-6 text-[#7C3AED]" />
                    Physical Products (Gift Cards & Merchandise)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Shipping Information</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-2">
                          <Truck className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Shipping via <strong>Delhivery</strong></span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Truck className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Shipping charges: <strong>₹50</strong> (orders below ₹2500)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Truck className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span><strong>FREE shipping</strong> on orders above ₹2500</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Delivery Timeline</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-2">
                          <Clock className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Metro cities:</strong> 3-4 business days</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Clock className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Other cities:</strong> 5-7 business days</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Clock className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Remote areas:</strong> 7-10 business days</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Failed Delivery */}
              <Card id="failed-delivery" className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <AlertCircle className="h-6 w-6 text-[#7C3AED]" />
                    Failed Delivery Procedures
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-900 mb-2">Digital Delivery Issues</h4>
                      <ul className="space-y-2 text-blue-800">
                        <li className="flex items-start gap-2">
                          <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          <span>We will retry delivery to the provided email</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          <span>Alternate email can be provided upon request</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          <span>24/7 support available for delivery issues</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 rounded-lg p-4">
                      <h4 className="font-semibold text-orange-900 mb-2">Physical Delivery Issues</h4>
                      <ul className="space-y-2 text-orange-800">
                        <li className="flex items-start gap-2">
                          <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          <span>Wrong address: Customer bears re-shipment cost</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          <span>Unavailable at delivery: 2 additional attempts</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          <span>Package returned: Full refund or re-shipment available</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Tracking */}
              <Card id="tracking" className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <Truck className="h-6 w-6 text-[#7C3AED]" />
                    Order Tracking
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Digital Orders</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Email notifications for each milestone</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Order status updates in customer account</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Physical Orders</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Tracking number via email and SMS</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Real-time tracking on our website</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Delivery Timeline Table */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Delivery Timeline Summary</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3">Product Type</th>
                        <th className="text-left p-3">Processing Time</th>
                        <th className="text-left p-3">Delivery Time</th>
                        <th className="text-left p-3">Total Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3">Digital Logo (Standard)</td>
                        <td className="p-3">1-2 days</td>
                        <td className="p-3">Instant</td>
                        <td className="p-3">1-2 days</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">Digital Logo (Premium)</td>
                        <td className="p-3">3-5 days</td>
                        <td className="p-3">Instant</td>
                        <td className="p-3">3-5 days</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">Digital Gift Card</td>
                        <td className="p-3">Same day</td>
                        <td className="p-3">Instant</td>
                        <td className="p-3">Same day</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">Physical Gift Card</td>
                        <td className="p-3">1-2 days</td>
                        <td className="p-3">3-7 days</td>
                        <td className="p-3">4-9 days</td>
                      </tr>
                      <tr>
                        <td className="p-3">Custom Merchandise</td>
                        <td className="p-3">5-7 days</td>
                        <td className="p-3">3-7 days</td>
                        <td className="p-3">8-14 days</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Support Information */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Delivery Support Available 24/7
                </h3>
                <p className="text-gray-600 mb-4">
                  Having issues with your delivery? Our support team is here to help.
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

export default ShippingDeliveryPolicy;