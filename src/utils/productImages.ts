// Import only the essential images to avoid import issues
import visitingCardMockup from '@/assets/visiting-card-mockup.jpg';
import logoShowcase from '@/assets/logo-showcase.jpg';
import heroBanner from '@/assets/hero-banner.jpg';

// Import only files with clean names that won't cause import issues
import asset3 from '@/assets/Butterfly Flying Logo.jpg';
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
import asset23 from '@/assets/Firefly.jpg';
import asset25 from '@/assets/HELALA ~ Elegant Feminine Moon Logo.jpg';
import asset27 from '@/assets/Logotipo loja de romas.jpg';
import asset34 from '@/assets/Peacock.jpg';
import asset37 from '@/assets/Submarca para loja de aromas.jpg';

// Map product IDs to their correct image imports
export const productImageMap: Record<string, string> = {
  '1': asset9,        // Creative Templates Design
  '2': visitingCardMockup,  // Business Visiting Cards
  '3': asset3,        // Butterfly Flying Logo
  '4': logoShowcase,  // Afleurdepeau Design
  '5': asset10,       // Tino Huelsbusch Logo
  '6': asset11,       // Vedank Logo Design
  '7': asset12,       // Unique Logo Maker
  '8': asset13,       // Perfect Brand Logo
  '9': asset14,       // Modern Design Card
  '10': asset15,      // Creative Card Design
  '11': asset16,      // Professional Card
  '12': asset17,      // Digital Design
  '13': asset18,      // Creative Artwork
  '14': logoShowcase, // Premium Design
  '15': asset25,      // Elegant Logo
  '16': heroBanner,   // Modern Branding
  '17': asset27,      // Professional Design
  '18': asset34,      // Vector Design
  '19': asset37,      // Free Vector Design
  '20': logoShowcase, // Jewelry Logo
  '21': heroBanner,   // Floral Logo
  '22': asset23,      // Lotus Mandala
  '23': logoShowcase, // Firefly Design
  '24': heroBanner,   // Flower Boutique
  '25': asset25,      // Feminine Moon
  '26': visitingCardMockup,  // Minimalist Logo
  '27': asset27,      // Romas Logo
  '28': heroBanner,   // Clinic Design
  '29': asset3,       // Lotus Yoga Logo
  '30': asset25,      // Boho Logo
  '31': logoShowcase, // Luxury Crown
  '32': heroBanner,   // Moon Universe
  '33': heroBanner,   // Moon Life Coach
  '34': asset34,      // Peacock Design
  '35': heroBanner,   // Wedding Planner
  '36': logoShowcase, // Beauty Clinic
  '37': asset37,      // Aromas Brand
};

// Fallback placeholder image
export const placeholderImage = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiByeD0iMTAiIGZpbGw9IiNGNEY0RjQiLz4KPHBhdGggZD0iTTM1IDMwSDQ1VjUwIiBzdHJva2U9IiM5Q0EzQUYiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik0zMCA0MEw1MCA2MCIgc3Ryb2tlPSIjOUNBM0FGIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K';

// Function to get the correct image for a product
export function getProductImage(productId: string, currentImage?: string): string {
  // First try to get the image from the map
  if (productImageMap[productId]) {
    return productImageMap[productId];
  }

  // If we have a current image and it's a valid path, use it
  if (currentImage && (currentImage.startsWith('data:') || currentImage.startsWith('http'))) {
    return currentImage;
  }

  // Try to extract filename from current image and find it in assets
  if (currentImage && !currentImage.startsWith('data:') && !currentImage.startsWith('http')) {
    // If the current image is just a filename without path, try to match it
    const filename = currentImage.split('/').pop()?.toLowerCase();
    if (filename) {
      // Look for any asset that contains this filename
      const matchingAsset = Object.values(productImageMap).find(asset =>
        asset.toLowerCase().includes(filename)
      );
      if (matchingAsset) {
        return matchingAsset;
      }
    }
  }

  // Fallback to placeholder
  return placeholderImage;
}