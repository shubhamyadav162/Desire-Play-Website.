import { useState } from 'react';
import NewHeader from '@/components/layout/NewHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ProductCard from '@/components/product/ProductCard';
import GiftCard from '@/components/product/GiftCard';
import {
  Filter,
  Grid,
  List,
  Heart,
  ShoppingCart,
  Star,
  IndianRupee
} from 'lucide-react';
import { Link } from 'react-router-dom';
// Import all individual assets
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

const Shop = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'logos', name: 'Logo Designs' },
    { id: 'cards', name: 'Visiting Cards' },
    { id: 'bundles', name: 'Design Bundles' },
    { id: 'gift-cards', name: 'Gift Cards' },
  ];

  const products = [
    {
      id: '1',
      title: 'Creative Templates Design',
      category: 'logos',
      price: 199,
      originalPrice: 299,
      rating: 4.9,
      reviews: 234,
      image: asset1,
      badge: 'Bestseller',
      features: ['Premium Quality', 'Unique Design', 'High Quality']
    },
    {
      id: '2',
      title: 'Bloom with Grace Logo',
      category: 'logos',
      price: 199,
      originalPrice: 299,
      rating: 4.8,
      reviews: 156,
      image: asset2,
      badge: 'Elegant',
      features: ['Floral Design', 'Modern Style', 'Professional']
    },
    {
      id: '3',
      title: 'Butterfly Flying Logo',
      category: 'logos',
      price: 199,
      originalPrice: 299,
      rating: 5.0,
      reviews: 89,
      image: asset3,
      badge: 'Unique',
      features: ['Nature Inspired', 'Professional', 'High Quality']
    },
    {
      id: '4',
      title: 'Afleurdepeau Design',
      category: 'logos',
      price: 199,
      originalPrice: 299,
      rating: 4.7,
      reviews: 178,
      image: asset4,
      badge: 'Modern',
      features: ['Contemporary', 'Professional', 'High Quality']
    },
    {
      id: '5',
      title: 'Tino Huelsbusch Logo',
      category: 'logos',
      price: 199,
      originalPrice: 299,
      rating: 4.9,
      reviews: 145,
      image: asset5,
      badge: 'Professional',
      features: ['Corporate', 'Clean Design', 'Multiple Formats']
    },
    {
      id: '6',
      title: 'Vedank Logo Design',
      category: 'logos',
      price: 199,
      originalPrice: 299,
      rating: 4.8,
      reviews: 167,
      image: asset6,
      badge: 'Creative',
      features: ['Brand Identity', 'Logo Design', 'Stationery']
    },
    {
      id: '7',
      title: 'Unique Logo Maker',
      category: 'logos',
      price: 199,
      originalPrice: 299,
      rating: 4.9,
      reviews: 234,
      image: asset7,
      badge: 'Bestseller',
      features: ['Easy to Use', 'Professional', 'All Formats']
    },
    {
      id: '8',
      title: 'Perfect Brand Logo',
      category: 'logos',
      price: 199,
      originalPrice: 299,
      rating: 4.7,
      reviews: 189,
      image: asset8,
      badge: 'Premium',
      features: ['Brand Design', 'Custom Logo', 'Business']
    },
    {
      id: '9',
      title: 'Modern Design Card',
      category: 'cards',
      price: 199,
      originalPrice: 299,
      rating: 4.8,
      reviews: 156,
      image: asset9,
      badge: 'Popular',
      features: ['Business Card', 'Premium Quality', 'Fast Delivery']
    },
    {
      id: '10',
      title: 'Creative Card Design',
      category: 'cards',
      price: 199,
      originalPrice: 299,
      rating: 4.9,
      reviews: 178,
      image: asset10,
      badge: 'Trending',
      features: ['Visiting Card', 'Modern Style', 'Professional']
    },
    {
      id: '11',
      title: 'Professional Card',
      category: 'cards',
      price: 199,
      originalPrice: 299,
      rating: 4.7,
      reviews: 145,
      image: asset11,
      badge: 'Classic',
      features: ['Business Card', 'Elegant', 'Print Ready']
    },
    {
      id: '12',
      title: 'Digital Design',
      category: 'logos',
      price: 199,
      originalPrice: 299,
      rating: 4.8,
      reviews: 167,
      image: asset12,
      badge: 'Digital',
      features: ['Modern Logo', 'Tech Style', 'Vector']
    },
    {
      id: '13',
      title: 'Creative Artwork',
      category: 'logos',
      price: 199,
      originalPrice: 299,
      rating: 4.9,
      reviews: 234,
      image: asset13,
      badge: 'Artistic',
      features: ['Creative', 'Unique', 'Customizable']
    },
    {
      id: '14',
      title: 'Premium Design',
      category: 'logos',
      price: 199,
      originalPrice: 299,
      rating: 4.7,
      reviews: 189,
      image: asset14,
      badge: 'Premium',
      features: ['High Quality', 'Professional', 'Brand Ready']
    },
    {
      id: '15',
      title: 'Elegant Logo',
      category: 'logos',
      price: 199,
      originalPrice: 299,
      rating: 4.8,
      reviews: 156,
      image: asset15,
      badge: 'Elegant',
      features: ['Sophisticated', 'Business', 'Clean Design']
    },
    {
      id: '16',
      title: 'Modern Branding',
      category: 'bundles',
      price: 199,
      originalPrice: 299,
      rating: 4.9,
      reviews: 178,
      image: asset16,
      badge: 'Complete Kit',
      features: ['Logo + Cards', 'Brand Guidelines', 'Social Media']
    },
    {
      id: '17',
      title: 'Professional Design',
      category: 'logos',
      price: 199,
      originalPrice: 299,
      rating: 4.7,
      reviews: 145,
      image: asset17,
      badge: 'Professional',
      features: ['Corporate', 'Clean', 'Brand Identity']
    },
    {
      id: '18',
      title: 'Vector Design',
      category: 'logos',
      price: 199,
      originalPrice: 299,
      rating: 4.8,
      reviews: 167,
      image: asset18,
      badge: 'Vector',
      features: ['Scalable', 'All Formats', 'Print Ready']
    },
    {
      id: '19',
      title: 'Free Vector Design',
      category: 'logos',
      price: 199,
      originalPrice: 299,
      rating: 4.9,
      reviews: 234,
      image: asset19,
      badge: 'Popular',
      features: ['Vector Art', 'Free Resources', 'Commercial Use']
    },
    {
      id: '20',
      title: 'Jewelry Logo',
      category: 'logos',
      price: 199,
      originalPrice: 299,
      rating: 4.8,
      reviews: 156,
      image: asset20,
      badge: 'Luxury',
      features: ['Jewelry Brand', 'Elegant', 'Premium Design']
    },
    {
      id: '21',
      title: 'Floral Logo',
      category: 'logos',
      price: 199,
      originalPrice: 299,
      rating: 4.9,
      reviews: 178,
      image: asset21,
      badge: 'Elegant',
      features: ['Floral Design', 'Hand Drawn', 'Natural']
    },
    {
      id: '22',
      title: 'Lotus Mandala',
      category: 'logos',
      price: 199,
      originalPrice: 299,
      rating: 4.7,
      reviews: 145,
      image: asset22,
      badge: 'Spiritual',
      features: ['Mandala', 'Lotus', 'Meditation']
    },
    {
      id: '23',
      title: 'Firefly Design',
      category: 'logos',
      price: 199,
      originalPrice: 299,
      rating: 4.8,
      reviews: 167,
      image: asset23,
      badge: 'Nature',
      features: ['Nature Inspired', 'Magical', 'Unique']
    },
    {
      id: '24',
      title: 'Flower Boutique',
      category: 'logos',
      price: 199,
      originalPrice: 299,
      rating: 4.9,
      reviews: 234,
      image: asset24,
      badge: 'Floral',
      features: ['Boutique', 'Flowers', 'Elegant']
    },
    {
      id: '25',
      title: 'Feminine Moon',
      category: 'logos',
      price: 199,
      originalPrice: 299,
      rating: 4.7,
      reviews: 189,
      image: asset25,
      badge: 'Feminine',
      features: ['Moon Design', 'Elegant', 'Mystical']
    },
    {
      id: '26',
      title: 'Minimalist Logo',
      category: 'logos',
      price: 199,
      originalPrice: 299,
      rating: 4.8,
      reviews: 156,
      image: asset26,
      badge: 'Minimal',
      features: ['Clean Design', 'Modern', 'Professional']
    },
    {
      id: '27',
      title: 'Romas Logo',
      category: 'cards',
      price: 199,
      originalPrice: 299,
      rating: 4.9,
      reviews: 178,
      image: asset27,
      badge: 'Brand',
      features: ['Business Card', 'Logo Design', 'Brand Identity']
    },
    {
      id: '28',
      title: 'Clinic Design',
      category: 'logos',
      price: 199,
      originalPrice: 299,
      rating: 4.7,
      reviews: 145,
      image: asset28,
      badge: 'Medical',
      features: ['Healthcare', 'Clinic', 'Professional']
    },
    {
      id: '29',
      title: 'Lotus Yoga Logo',
      category: 'logos',
      price: 199,
      originalPrice: 299,
      rating: 4.8,
      reviews: 167,
      image: asset29,
      badge: 'Wellness',
      features: ['Yoga', 'Lotus', 'Mandala', 'Spiritual']
    },
    {
      id: '30',
      title: 'Boho Logo',
      category: 'logos',
      price: 199,
      originalPrice: 299,
      rating: 4.9,
      reviews: 234,
      image: asset30,
      badge: 'Bohemian',
      features: ['Boho Style', 'Wellness', 'Spiritual']
    },
    {
      id: '31',
      title: 'Luxury Crown',
      category: 'logos',
      price: 199,
      originalPrice: 299,
      rating: 4.8,
      reviews: 156,
      image: asset31,
      badge: 'Luxury',
      features: ['Crown Design', 'Premium', 'Elegant']
    },
    {
      id: '32',
      title: 'Moon Universe',
      category: 'logos',
      price: 199,
      originalPrice: 299,
      rating: 4.7,
      reviews: 178,
      image: asset32,
      badge: 'Cosmic',
      features: ['Moon', 'Universe', 'Mystical', 'Yoga']
    },
    {
      id: '33',
      title: 'Moon Life Coach',
      category: 'logos',
      price: 199,
      originalPrice: 299,
      rating: 4.8,
      reviews: 145,
      image: asset33,
      badge: 'Coaching',
      features: ['Life Coach', 'Moon Design', 'Spiritual']
    },
    {
      id: '34',
      title: 'Peacock Design',
      category: 'logos',
      price: 199,
      originalPrice: 299,
      rating: 4.9,
      reviews: 167,
      image: asset34,
      badge: 'Elegant',
      features: ['Peacock', 'Luxury', 'Colorful']
    },
    {
      id: '35',
      title: 'Wedding Planner',
      category: 'bundles',
      price: 199,
      originalPrice: 299,
      rating: 4.7,
      reviews: 189,
      image: asset35,
      badge: 'Wedding',
      features: ['Wedding', 'Planner', 'Floral', 'Elegant']
    },
    {
      id: '36',
      title: 'Beauty Clinic',
      category: 'logos',
      price: 199,
      originalPrice: 299,
      rating: 4.8,
      reviews: 156,
      image: asset36,
      badge: 'Beauty',
      features: ['Beauty Clinic', 'Modern', 'Feminine']
    },
    {
      id: '37',
      title: 'Aromas Brand',
      category: 'cards',
      price: 199,
      originalPrice: 299,
      rating: 4.9,
      reviews: 178,
      image: asset37,
      badge: 'Brand',
      features: ['Aromas', 'Brand Identity', 'Card Design']
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <NewHeader />
      
      <main className="container mx-auto px-4 pt-24 pb-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-2">
            Design Store
          </h1>
          <p className="text-muted-foreground">
            Professional logos, visiting cards, and gift cards for your business success
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Categories */}
              <div>
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-accent text-accent-foreground'
                          : 'hover:bg-muted'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{category.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-semibold text-foreground mb-4">Price Range</h3>
                <div className="space-y-2">
                  {[
                    { label: 'Under ₹500' },
                    { label: '₹500 - ₹1500' },
                    { label: '₹1500 - ₹2500' },
                    { label: 'Above ₹2500' },
                  ].map((range, index) => (
                    <label key={index} className="flex items-center space-x-2 cursor-pointer hover:text-accent">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Toolbar */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-muted-foreground">
                Showing {filteredProducts.length} products
              </p>
              
              <div className="flex items-center gap-4">
                <select className="border border-input rounded-md px-3 py-2 text-sm">
                  <option>Sort by: Popular</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                </select>
                
                <div className="flex border border-input rounded-md">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products */}
            <div className={`grid gap-6 ${viewMode === 'grid' ? 'md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
              {filteredProducts.map((product, index) => (
                product.category === 'gift-cards' ? (
                  <GiftCard
                    key={product.id}
                    giftCard={product}
                    index={index}
                  />
                ) : (
                  <ProductCard
                    key={product.id}
                    product={product}
                    index={index}
                  />
                )
              ))}
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default Shop;