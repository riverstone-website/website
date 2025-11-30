import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { galleryCategories, type GalleryCategoryKey } from "@/data/galleryData";

const Gallery = () => {
  const categories = useMemo(
    () => galleryCategories.filter((category) => category.images.length > 0),
    []
  );

  const defaultKey =
    categories.find((category) => category.key === "gallery")?.key || categories[0]?.key;
  const [activeCategoryKey, setActiveCategoryKey] = useState<GalleryCategoryKey | undefined>(
    defaultKey
  );

  const activeCategory = categories.find((category) => category.key === activeCategoryKey);

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary">Gallery</h1>

        <div className="sticky top-[120px] z-30 bg-background py-4 flex flex-wrap gap-3 justify-center mb-10 border-b border-border shadow-sm">
          {categories.map((category) => (
            <button
              key={category.key}
              type="button"
              onClick={() => setActiveCategoryKey(category.key)}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors ${
                category.key === activeCategoryKey
                  ? "bg-primary text-white border-primary"
                  : "bg-background text-primary border-primary/30 hover:bg-primary/10"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {!activeCategory && (
          <p className="text-center text-muted-foreground">No gallery images are available right now.</p>
        )}

        {activeCategory && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {activeCategory.images.map((image) => (
                <div
                  key={image.src}
                  className="flex flex-col bg-secondary rounded-lg overflow-hidden border border-border/60 h-full"
                >
                  <div className="aspect-square bg-background relative overflow-hidden w-full">
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-full object-cover object-center" 
                      loading="lazy"
                      style={{ minHeight: '100%', minWidth: '100%' }}
                    />
                  </div>
                  <div className="p-4 flex-shrink-0">
                    <a
                      href="https://wa.me/918088281908"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-md bg-primary text-white text-sm font-semibold py-2 hover:bg-primary/90 transition-colors w-full"
                    >
                      Interested? Contact us
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;

