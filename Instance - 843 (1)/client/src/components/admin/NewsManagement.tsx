import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus, Edit, Trash2, Newspaper, TrendingUp, Globe, MapPin } from 'lucide-react';
import { useAdmin, type NewsArticle } from '@/contexts/AdminContext';
import ImageUpload from './ImageUpload';

function NewsManagement() {
  const { newsArticles, addNewsArticle, updateNewsArticle, deleteNewsArticle } = useAdmin();
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [editingArticle, setEditingArticle] = React.useState<NewsArticle | null>(null);
  const [formData, setFormData] = React.useState({
    title: '',
    description: '',
    content: '',
    category: '',
    source: '',
    author: '',
    imageUrl: '',
    region: 'Nepal' as 'Nepal' | 'International',
    readTime: '',
    trending: false
  });

  const categories = ['Policy', 'Technology', 'Production', 'Market', 'Research', 'Sustainability', 'Innovation'];

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      content: '',
      category: '',
      source: '',
      author: '',
      imageUrl: '',
      region: 'Nepal',
      readTime: '',
      trending: false
    });
    setEditingArticle(null);
  };

  const handleEdit = (article: NewsArticle) => {
    setEditingArticle(article);
    setFormData({
      title: article.title,
      description: article.description,
      content: article.content,
      category: article.category,
      source: article.source,
      author: article.author,
      imageUrl: article.imageUrl,
      region: article.region,
      readTime: article.readTime,
      trending: article.trending || false
    });
    setIsDialogOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const articleData = {
      ...formData,
      publishedAt: editingArticle?.publishedAt || new Date().toISOString()
    };

    if (editingArticle) {
      updateNewsArticle(editingArticle.id, articleData);
    } else {
      addNewsArticle(articleData);
    }

    setIsDialogOpen(false);
    resetForm();
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this article?')) {
      deleteNewsArticle(id);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">News Management</h2>
          <p className="text-muted-foreground">Manage agricultural news and articles</p>
        </div>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={resetForm}>
              <Plus className="h-4 w-4 mr-2" />
              Add Article
            </Button>
          </DialogTrigger>
          
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingArticle ? 'Edit Article' : 'Add New Article'}
              </DialogTitle>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Article Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select value={formData.category} onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(category => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  rows={3}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Article Image</Label>
                <ImageUpload
                  value={formData.imageUrl}
                  onChange={(url) => setFormData(prev => ({ ...prev, imageUrl: url }))}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Article Content</Label>
                <Textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                  rows={8}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="author">Author</Label>
                  <Input
                    id="author"
                    value={formData.author}
                    onChange={(e) => setFormData(prev => ({ ...prev, author: e.target.value }))}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="source">Source</Label>
                  <Input
                    id="source"
                    value={formData.source}
                    onChange={(e) => setFormData(prev => ({ ...prev, source: e.target.value }))}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="readTime">Read Time</Label>
                  <Input
                    id="readTime"
                    value={formData.readTime}
                    onChange={(e) => setFormData(prev => ({ ...prev, readTime: e.target.value }))}
                    placeholder="e.g., 4 min read"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="space-y-2">
                  <Label htmlFor="region">Region</Label>
                  <Select value={formData.region} onValueChange={(value: 'Nepal' | 'International') => setFormData(prev => ({ ...prev, region: value }))}>
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Nepal">Nepal</SelectItem>
                      <SelectItem value="International">International</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex items-center space-x-2 pt-6">
                  <Switch
                    id="trending"
                    checked={formData.trending}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, trending: checked }))}
                  />
                  <Label htmlFor="trending">Trending Article</Label>
                </div>
              </div>

              <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">
                  {editingArticle ? 'Update Article' : 'Publish Article'}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsArticles.map((article) => (
          <Card key={article.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="p-0">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-t-lg overflow-hidden relative">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2 flex gap-2">
                  {article.trending && (
                    <Badge className="bg-red-500">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      Trending
                    </Badge>
                  )}
                  <Badge variant="outline" className="bg-white/90">
                    {article.category}
                  </Badge>
                </div>
                <div className="absolute top-2 right-2">
                  <Badge variant={article.region === 'Nepal' ? 'default' : 'secondary'} className="bg-white/90">
                    {article.region === 'Nepal' ? (
                      <MapPin className="h-3 w-3 mr-1" />
                    ) : (
                      <Globe className="h-3 w-3 mr-1" />
                    )}
                    {article.region}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                {article.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-3 line-clamp-3">
                {article.description}
              </p>
              
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                <span>by {article.author}</span>
                <span>{formatDate(article.publishedAt)}</span>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-muted-foreground">{article.readTime}</span>
                <span className="text-sm text-muted-foreground">{article.source}</span>
              </div>
              
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  onClick={() => handleEdit(article)}
                >
                  <Edit className="h-4 w-4 mr-1" />
                  Edit
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDelete(article.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {newsArticles.length === 0 && (
        <Card className="p-12 text-center">
          <Newspaper className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">No articles yet</h3>
          <p className="text-muted-foreground">Add your first news article to get started</p>
        </Card>
      )}
    </div>
  );
}

export default NewsManagement;
