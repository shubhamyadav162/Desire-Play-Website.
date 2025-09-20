import NewHeader from '@/components/layout/NewHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Award, 
  Globe, 
  Heart,
  Target,
  Zap,
  Shield,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const stats = [
    { icon: Users, label: 'Happy Clients', value: '2,000+' },
    { icon: Award, label: 'Designs Created', value: '25,000+' },
    { icon: Globe, label: 'Cities Served', value: '500+' },
    { icon: Heart, label: 'Customer Rating', value: '4.9/5' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Quality First',
      description: 'We never compromise on quality. Every design is crafted with attention to detail and professional standards.'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick turnaround times without sacrificing quality. Most designs delivered within 24-48 hours.'
    },
    {
      icon: Shield,
      title: 'Trusted Service',
      description: 'Secure payments and dedicated customer support in Hindi & English.'
    },
    {
      icon: TrendingUp,
      title: 'Growth Partner',
      description: 'We help businesses grow with professional branding that makes a lasting impression on customers.'
    }
  ];

  const team = [
    {
      name: 'Arjun Sharma',
      role: 'Founder & Creative Director',
      experience: '8+ years',
      expertise: 'Brand Strategy & Logo Design'
    },
    {
      name: 'Priya Patel',
      role: 'Lead Designer',
      experience: '6+ years',
      expertise: 'Visual Identity & Print Design'
    },
    {
      name: 'Rahul Kumar',
      role: 'Customer Success',
      experience: '4+ years',
      expertise: 'Client Relations & Support'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NewHeader />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-background via-muted/30 to-accent/5">
          <div className="container mx-auto px-4 text-center">
            <Badge className="mb-4" variant="outline">
              About Desireplay
            </Badge>
            <h1 className="font-heading font-bold text-4xl lg:text-6xl text-foreground mb-6">
              Empowering Indian Businesses
              <span className="text-transparent bg-gradient-hero bg-clip-text block">
                One Design at a Time
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Since 2020, we've been helping entrepreneurs and businesses across India create 
              professional brand identities that make a lasting impression. From startups to 
              established enterprises, we're your trusted design partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/shop">
                  Start Your Project
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/portfolio">
                  View Our Work
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-primary-foreground/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4" variant="outline">
                  Our Story
                </Badge>
                <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-6">
                  Born from a Simple Belief
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Every business, no matter how small, deserves a professional brand identity. 
                    When we started Desireplay in 2020, we noticed that quality design services 
                    were either too expensive or too generic for Indian businesses.
                  </p>
                  <p>
                    We set out to change that. By combining cutting-edge design tools with 
                    deep understanding of the Indian market, we've made professional branding 
                    accessible to everyone - from street food vendors to tech startups.
                  </p>
                  <p>
                    Today, we're proud to have helped over 2,000 businesses create their
                    unique brand identity. Each design tells a story, and we're honored to
                    be part of yours.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="text-2xl font-bold text-accent mb-2">2020</div>
                      <div className="text-sm text-muted-foreground">Founded</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="text-2xl font-bold text-accent mb-2">10K+</div>
                      <div className="text-sm text-muted-foreground">Clients</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="text-2xl font-bold text-accent mb-2">500+</div>
                      <div className="text-sm text-muted-foreground">Cities</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="text-2xl font-bold text-accent mb-2">24hrs</div>
                      <div className="text-sm text-muted-foreground">Delivery</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4" variant="outline">
                Our Values
              </Badge>
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
                What Drives Us Every Day
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These core values guide everything we do, from the designs we create 
                to the relationships we build with our clients.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-hover transition-all duration-normal">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4" variant="outline">
                Meet the Team
              </Badge>
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
                The People Behind Your Success
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our passionate team of designers, strategists, and customer success 
                specialists are dedicated to bringing your vision to life.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-hover transition-all duration-normal">
                  <CardContent className="p-6">
                    <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-accent font-medium mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground mb-2">{member.experience}</p>
                    <Badge variant="outline" className="text-xs">
                      {member.expertise}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">
              Ready to Build Your Brand?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of successful businesses who trust Desireplay for their 
              branding needs. Let's create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Get Started Today
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
                Talk to Our Team
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;