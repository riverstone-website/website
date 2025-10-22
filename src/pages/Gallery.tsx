import { useState, useEffect } from "react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Function to get all image files from the gallery directory
const getGalleryImages = () => {
  const imageFiles = [
    "WhatsApp Image 2025-10-21 at 11.09.55 PM (1).jpeg",
    "WhatsApp Image 2025-10-21 at 11.09.55 PM.jpeg",
    "WhatsApp Image 2025-10-21 at 11.09.56 PM (1).jpeg",
    "WhatsApp Image 2025-10-21 at 11.09.56 PM.jpeg",
    "WhatsApp Image 2025-10-21 at 11.09.57 PM (1).jpeg",
    "WhatsApp Image 2025-10-21 at 11.09.57 PM.jpeg",
    "WhatsApp Image 2025-10-21 at 11.09.58 PM (1).jpeg",
    "WhatsApp Image 2025-10-21 at 11.09.58 PM.jpeg",
    "WhatsApp Image 2025-10-21 at 11.09.59 PM (1).jpeg",
    "WhatsApp Image 2025-10-21 at 11.09.59 PM.jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.04 PM (1).jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.04 PM.jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.05 PM.jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.06 PM (1).jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.06 PM.jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.07 PM (1).jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.07 PM (2).jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.07 PM.jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.08 PM (1).jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.08 PM.jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.09 PM (1).jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.09 PM (2).jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.09 PM.jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.10 PM (1).jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.10 PM (2).jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.10 PM.jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.11 PM (1).jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.11 PM (2).jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.11 PM.jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.12 PM (1).jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.12 PM (2).jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.12 PM.jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.13 PM (1).jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.13 PM (2).jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.13 PM.jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.14 PM (1).jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.14 PM.jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.15 PM (1).jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.15 PM.jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.16 PM (1).jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.16 PM (2).jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.16 PM.jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.17 PM (1).jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.17 PM (2).jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.17 PM.jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.18 PM (1).jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.18 PM (2).jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.18 PM.jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.19 PM (1).jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.19 PM (2).jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.19 PM.jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.20 PM (1).jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.20 PM (2).jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.20 PM.jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.21 PM (1).jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.21 PM (2).jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.21 PM.jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.22 PM (1).jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.22 PM (2).jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.22 PM.jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.23 PM (1).jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.23 PM (2).jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.23 PM.jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.24 PM (1).jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.24 PM (2).jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.24 PM.jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.25 PM (1).jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.25 PM.jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.26 PM (1).jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.26 PM (2).jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.26 PM.jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.27 PM (1).jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.27 PM.jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.31 PM.jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.32 PM (1).jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.32 PM.jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.33 PM (1).jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.33 PM.jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.34 PM.jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.35 PM (1).jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.35 PM (2).jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.35 PM.jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.37 PM (1).jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.37 PM.jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.39 PM (1).jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.39 PM.jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.40 PM (1).jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.40 PM (2).jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.40 PM.jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.41 PM (1).jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.41 PM (2).jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.41 PM.jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.42 PM (1).jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.42 PM (2).jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.42 PM.jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.43 PM (1).jpeg",
    "WhatsApp Image 2025-10-21 at 11.10.43 PM.jpeg",
    "WhatsApp Image 2025-10-21 at 11.12.03 PM.jpeg",
    "WhatsApp Image 2025-10-21 at 11.12.04 PM (1).jpeg",
    "WhatsApp Image 2025-10-21 at 11.12.04 PM (2).jpeg",
    "WhatsApp Image 2025-10-21 at 11.12.04 PM.jpeg",
    "WhatsApp Image 2025-10-21 at 11.12.05 PM (1).jpeg",
    "WhatsApp Image 2025-10-21 at 11.12.05 PM (2).jpeg",
    "WhatsApp Image 2025-10-21 at 11.12.05 PM.jpeg",
    "WhatsApp Image 2025-10-21 at 11.12.06 PM (1).jpeg",
    "WhatsApp Image 2025-10-21 at 11.12.06 PM (2).jpeg",
    "WhatsApp Image 2025-10-21 at 11.12.06 PM.jpeg",
    "WhatsApp Image 2025-10-21 at 11.12.07 PM (1).jpeg",
    "WhatsApp Image 2025-10-21 at 11.12.07 PM.jpeg"
  ];
  
  return imageFiles.map((filename, index) => ({
    id: index + 1,
    src: `/images/gallery/${filename}`,
    alt: `Gallery Image ${index + 1}`,
    title: `Fiberglass Planter ${index + 1}`
  }));
};

const Gallery = () => {
  const [images, setImages] = useState<Array<{id: number, src: string, alt: string, title: string}>>([]);
  const [selectedImage, setSelectedImage] = useState<{id: number, src: string, alt: string, title: string} | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setImages(getGalleryImages());
  }, []);

  const openModal = (image: {id: number, src: string, alt: string, title: string}) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage) {
      const currentIndex = images.findIndex(img => img.id === selectedImage.id);
      const nextIndex = (currentIndex + 1) % images.length;
      setSelectedImage(images[nextIndex]);
    }
  };

  const prevImage = () => {
    if (selectedImage) {
      const currentIndex = images.findIndex(img => img.id === selectedImage.id);
      const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
      setSelectedImage(images[prevIndex]);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Gallery</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Explore our collection of beautiful fiberglass planters in various settings.
          </p>
          <p className="text-sm text-muted-foreground">
            Click on any image to view it in full size
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {images.map((image) => (
            <div 
              key={image.id}
              className="group relative aspect-square bg-secondary rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
              onClick={() => openModal(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white bg-opacity-90 rounded-full p-2">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for full-size image viewing */}
        {isModalOpen && selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-contain rounded-lg"
              />
              
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg">
                <p className="text-sm">{selectedImage.title}</p>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
