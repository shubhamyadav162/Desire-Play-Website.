import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, Star, Heart, Filter } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '@/components/product/ProductCard';
import GiftCard from '@/components/product/GiftCard';

// Import all the assets
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
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', label: 'All Products' },
    { id: 'logo', label: 'Logos' },
    { id: 'card', label: 'Business Cards' },
    { id: 'gift', label: 'Gift Cards' }
  ];

  const portfolioItems = [
    {
      id: "1",
      title: "Creative Templates Design",
      category: "logo",
      price: 199,
      originalPrice: 299,
      image: asset1,
      rating: 4.9,
      reviews: 124,
      badge: "Bestseller",
      features: ["Premium Quality", "Unique Design", "All File Formats"]
    },
    {
      id: "2",
      title: "Bloom with Grace Logo",
      category: "logo",
      price: 199,
      originalPrice: 299,
      image: asset2,
      rating: 4.8,
      reviews: 98,
      badge: "Elegant",
      features: ["Floral Design", "Modern Style", "Customizable"]
    },
    {
      id: "3",
      title: "Butterfly Flying Logo",
      category: "logo",
      price: 199,
      originalPrice: 299,
      image: asset3,
      rating: 5.0,
      reviews: 156,
      badge: "Unique",
      features: ["Nature Inspired", "Professional", "Vector Format"]
    },
    {
      id: "4",
      title: "Afleurdepeau Design",
      category: "logo",
      price: 199,
      originalPrice: 299,
      image: asset4,
      rating: 4.7,
      reviews: 87,
      badge: "Modern",
      features: ["Contemporary", "Brand Identity", "Print Ready"]
    },
    {
      id: "5",
      title: "Tino Huelsbusch Logo",
      category: "logo",
      price: 199,
      originalPrice: 299,
      image: asset5,
      rating: 4.9,
      reviews: 112,
      badge: "Professional",
      features: ["Corporate", "Clean Design", "Multiple Formats"]
    },
    {
      id: "6",
      title: "Vedank Logo Design",
      category: "logo",
      price: 199,
      originalPrice: 299,
      image: asset6,
      rating: 4.8,
      reviews: 143,
      badge: "Creative",
      features: ["Brand Identity", "Logo Design", "Stationery"]
    },
    {
      id: "7",
      title: "Perfect Brand Logo",
      category: "logo",
      price: 199,
      originalPrice: 299,
      image: asset7,
      rating: 4.9,
      reviews: 167,
      badge: "Bestseller",
      features: ["Brand Design", "Custom Logo", "Business"]
    },
    {
      id: "8",
      title: "Modern Design Card",
      category: "card",
      price: 199,
      originalPrice: 299,
      image: asset8,
      rating: 5.0,
      reviews: 189,
      badge: "Premium",
      features: ["Business Card", "Premium Quality", "Fast Delivery"]
    },
    {
      id: "9",
      title: "Creative Card Design",
      category: "card",
      price: 199,
      originalPrice: 299,
      image: asset9,
      rating: 4.7,
      reviews: 134,
      badge: "Popular",
      features: ["Visiting Card", "Modern Style", "Professional"]
    },
    {
      id: "10",
      title: "Digital Design",
      category: "logo",
      price: 199,
      originalPrice: 299,
      image: asset10,
      rating: 4.8,
      reviews: 145,
      features: ["Modern Logo", "Tech Style", "Vector"]
    },
    {
      id: "11",
      title: "Professional Card",
      category: "card",
      price: 199,
      originalPrice: 299,
      image: asset11,
      rating: 4.9,
      reviews: 178,
      badge: "Classic",
      features: ["Business Card", "Elegant", "Print Ready"]
    },
    {
      id: "12",
      title: "Creative Artwork",
      category: "logo",
      price: 199,
      originalPrice: 299,
      image: asset12,
      rating: 4.9,
      reviews: 201,
      badge: "Artistic",
      features: ["Creative", "Unique", "Customizable"]
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 border-[#7C3AED] text-[#7C3AED]" variant="outline">
            Our Products
          </Badge>
          <h2 className="font-heading font-bold text-3xl lg:text-5xl text-[#1A202C] mb-6">
            Premium Design Solutions
            <span className="text-[#7C3AED] block">For Your Business</span>
          </h2>
          <p className="text-lg text-[#718096] max-w-3xl mx-auto">
            Explore our curated collection of professional design products created for businesses across India.
            Each product is crafted to elevate your brand presence.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className={`rounded-full px-6 py-2 ${
                activeFilter === filter.id 
                  ? "bg-[#7C3AED] hover:bg-[#6D28D9] text-white" 
                  : "border-[#7C3AED] text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white"
              }`}
            >
              <Filter className="mr-2 h-4 w-4" />
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            item.category === 'gift' ? (
              <GiftCard
                key={item.id}
                giftCard={item}
                index={index}
              />
            ) : (
              <ProductCard
                key={item.id}
                product={item}
                index={index}
              />
            )
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            asChild
            className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white"
          >
            <Link to="/shop">
              View All Products
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;