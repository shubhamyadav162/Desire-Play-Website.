import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' }
    ],
    services: [
      { name: 'Logo Design', href: '/shop?category=logos' },
      { name: 'Visiting Cards', href: '/shop?category=cards' },
      { name: 'Gift Cards', href: '/shop?category=gift-cards' },
      { name: 'Custom Design', href: '/builder' }
    ],
    support: [
      { name: 'Help Center', href: '/help' },
      { name: 'Terms & Conditions', href: '/terms-conditions' },
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Return & Refund', href: '/return-refund-policy' },
      { name: 'Shipping & Delivery', href: '/shipping-delivery-policy' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/desireplay', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/desireplay', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/desireplay', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/desireplay', label: 'LinkedIn' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A202C] text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-heading font-bold text-2xl mb-4">Stay Updated With Our Latest Designs</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and get exclusive design tips, special offers, and updates on our latest services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent"
              />
              <Button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-medium px-6 py-3 rounded-lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] rounded-lg flex items-center justify-center">
                <span className="font-bold text-white text-lg">D</span>
              </div>
              <span className="font-heading font-bold text-xl">Desireplay</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              India's premier design platform for professional logos, visiting cards, and gift cards. 
              Empowering businesses with exceptional design solutions.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="h-5 w-5 text-[#7C3AED]" />
                <span>support@desireplay.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="h-5 w-5 text-[#7C3AED]" />
                <span>123 Design Street, Andheri West, Mumbai, Maharashtra 400053</span>
              </div>
              <div className="bg-blue-50 rounded-lg p-3">
                <p className="text-sm font-medium text-blue-900">Grievance Officer</p>
                <p className="text-xs text-blue-700">Rahul Sharma | grievance@desireplay.com</p>
              </div>
            </div>
            
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  to={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#7C3AED] hover:text-white transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Desireplay. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
                <Button
                onClick={scrollToTop}
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white p-2 h-auto"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;