import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import NewHeader from '@/components/layout/NewHeader';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import {
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
  User,
  MessageSquare,
  Building,
  Shield
} from 'lucide-react';

const ContactGrievance = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    isGrievance: false
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      isGrievance: false
    });
  };

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
                <Mail className="h-12 w-12" />
                <h1 className="font-heading font-bold text-4xl md:text-5xl">
                  Contact & Grievance
                </h1>
              </div>
              <p className="text-xl opacity-90 mb-8">
                We're here to help. Reach out to us for any queries or concerns.
              </p>
              <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                <Shield className="h-4 w-4 mr-2" />
                RBI Compliant Grievance Redressal
              </Badge>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="bg-white border-b sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4 py-4">
            {[
              { id: 'contact-info', label: 'Contact Info', icon: Phone },
              { id: 'grievance-officer', label: 'Grievance Officer', icon: User },
              { id: 'contact-form', label: 'Contact Form', icon: MessageSquare },
              { id: 'response-time', label: 'Response Time', icon: Clock },
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
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column - Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Business Information */}
                <Card id="contact-info" className="mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <Building className="h-6 w-6 text-[#7C3AED]" />
                      Business Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
                        <h3 className="font-semibold text-gray-900 mb-3">Desireplay</h3>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <MapPin className="h-5 w-5 text-[#7C3AED] mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium text-gray-900">Address</p>
                              <p className="text-gray-600">
                                123 Design Street, Andheri West, Mumbai, Maharashtra 400053, India
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Mail className="h-5 w-5 text-[#7C3AED] mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium text-gray-900">Email</p>
                              <p className="text-gray-600">support@desireplay.com</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Grievance Officer */}
                <Card id="grievance-officer" className="mb-8 border-orange-200 bg-orange-50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl text-orange-900">
                      <Shield className="h-6 w-6 text-orange-600" />
                      Grievance / Nodal Officer
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-white rounded-lg p-4 border border-orange-200">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center">
                          <User className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Rahul Sharma</h4>
                          <p className="text-sm text-gray-600">Authorized Grievance Officer</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <Mail className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-gray-900">Email</p>
                            <p className="text-gray-600 text-sm">grievance@desireplay.com</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Response Time */}
                <Card id="response-time" className="mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <Clock className="h-6 w-6 text-[#7C3AED]" />
                      Response Timeline
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-green-900">Initial Response</p>
                          <p className="text-sm text-green-700">Within 48 hours of receiving complaint</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                        <Clock className="h-5 w-5 text-blue-600 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-blue-900">Resolution Time</p>
                          <p className="text-sm text-blue-700">Within 30 days from receipt</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                        <AlertCircle className="h-5 w-5 text-orange-600 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-orange-900">Escalation</p>
                          <p className="text-sm text-orange-700">If unresolved, escalate to RBI Ombudsman</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* RBI Compliance */}
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <Shield className="h-6 w-6 text-[#7C3AED]" />
                      RBI Compliance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
                      <p className="text-sm text-gray-700 mb-3">
                        We are committed to providing excellent customer service and resolving grievances promptly as per RBI guidelines.
                      </p>
                      <div className="flex items-center gap-2 text-xs text-blue-700">
                        <CheckCircle className="h-3 w-3" />
                        <span>Payment Aggregator Guidelines Compliant</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-blue-700">
                        <CheckCircle className="h-3 w-3" />
                        <span>Grievance Redressal Mechanism in Place</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Right Column - Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card id="contact-form">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <MessageSquare className="h-6 w-6 text-[#7C3AED]" />
                      Send us a Message
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your full name"
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email"
                            className="mt-1"
                          />
                        </div>
                      </div>

  
                      <div>
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="Enter the subject"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us more about your query or concern..."
                          className="mt-1"
                          rows={6}
                        />
                      </div>

                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          id="isGrievance"
                          checked={formData.isGrievance}
                          onChange={(e) => setFormData(prev => ({ ...prev, isGrievance: e.target.checked }))}
                          className="rounded border-gray-300"
                        />
                        <Label htmlFor="isGrievance" className="text-sm">
                          This is a grievance or complaint that requires immediate attention
                        </Label>
                      </div>

                      {formData.isGrievance && (
                        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <AlertCircle className="h-4 w-4 text-orange-600" />
                            <p className="font-medium text-orange-900">Grievance Notice</p>
                          </div>
                          <p className="text-sm text-orange-800">
                            Your grievance will be prioritized and you'll receive a response within 48 hours as per RBI guidelines.
                          </p>
                        </div>
                      )}

                      <Button
                        type="submit"
                        className="w-full bg-[#7C3AED] hover:bg-[#6D28D9]"
                        size="lg"
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Quick Contact Options */}
                <Card className="mt-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <Phone className="h-6 w-6 text-[#7C3AED]" />
                      Quick Contact
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button variant="outline" className="flex-1">
                          <Phone className="h-4 w-4 mr-2" />
                          Call Support
                        </Button>
                        <Button variant="outline" className="flex-1">
                          <Mail className="h-4 w-4 mr-2" />
                          Email Us
                        </Button>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button variant="outline" className="flex-1">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Live Chat
                        </Button>
                        <Button variant="outline" className="flex-1">
                          <Building className="h-4 w-4 mr-2" />
                          Visit Office
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactGrievance;