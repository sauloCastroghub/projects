import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  images: string[];
  title: string;
}

export function ProductGallery({ images, title }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex flex-col lg:flex-row gap-4">
      {/* Thumbnail list */}
      <div className="order-2 lg:order-1 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={cn(
              "flex-shrink-0 w-16 h-16 lg:border-2 rounded-lg overflow-hidden transition-colors",
              selectedImage === index 
                ? "border-primary" 
                : "border-border hover:border-muted-foreground"
            )}
          >
            <img
              src={image}
              alt={`${title} - Imagem ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="order-1 lg:order-2 flex-1">
        <div className="aspect-square max-w-md mx-auto lg:mx-0 border border-border rounded-lg overflow-hidden bg-white">
          <img
            src={images[selectedImage]}
            alt={`${title} - Imagem principal`}
            className="w-full h-full object-contain p-4"
          />
        </div>
      </div>
    </div>
  );
}