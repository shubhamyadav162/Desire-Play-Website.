import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import NewHeader from '@/components/layout/NewHeader';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  HelpCircle,
  Search,
  FileText,
  ShoppingBag,
  Package,
  CreditCard,
  Truck,
  RotateCcw,
  Mail,
  MessageSquare,
  CheckCircle,
  Clock,
  AlertCircle,
  BookOpen,
  Video,
  Download
} from 'lucide-react';

const HelpCenter = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const helpCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: BookOpen,
      description: 'New to Desireplay? Start here',
      items: [
        {
          title: 'How to Create Your First Logo',
          content: 'Learn step-by-step how to use our logo builder to create professional logos for your business.',
          link: '/help/getting-started/logo-creation'
        },
        {
          title: 'Understanding Our Services',
          content: 'Complete guide to our logo design, visiting cards, and gift card services.',
          link: '/help/getting-started/services'
        },
        {
          title: 'Account Setup Guide',
          content: 'How to create and manage your Desireplay account for the best experience.',
          link: '/help/getting-started/account'
        }
      ]
    },
    {
      id: 'ordering',
      title: 'Ordering Process',
      icon: ShoppingBag,
      description: 'Everything about placing and managing orders',
      items: [
        {
          title: 'How to Place an Order',
          content: 'Step-by-step guide to ordering logos, visiting cards, and gift cards.',
          link: '/help/ordering/place-order'
        },
        {
          title: 'Order Status Tracking',
          content: 'How to track your order status and estimated delivery times.',
          link: '/help/ordering/tracking'
        },
        {
          title: 'Modifying or Cancelling Orders',
          content: 'Learn how to modify or cancel orders before they enter production.',
          link: '/help/ordering/modifications'
        }
      ]
    },
    {
      id: 'payment',
      title: 'Payment & Billing',
      icon: CreditCard,
      description: 'Payment methods, billing, and invoices',
      items: [
        {
          title: 'Accepted Payment Methods',
          content: 'We accept UPI, Credit Cards, Debit Cards, Net Banking, and Digital Wallets.',
          link: '/help/payment/methods'
        },
        {
          title: 'Understanding Your Invoice',
          content: 'How to read and understand your Desireplay invoices and receipts.',
          link: '/help/payment/invoices'
        },
        {
          title: 'Payment Security',
          content: 'Learn about our secure payment processing and data protection measures.',
          link: '/help/payment/security'
        }
      ]
    },
    {
      id: 'delivery',
      title: 'Delivery & Shipping',
      icon: Truck,
      description: 'Digital and physical delivery information',
      items: [
        {
          title: 'Digital Product Delivery',
          content: 'How digital logos and files are delivered to your email and account.',
          link: '/help/delivery/digital'
        },
        {
          title: 'Physical Shipping Timeline',
          content: 'Estimated delivery times for physical gift cards and merchandise.',
          link: '/help/delivery/shipping'
        },
        {
          title: 'Tracking Your Shipment',
          content: 'How to track physical orders and receive delivery updates.',
          link: '/help/delivery/tracking'
        }
      ]
    },
    {
      id: 'refunds',
      title: 'Refunds & Returns',
      icon: RotateCcw,
      description: 'Refund policies and procedures',
      items: [
        {
          title: 'Refund Policy Overview',
          content: 'Complete guide to our refund policy for digital and physical products.',
          link: '/help/refunds/policy'
        },
        {
          title: 'How to Request a Refund',
          content: 'Step-by-step process for requesting refunds and cancellations.',
          link: '/help/refunds/request'
        },
        {
          title: 'Refund Processing Time',
          content: 'Understanding refund processing timelines and procedures.',
          link: '/help/refunds/timeline'
        }
      ]
    },
    {
      id: 'technical',
      title: 'Technical Support',
      icon: MessageSquare,
      description: 'Technical issues and troubleshooting',
      items: [
        {
          title: 'File Download Issues',
          content: 'Troubleshooting problems with downloading your digital files.',
          link: '/help/technical/downloads'
        },
        {
          title: 'Website Navigation Help',
          content: 'Tips for navigating our website and finding what you need.',
          link: '/help/technical/navigation'
        },
        {
          title: 'Browser Compatibility',
          content: 'Supported browsers and devices for the best experience.',
          link: '/help/technical/browsers'
        }
      ]
    }
  ];

  const filteredCategories = helpCategories.map(category => ({
    ...category,
    items: category.items.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.content.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.items.length > 0);

  const quickActions = [
    {
      title: 'Contact Support',
      description: 'Get help from our support team',
      icon: MessageSquare,
      action: () => window.location.href = '/contact-grievance',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      title: 'Track Order',
      description: 'Check your order status',
      icon: Package,
      action: () => window.location.href = '/profile',
      color: 'bg-green-600 hover:bg-green-700'
    },
    {
      title: 'Live Chat',
      description: 'Chat with our support team',
      icon: MessageSquare,
      action: () => alert('Live chat coming soon!'),
      color: 'bg-purple-600 hover:bg-purple-700'
    }
  ];

  const popularTopics = [
    'How long does logo design take?',
    'What file formats do I receive?',
    'Can I modify my design later?',
    'Do you offer bulk discounts?',
    'How do I request revisions?',
    'What is your refund policy?'
  ];

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
                <HelpCircle className="h-12 w-12" />
                <h1 className="font-heading font-bold text-4xl md:text-5xl">
                  Help Center
                </h1>
              </div>
              <p className="text-xl opacity-90 mb-8">
                Find answers to common questions and get the support you need
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search for help articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full py-4 px-12 pl-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow" onClick={action.action}>
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 rounded-full ${action.color} flex items-center justify-center mx-auto mb-4`}>
                      <action.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{action.title}</h3>
                    <p className="text-gray-600 text-sm">{action.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-3xl text-center mb-8">Popular Topics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {popularTopics.map((topic, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-[#7C3AED]" />
                        <span className="font-medium">{topic}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl text-center mb-12">Browse Help Categories</h2>

          <div className="space-y-8">
            {filteredCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <category.icon className="h-8 w-8 text-[#7C3AED]" />
                      {category.title}
                    </CardTitle>
                    <p className="text-gray-600">{category.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.items.map((item, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (itemIndex * 0.05) }}
                        >
                          <Card className="cursor-pointer hover:shadow-md transition-all hover:scale-105">
                            <CardContent className="p-4">
                              <div className="flex items-start gap-3 mb-3">
                                <FileText className="h-5 w-5 text-[#7C3AED] mt-0.5 flex-shrink-0" />
                                <div>
                                  <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                                  <p className="text-sm text-gray-600">{item.content}</p>
                                </div>
                              </div>
                              <Button variant="outline" size="sm" className="w-full">
                                Read More
                              </Button>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Hours */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-2xl">Support Hours & Contact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                      <Clock className="h-5 w-5 text-[#7C3AED]" />
                      Support Hours
                    </h3>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span>9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span>10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                      <Mail className="h-5 w-5 text-[#7C3AED]" />
                      Email Support
                    </h3>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        <span>support@desireplay.com</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <AlertCircle className="h-4 w-4 text-orange-600" />
                        <span className="text-orange-600">Grievance: grievance@desireplay.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-3xl text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  question: 'How long does it take to design a logo?',
                  answer: 'Standard logo design takes 3-5 business days, while premium designs may take 5-7 business days. Timelines start after we receive your final brief and approval.'
                },
                {
                  question: 'What file formats will I receive?',
                  answer: 'You receive multiple formats including SVG, PNG, JPG, PDF, and source files. All files are optimized for both digital and print use.'
                },
                {
                  question: 'Can I request changes to my design?',
                  answer: 'Yes! Each package includes a specific number of revision rounds. Standard packages include 3 revisions, while premium packages include 5 revisions.'
                },
                {
                  question: 'Do you offer refunds?',
                  answer: 'We offer refunds for non-delivery, technical failures, or if the deliverable materially differs from the approved brief. Please review our detailed refund policy for more information.'
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg mb-2">{faq.question}</h4>
                      <p className="text-gray-600">{faq.answer}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HelpCenter;