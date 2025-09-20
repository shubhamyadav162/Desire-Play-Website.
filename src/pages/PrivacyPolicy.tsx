import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import NewHeader from '@/components/layout/NewHeader';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, FileText, Lock, Database, Eye, Mail } from 'lucide-react';

const PrivacyPolicy = () => {
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
                <Shield className="h-12 w-12" />
                <h1 className="font-heading font-bold text-4xl md:text-5xl">
                  Privacy Policy
                </h1>
              </div>
              <p className="text-xl opacity-90 mb-8">
                Protecting your data is our top priority
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
              { id: 'data-collection', label: 'Data Collection', icon: Database },
              { id: 'data-usage', label: 'How We Use Data', icon: FileText },
              { id: 'sharing', label: 'Data Sharing', icon: Eye },
              { id: 'security', label: 'Security', icon: Lock },
              { id: 'rights', label: 'Your Rights', icon: Mail },
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
                  Our Privacy Commitment
                </h2>
                <p className="text-gray-600 mb-6">
                  We at <strong>Desireplay</strong> (website: <a href="https://desireplay.com" className="text-[#7C3AED] hover:underline">https://desireplay.com</a>) respect your privacy. This policy explains what personal information we collect, why, and how we use and protect it.
                </p>
              </div>

              {/* Data Collection */}
              <Card id="data-collection" className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <Database className="h-6 w-6 text-[#7C3AED]" />
                    1. Data We Collect
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We do not collect any personal user data. Our services are designed to respect your privacy completely.
                  </p>
                </CardContent>
              </Card>

              {/* Data Usage */}
              <Card id="data-usage" className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <FileText className="h-6 w-6 text-[#7C3AED]" />
                    2. How We Use Data
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Since we do not collect personal user data, we do not use any personal information for any purpose.
                  </p>
                </CardContent>
              </Card>

              {/* Data Sharing */}
              <Card id="sharing" className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <Eye className="h-6 w-6 text-[#7C3AED]" />
                    3. Data Sharing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Since we do not collect personal user data, we do not share any personal information with third parties.
                  </p>
                </CardContent>
              </Card>

              {/* Security */}
              <Card id="security" className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <Lock className="h-6 w-6 text-[#7C3AED]" />
                    4. Security
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Since we do not collect personal user data, there is no personal data to secure. Our website uses standard security measures to protect general website functionality.
                  </p>
                </CardContent>
              </Card>

              {/* Rights */}
              <Card id="rights" className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <Mail className="h-6 w-6 text-[#7C3AED]" />
                    5. Your Rights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Since we do not collect any personal user data, there is no personal data to access, correct, or delete.
                  </p>
                  <p className="text-gray-600">
                    For any other concerns or complaints, you may contact our Grievance Officer:
                  </p>
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <p className="font-semibold text-blue-900">Grievance Officer</p>
                    <p className="text-blue-800"><strong>Rahul Sharma</strong>, <strong>grievance@desireplay.com</strong></p>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Questions About Your Privacy?
                </h3>
                <p className="text-gray-600 mb-4">
                  We're here to help. Contact us for any privacy-related concerns.
                </p>
                <Button className="bg-[#7C3AED] hover:bg-[#6D28D9]">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact Privacy Team
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

export default PrivacyPolicy;