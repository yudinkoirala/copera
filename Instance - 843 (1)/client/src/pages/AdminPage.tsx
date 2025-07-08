import * as React from 'react';
import { Navigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Package, Newspaper, Users, TrendingUp, LogOut, Shield } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useAdmin } from '@/contexts/AdminContext';
import ProductManagement from '@/components/admin/ProductManagement';
import NewsManagement from '@/components/admin/NewsManagement';

function AdminPage() {
  const { user, logout } = useAuth();
  const { products, newsArticles } = useAdmin();

  if (!user || user.email !== 'yudin@gmail.com') {
    return <Navigate to="/admin/login" replace />;
  }

  const stats = [
    {
      title: 'Total Products',
      value: products.length,
      icon: Package,
      color: 'text-blue-600'
    },
    {
      title: 'News Articles',
      value: newsArticles.length,
      icon: Newspaper,
      color: 'text-green-600'
    },
    {
      title: 'In Stock Products',
      value: products.filter(p => p.inStock).length,
      icon: TrendingUp,
      color: 'text-orange-600'
    },
    {
      title: 'Featured Products',
      value: products.filter(p => p.featured).length,
      icon: Users,
      color: 'text-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/40 bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
              <Shield className="h-4 w-4 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Cropora Admin</h1>
              <p className="text-sm text-muted-foreground">Dashboard</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm font-medium">{user.name}</p>
              <p className="text-xs text-muted-foreground">{user.email}</p>
            </div>
            <Button variant="outline" size="sm" onClick={logout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <h2 className="text-3xl font-bold">Welcome back, {user.name}!</h2>
            <Badge className="bg-green-600">Admin</Badge>
          </div>
          <p className="text-muted-foreground">
            Manage your agricultural platform from this dashboard
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="products" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="products" className="flex items-center space-x-2">
              <Package className="h-4 w-4" />
              <span>Products</span>
            </TabsTrigger>
            <TabsTrigger value="news" className="flex items-center space-x-2">
              <Newspaper className="h-4 w-4" />
              <span>News</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="products" className="mt-6">
            <ProductManagement />
          </TabsContent>
          
          <TabsContent value="news" className="mt-6">
            <NewsManagement />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

export default AdminPage;
