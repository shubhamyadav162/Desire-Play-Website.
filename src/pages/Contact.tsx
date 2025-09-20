import { useState } from 'react';
import NewHeader from '@/components/layout/NewHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
      subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Support',
      description: '24/7 email assistance',
      value: 'hello@desireplay.com',
      action: 'Send Email'
    },
    {
      icon: MapPin,
      title: 'Office Location',
      description: 'Visit our design studio',
      value: 'Mumbai, Maharashtra, India',
      action: 'Get Directions'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      description: 'Monday to Saturday',
      value: '9:00 AM - 7:00 PM IST',
      action: 'View Calendar'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a backend
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <NewHeader />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-background via-muted/30 to-accent/5">
          <div className="container mx-auto px-4 text-center">
            <Badge className="mb-4" variant="outline">
              Get in Touch
            </Badge>
            <h1 className="font-heading font-bold text-4xl lg:text-6xl text-foreground mb-6">
              We'd Love to
              <span className="text-transparent bg-gradient-hero bg-clip-text block">
                Help You Succeed
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions about our services? Need help with your project? 
              Our friendly team is here to assist you every step of the way.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="text-center hover:shadow-hover transition-all duration-normal">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mx-auto mb-4">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                      {info.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {info.description}
                    </p>
                    <p className="font-medium text-foreground mb-3">
                      {info.value}
                    </p>
                    <Button variant="outline" size="sm">
                      {info.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & FAQ */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <div className="mb-8">
                  <Badge className="mb-4" variant="outline">
                    <MessageSquare className="h-3 w-3 mr-1" />
                    Send Message
                  </Badge>
                  <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
                    Tell Us About Your Project
                  </h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours. 
                    The more details you provide, the better we can help you.
                  </p>
                </div>

                {isSubmitted ? (
                  <Card className="border-success bg-success/5">
                    <CardContent className="p-6 text-center">
                      <CheckCircle className="h-12 w-12 text-success mx-auto mb-4" />
                      <h3 className="font-semibold text-success text-lg mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-muted-foreground">
                        Thank you for reaching out. We'll get back to you within 24 hours.
                      </p>
                    </CardContent>
                  </Card>
                ) : (
                  <Card>
                    <CardContent className="p-6">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="name">Full Name *</Label>
                            <Input
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder="Enter your full name"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="email">Email Address *</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="your@email.com"
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-1 gap-4">
                          <div>
                            <Label htmlFor="subject">Subject *</Label>
                            <Input
                              id="subject"
                              name="subject"
                              value={formData.subject}
                              onChange={handleInputChange}
                              placeholder="What can we help you with?"
                              required
                            />
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="message">Message *</Label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Tell us more about your project, timeline, and any specific requirements..."
                            rows={5}
                            required
                          />
                        </div>
                        
                        <Button type="submit" variant="hero" size="lg" className="w-full">
                          <Send className="h-4 w-4" />
                          Send Message
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* FAQ */}
              <div>
                <div className="mb-8">
                  <Badge className="mb-4" variant="outline">
                    FAQ
                  </Badge>
                  <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-muted-foreground">
                    Quick answers to common questions about our services and process.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      q: "How long does it take to complete a logo design?",
                      a: "Most logo designs are completed within 24-48 hours. Complex projects may take 3-5 days depending on requirements."
                    },
                    {
                      q: "What file formats do you provide?",
                      a: "You'll receive PNG (high-res), SVG (vector), PDF (print-ready), and source files. All formats are included in our packages."
                    },
                    {
                      q: "Do you offer unlimited revisions?",
                      a: "Yes! Our premium packages include unlimited revisions until you're 100% satisfied with your design."
                    },
                    {
                      q: "What if I'm not satisfied with the design?",
                      a: "We provide unlimited revisions until you're completely satisfied with the final design."
                    }
                  ].map((faq, index) => (
                    <Card key={index} className="hover:shadow-sm transition-shadow">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-foreground mb-2">{faq.q}</h4>
                        <p className="text-muted-foreground text-sm">{faq.a}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-hero rounded-lg text-white text-center">
                  <h3 className="font-semibold text-lg mb-2">Still have questions?</h3>
                  <p className="opacity-90 mb-4">
                    Our support team is available Monday to Saturday, 9 AM to 7 PM IST.
                  </p>
                  <Button variant="secondary">
                    <Mail className="h-4 w-4" />
                    Email Support: hello@desireplay.com
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;