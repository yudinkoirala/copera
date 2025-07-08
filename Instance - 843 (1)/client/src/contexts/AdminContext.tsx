import * as React from 'react';

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  inStock: boolean;
  stockCount: number;
  rating: number;
  reviews: number;
  discount?: number;
  featured: boolean;
  description: string;
  features: string[];
  specifications: Record<string, string>;
}

export interface NewsArticle {
  id: string;
  title: string;
  description: string;
  content: string;
  category: string;
  source: string;
  author: string;
  publishedAt: string;
  imageUrl: string;
  region: 'Nepal' | 'International';
  readTime: string;
  trending?: boolean;
}

interface AdminContextType {
  products: Product[];
  newsArticles: NewsArticle[];
  addProduct: (product: Omit<Product, 'id'>) => void;
  updateProduct: (id: string, product: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  addNewsArticle: (article: Omit<NewsArticle, 'id'>) => void;
  updateNewsArticle: (id: string, article: Partial<NewsArticle>) => void;
  deleteNewsArticle: (id: string) => void;
  uploadImage: (file: File) => Promise<string>;
}

const AdminContext = React.createContext<AdminContextType | undefined>(undefined);

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = React.useState<Product[]>([
    {
      id: '1',
      name: 'Premium Wheat Seeds - High Yield Variety',
      price: 25.99,
      originalPrice: 29.99,
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400',
      category: 'Seeds',
      inStock: true,
      stockCount: 156,
      rating: 4.8,
      reviews: 124,
      discount: 13,
      featured: true,
      description: 'High-quality premium wheat seeds engineered for maximum yield and disease resistance.',
      features: ['High germination rate (95%+)', 'Disease resistant variety', 'Suitable for various soil types'],
      specifications: { 'Variety': 'Premium Hybrid', 'Germination Rate': '95%+' }
    },
    {
      id: '2',
      name: 'Organic NPK Fertilizer 10-10-10',
      price: 19.99,
      originalPrice: 24.99,
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400',
      category: 'Fertilizers',
      inStock: true,
      stockCount: 89,
      rating: 4.6,
      reviews: 89,
      discount: 20,
      featured: false,
      description: 'Balanced organic fertilizer perfect for all crop types.',
      features: ['100% organic', 'Slow release formula', 'Improves soil health'],
      specifications: { 'NPK Ratio': '10-10-10', 'Coverage': '1000 sq ft' }
    }
  ]);

  const [newsArticles, setNewsArticles] = React.useState<NewsArticle[]>([
    {
      id: '1',
      title: 'Nepal Introduces New Organic Farming Incentive Program for 2025',
      description: 'Government announces Rs 2 billion fund to support organic farmers transition.',
      content: 'The Ministry of Agriculture and Livestock Development has unveiled a comprehensive organic farming incentive program...',
      category: 'Policy',
      source: 'Kantipur Daily',
      author: 'Rajesh Khanal',
      publishedAt: '2024-12-20T08:30:00Z',
      imageUrl: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600',
      region: 'Nepal',
      readTime: '4 min read',
      trending: true
    },
    {
      id: '2',
      title: 'AI-Powered Precision Agriculture Gains Momentum Globally',
      description: 'Farmers worldwide are adopting artificial intelligence and IoT sensors to optimize crop yields.',
      content: 'The global adoption of precision agriculture technologies has accelerated dramatically...',
      category: 'Technology',
      source: 'AgriTech Today',
      author: 'Dr. Michael Johnson',
      publishedAt: '2024-12-18T10:00:00Z',
      imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600',
      region: 'International',
      readTime: '6 min read',
      trending: true
    }
  ]);

  const addProduct = (product: Omit<Product, 'id'>) => {
    const newProduct = {
      ...product,
      id: Date.now().toString()
    };
    setProducts(prev => [...prev, newProduct]);
  };

  const updateProduct = (id: string, updates: Partial<Product>) => {
    setProducts(prev => prev.map(product => 
      product.id === id ? { ...product, ...updates } : product
    ));
  };

  const deleteProduct = (id: string) => {
    setProducts(prev => prev.filter(product => product.id !== id));
  };

  const addNewsArticle = (article: Omit<NewsArticle, 'id'>) => {
    const newArticle = {
      ...article,
      id: Date.now().toString()
    };
    setNewsArticles(prev => [newArticle, ...prev]);
  };

  const updateNewsArticle = (id: string, updates: Partial<NewsArticle>) => {
    setNewsArticles(prev => prev.map(article => 
      article.id === id ? { ...article, ...updates } : article
    ));
  };

  const deleteNewsArticle = (id: string) => {
    setNewsArticles(prev => prev.filter(article => article.id !== id));
  };

  const uploadImage = async (file: File): Promise<string> => {
    // Simulate image upload - in real app, this would upload to a server
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result as string);
      };
      reader.readAsDataURL(file);
    });
  };

  const value = {
    products,
    newsArticles,
    addProduct,
    updateProduct,
    deleteProduct,
    addNewsArticle,
    updateNewsArticle,
    deleteNewsArticle,
    uploadImage
  };

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = React.useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
}
