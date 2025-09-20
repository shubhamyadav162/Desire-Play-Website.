import { useState, useMemo } from 'react';
import NewHeader from '@/components/layout/NewHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Filter,
  Search,
  Heart,
  Eye,
  Star,
  Award,
  TrendingUp
} from 'lucide-react';
// Import all 37 unique assets
import asset1 from '@/assets/100+ Editable Templates _ KDP 2026 Graphic by Interior Creative · Creative Fabrica.jpg';
import asset2 from '@/assets/bloom with grace 💐.jpg';
import asset3 from '@/assets/Butterfly Flying Logo.jpg';
import asset4 from '@/assets/Check out afleurdepeau11\'s new logo design from 99designs.jpg';
import asset5 from '@/assets/Check out tino_huelsbusch\'s new logo design from 99designs.jpg';
import asset6 from '@/assets/Check out vedank\'s new logo design from 99designs.jpg';
import asset7 from '@/assets/Create a Unique & Professional Logo Online with Our Easy Logo Maker_ KAQ05U.jpg';
import asset8 from '@/assets/Create Your Perfect Brand Logo Online_ Design, Generate & Customize Easily_ H5JNVX.jpg';
import asset9 from '@/assets/download (1).jpg';
import asset10 from '@/assets/download (10).jpg';
import asset11 from '@/assets/download (2).jpg';
import asset12 from '@/assets/download (3).jpg';
import asset13 from '@/assets/download (4).jpg';
import asset14 from '@/assets/download (5).jpg';
import asset15 from '@/assets/download (6).jpg';
import asset16 from '@/assets/download (7).jpg';
import asset17 from '@/assets/download (8).jpg';
import asset18 from '@/assets/download (9).jpg';
import asset19 from '@/assets/Download Free Vectors, Images, Photos & Videos _ Vecteezy.jpg';
import asset20 from '@/assets/Durai Raj_ Sushe\'s Jewel Legacy.jpg';
import asset21 from '@/assets/Elegant Hand-Drawn Flower Logo – Neutral Aesthetic.jpg';
import asset22 from '@/assets/Elegant Turquoise Floral Lotus Flower Mandala Classic Round Sticker _ Zazzle.jpg';
import asset23 from '@/assets/Firefly.jpg';
import asset24 from '@/assets/Flower Boutique Logo - Nasiba Abdullayeva.jpg';
import asset25 from '@/assets/HELALA ~ Elegant Feminine Moon Logo.jpg';
import asset26 from '@/assets/Lisavideointro_ I will do 3 modern minimalist logo design for your business for $45 on fiverr_com.jpg';
import asset27 from '@/assets/Logotipo loja de romas.jpg';
import asset28 from '@/assets/logotipo para clínica de estética.jpg';
import asset29 from '@/assets/Lotus Logo Design, Branding Kit, Monogram, Beauty Logo, Business Logo, Esthetician Logo, Yoga Logo, Mandala Logo, Spa Logo, Wellness Logo - Etsy.jpg';
import asset30 from '@/assets/Lotus Logo, Yoga Logo, Mandala Logo, Bohemian Logo, Wellness Logo, Spiritual Logo, Boho Logo_ Etsy.jpg';
import asset31 from '@/assets/Luxury Flower Crown Logotype by Boriman05 _ Creative Market.jpg';
import asset32 from '@/assets/Moon and Lotus Flower Logo _ Universe Logo _ Yoga Logo_ Moon Logo _ Boho Logo _ Mystic Logo _ Etsy.jpg';
import asset33 from '@/assets/Moon Logo, Life Coach logo, Luna Logo, Counseling logo, Spiritual Logo, Boho Moon Logo Design, Moon and Stars Logo, Luxury Logo.jpg';
import asset34 from '@/assets/Peacock.jpg';
import asset35 from '@/assets/Premade Wedding Planner Logo Design _ Modern Wedding Branding Kit _ Simple Floral Logo _ Elegant Feminine Logo _ Aesthetic Design Custom.jpg';
import asset36 from '@/assets/radiant pretty modern groovy feminine luxurious beauty clinic brand logo design.jpg';
import asset37 from '@/assets/Submarca para loja de aromas.jpg';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Work', count: 37 },
    { id: 'technology', name: 'Technology', count: 8 },
    { id: 'healthcare', name: 'Healthcare', count: 3 },
    { id: 'finance', name: 'Finance', count: 4 },
    { id: 'retail', name: 'Retail', count: 5 },
    { id: 'food', name: 'Food & Beverage', count: 2 },
    { id: 'education', name: 'Education', count: 3 },
    { id: 'real-estate', name: 'Real Estate', count: 2 },
    { id: 'wellness', name: 'Wellness', count: 6 },
    { id: 'luxury', name: 'Luxury', count: 4 },
  ];

  const portfolioItems = [
    {
      id: 1,
      title: 'Creative Templates Design',
      category: 'technology',
      image: asset1,
      type: 'Logo Design',
      views: 1250,
      likes: 89,
      featured: true,
      client: 'Creative Studio',
      year: '2024'
    },
    {
      id: 2,
      title: 'Bloom with Grace',
      category: 'retail',
      image: asset2,
      type: 'Logo Design',
      views: 980,
      likes: 67,
      featured: false,
      client: 'Flower Boutique',
      year: '2024'
    },
    {
      id: 3,
      title: 'Butterfly Flying Logo',
      category: 'technology',
      image: asset3,
      type: 'Logo Design',
      views: 2100,
      likes: 145,
      featured: true,
      client: 'Nature Brand',
      year: '2024'
    },
    {
      id: 4,
      title: 'Afleurdepeau Design',
      category: 'retail',
      image: asset4,
      type: 'Brand Identity',
      views: 1650,
      likes: 112,
      featured: false,
      client: 'Fashion Brand',
      year: '2023'
    },
    {
      id: 5,
      title: 'Tino Huelsbusch Logo',
      category: 'technology',
      image: asset5,
      type: 'Logo Design',
      views: 1420,
      likes: 94,
      featured: true,
      client: 'Tech Startup',
      year: '2024'
    },
    {
      id: 6,
      title: 'Vedank Logo Design',
      category: 'technology',
      image: asset6,
      type: 'Brand Identity',
      views: 890,
      likes: 156,
      featured: false,
      client: 'Design Agency',
      year: '2023'
    },
    {
      id: 7,
      title: 'Unique Logo Maker',
      category: 'technology',
      image: asset7,
      type: 'Logo Design',
      views: 1870,
      likes: 123,
      featured: true,
      client: 'SaaS Company',
      year: '2024'
    },
    {
      id: 8,
      title: 'Perfect Brand Logo',
      category: 'technology',
      image: asset8,
      type: 'Brand Identity',
      views: 1560,
      likes: 98,
      featured: false,
      client: 'Brand Agency',
      year: '2023'
    },
    {
      id: 9,
      title: 'Modern Design Card',
      category: 'retail',
      image: asset9,
      type: 'Business Card',
      views: 2340,
      likes: 167,
      featured: true,
      client: 'Design Studio',
      year: '2024'
    },
    {
      id: 10,
      title: 'Creative Card Design',
      category: 'retail',
      image: asset10,
      type: 'Business Card',
      views: 1980,
      likes: 134,
      featured: false,
      client: 'Creative Agency',
      year: '2024'
    },
    {
      id: 11,
      title: 'Professional Card',
      category: 'retail',
      image: asset11,
      type: 'Business Card',
      views: 1420,
      likes: 89,
      featured: true,
      client: 'Corporate Client',
      year: '2023'
    },
    {
      id: 12,
      title: 'Digital Design',
      category: 'technology',
      image: asset12,
      type: 'Logo Design',
      views: 1760,
      likes: 112,
      featured: false,
      client: 'Tech Company',
      year: '2024'
    },
    {
      id: 13,
      title: 'Creative Artwork',
      category: 'technology',
      image: asset13,
      type: 'Logo Design',
      views: 2130,
      likes: 145,
      featured: true,
      client: 'Art Studio',
      year: '2024'
    },
    {
      id: 14,
      title: 'Premium Design',
      category: 'luxury',
      image: asset14,
      type: 'Brand Identity',
      views: 1650,
      likes: 98,
      featured: false,
      client: 'Luxury Brand',
      year: '2023'
    },
    {
      id: 15,
      title: 'Elegant Logo',
      category: 'luxury',
      image: asset15,
      type: 'Logo Design',
      views: 1890,
      likes: 123,
      featured: true,
      client: 'Elegant Brand',
      year: '2024'
    },
    {
      id: 16,
      title: 'Modern Branding',
      category: 'technology',
      image: asset16,
      type: 'Brand Identity',
      views: 1250,
      likes: 89,
      featured: false,
      client: 'Modern Company',
      year: '2024'
    },
    {
      id: 17,
      title: 'Professional Design',
      category: 'technology',
      image: asset17,
      type: 'Logo Design',
      views: 980,
      likes: 67,
      featured: true,
      client: 'Corporate Client',
      year: '2023'
    },
    {
      id: 18,
      title: 'Vector Design',
      category: 'technology',
      image: asset18,
      type: 'Logo Design',
      views: 2100,
      likes: 145,
      featured: false,
      client: 'Design Agency',
      year: '2024'
    },
    {
      id: 19,
      title: 'Free Vector Design',
      category: 'technology',
      image: asset19,
      type: 'Logo Design',
      views: 1650,
      likes: 112,
      featured: true,
      client: 'Free Resources',
      year: '2024'
    },
    {
      id: 20,
      title: 'Jewelry Logo',
      category: 'luxury',
      image: asset20,
      type: 'Brand Identity',
      views: 1420,
      likes: 94,
      featured: false,
      client: 'Jewelry Brand',
      year: '2023'
    },
    {
      id: 21,
      title: 'Floral Logo',
      category: 'retail',
      image: asset21,
      type: 'Logo Design',
      views: 890,
      likes: 156,
      featured: true,
      client: 'Flower Shop',
      year: '2024'
    },
    {
      id: 22,
      title: 'Lotus Mandala',
      category: 'wellness',
      image: asset22,
      type: 'Logo Design',
      views: 1870,
      likes: 123,
      featured: false,
      client: 'Yoga Studio',
      year: '2024'
    },
    {
      id: 23,
      title: 'Firefly Design',
      category: 'wellness',
      image: asset23,
      type: 'Logo Design',
      views: 1560,
      likes: 98,
      featured: true,
      client: 'Nature Brand',
      year: '2023'
    },
    {
      id: 24,
      title: 'Flower Boutique',
      category: 'retail',
      image: asset24,
      type: 'Logo Design',
      views: 2340,
      likes: 167,
      featured: false,
      client: 'Boutique',
      year: '2024'
    },
    {
      id: 25,
      title: 'Feminine Moon',
      category: 'wellness',
      image: asset25,
      type: 'Logo Design',
      views: 1980,
      likes: 134,
      featured: true,
      client: 'Wellness Brand',
      year: '2024'
    },
    {
      id: 26,
      title: 'Minimalist Logo',
      category: 'technology',
      image: asset26,
      type: 'Logo Design',
      views: 1420,
      likes: 89,
      featured: false,
      client: 'Tech Startup',
      year: '2023'
    },
    {
      id: 27,
      title: 'Romas Logo',
      category: 'retail',
      image: asset27,
      type: 'Business Card',
      views: 1760,
      likes: 112,
      featured: true,
      client: 'Food Brand',
      year: '2024'
    },
    {
      id: 28,
      title: 'Clinic Design',
      category: 'healthcare',
      image: asset28,
      type: 'Logo Design',
      views: 2130,
      likes: 145,
      featured: false,
      client: 'Medical Clinic',
      year: '2024'
    },
    {
      id: 29,
      title: 'Lotus Yoga Logo',
      category: 'wellness',
      image: asset29,
      type: 'Logo Design',
      views: 1650,
      likes: 98,
      featured: true,
      client: 'Yoga Center',
      year: '2023'
    },
    {
      id: 30,
      title: 'Boho Logo',
      category: 'wellness',
      image: asset30,
      type: 'Logo Design',
      views: 1890,
      likes: 123,
      featured: false,
      client: 'Boho Brand',
      year: '2024'
    },
    {
      id: 31,
      title: 'Luxury Crown',
      category: 'luxury',
      image: asset31,
      type: 'Logo Design',
      views: 1250,
      likes: 89,
      featured: true,
      client: 'Luxury Brand',
      year: '2024'
    },
    {
      id: 32,
      title: 'Moon Universe',
      category: 'wellness',
      image: asset32,
      type: 'Logo Design',
      views: 980,
      likes: 67,
      featured: false,
      client: 'Spiritual Brand',
      year: '2023'
    },
    {
      id: 33,
      title: 'Moon Life Coach',
      category: 'wellness',
      image: asset33,
      type: 'Logo Design',
      views: 2100,
      likes: 145,
      featured: true,
      client: 'Life Coach',
      year: '2024'
    },
    {
      id: 34,
      title: 'Peacock Design',
      category: 'luxury',
      image: asset34,
      type: 'Logo Design',
      views: 1650,
      likes: 112,
      featured: false,
      client: 'Luxury Brand',
      year: '2024'
    },
    {
      id: 35,
      title: 'Wedding Planner',
      category: 'retail',
      image: asset35,
      type: 'Brand Identity',
      views: 1420,
      likes: 94,
      featured: true,
      client: 'Wedding Service',
      year: '2023'
    },
    {
      id: 36,
      title: 'Beauty Clinic',
      category: 'healthcare',
      image: asset36,
      type: 'Logo Design',
      views: 890,
      likes: 156,
      featured: false,
      client: 'Beauty Salon',
      year: '2024'
    },
    {
      id: 37,
      title: 'Aromas Brand',
      category: 'retail',
      image: asset37,
      type: 'Business Card',
      views: 1870,
      likes: 123,
      featured: true,
      client: 'Aroma Brand',
      year: '2024'
    }
  ];

  const filteredItems = portfolioItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.client.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <NewHeader />
      
      <main className="container mx-auto px-4 pt-24 pb-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4" variant="outline">
            <Award className="h-3 w-3 mr-1" />
            Our Best Work
          </Badge>
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-4">
            Portfolio Showcase
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore our extensive collection of award-winning logos, visiting cards, and brand identities
            created for businesses across India and beyond. Each project showcases our commitment to
            excellence, creativity, and brand transformation.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">250+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">120+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">4.9★</div>
              <div className="text-sm text-muted-foreground">Rating</div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by business name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          {/* Category Filter */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="whitespace-nowrap"
              >
                {category.name}
                <Badge variant="secondary" className="ml-2 text-xs">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => {
            return (
              <Card
                key={item.id}
                className="group hover:shadow-hover transition-all duration-normal animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover transition-transform duration-normal group-hover:scale-105"
                    />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-normal">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Eye className="h-4 w-4" />
                          <span className="text-sm">{item.views.toLocaleString()}</span>
                        </div>
                        <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3">
                    {item.featured && (
                      <Badge className="bg-accent text-accent-foreground">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                  </div>
                </div>
                
                <div className="p-4 space-y-3">
                  <div>
                    <Badge variant="outline" className="text-xs mb-2">
                      {item.type}
                    </Badge>
                    <h3 className="font-semibold text-foreground text-lg">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.client} • {item.year}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2 border-t">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        <span>{item.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="h-3 w-3" />
                        <span>{item.likes}</span>
                      </div>
                    </div>
                    <div className="flex">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="h-3 w-3 text-accent fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            );
          })}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Projects
          </Button>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-hero rounded-2xl p-8 text-center text-white">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4">
            Ready to Create Your Own?
          </h2>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Join thousands of satisfied businesses who've transformed their brand identity with our
            expert design solutions. From startups to established enterprises, we deliver
            professional designs that make lasting impressions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Start Your Logo
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
              View Pricing
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;