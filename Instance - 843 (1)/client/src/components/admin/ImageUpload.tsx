import * as React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload, X, Image as ImageIcon } from 'lucide-react';
import { useAdmin } from '@/contexts/AdminContext';

interface ImageUploadProps {
  value?: string;
  onChange: (url: string) => void;
  className?: string;
}

function ImageUpload({ value, onChange, className }: ImageUploadProps) {
  const [isDragging, setIsDragging] = React.useState(false);
  const [isUploading, setIsUploading] = React.useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const { uploadImage } = useAdmin();

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    const imageFile = files.find(file => file.type.startsWith('image/'));
    
    if (imageFile) {
      await handleFileUpload(imageFile);
    }
  };

  const handleFileUpload = async (file: File) => {
    setIsUploading(true);
    try {
      const url = await uploadImage(file);
      onChange(url);
    } catch (error) {
      console.error('Failed to upload image:', error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleRemove = () => {
    onChange('');
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={className}>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
      />
      
      {value ? (
        <Card className="relative overflow-hidden group hover:shadow-lg transition-shadow">
          <div className="aspect-video">
            <img
              src={value}
              alt="Uploaded"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="flex space-x-2">
              <Button
                variant="secondary"
                size="sm"
                onClick={handleClick}
                disabled={isUploading}
              >
                <Upload className="h-4 w-4 mr-1" />
                Change
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={handleRemove}
              >
                <X className="h-4 w-4 mr-1" />
                Remove
              </Button>
            </div>
          </div>
        </Card>
      ) : (
        <Card
          className={`border-2 border-dashed cursor-pointer transition-all duration-200 ${
            isDragging
              ? 'border-green-600 bg-green-50 dark:bg-green-950'
              : 'border-muted-foreground/25 hover:border-green-600 hover:bg-green-50/50 dark:hover:bg-green-950/50'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleClick}
        >
          <div className="p-8 text-center">
            <div className="flex flex-col items-center space-y-4">
              <div className={`p-4 rounded-full transition-colors ${
                isDragging ? 'bg-green-600 text-white' : 'bg-muted text-muted-foreground'
              }`}>
                {isUploading ? (
                  <div className="loading-spinner" />
                ) : (
                  <ImageIcon className="h-8 w-8" />
                )}
              </div>
              
              <div className="space-y-2">
                <p className="text-lg font-medium">
                  {isUploading ? 'Uploading...' : 'Drop image here or click to upload'}
                </p>
                <p className="text-sm text-muted-foreground">
                  Supports JPG, PNG, GIF up to 10MB
                </p>
              </div>
              
              {!isUploading && (
                <Button variant="outline" className="mt-4">
                  <Upload className="h-4 w-4 mr-2" />
                  Choose File
                </Button>
              )}
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}

export default ImageUpload;
