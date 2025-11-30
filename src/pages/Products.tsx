import { useMemo, useState } from "react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { galleryCategories } from "@/data/galleryData";

// ============================================
// PRODUCTS PAGE COMPONENT
// ============================================
const Products = () => {
  const productCategories = useMemo(
    () =>
      galleryCategories.filter(
        (category) => category.key !== "gallery" && category.images.length > 0
      ),
    []
  );

  const [activeCategoryKey, setActiveCategoryKey] = useState<string | undefined>(
    productCategories[0]?.key
  );

  const features = [
    {
      title: "Lightweight & Durable",
      description:
        "Our FRP planters are incredibly lightweight yet extremely durable, making them easy to move and long-lasting.",
    },
    {
      title: "Weather Resistant",
      description:
        "Designed to withstand all weather conditions, from intense sun to heavy rain, without fading or deteriorating.",
    },
    {
      title: "Customizable Designs",
      description: "Available in various sizes, shapes, and colors to match your specific aesthetic requirements.",
    },
    {
      title: "Low Maintenance",
      description: "Require minimal upkeep and are easy to clean, saving you time and effort.",
    },
    {
      title: "Eco-Friendly",
      description: "Made with environmentally conscious materials and processes.",
    },
    {
      title: "Cost-Effective",
      description: "Long lifespan and durability make our planters a smart investment for any space.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary">Products</h1>

        {/* Products Section */}
        <section className="mb-20">
          {productCategories.length > 0 && (
            <>
              <div className="sticky top-[120px] z-30 bg-background py-4 flex flex-wrap gap-3 justify-center mb-10 border-b border-border shadow-sm">
                {productCategories.map((category) => (
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

              {productCategories
                .filter((category) => category.key === activeCategoryKey)
                .map((category) => (
                  <div key={category.key} className="space-y-8">
                    <div className="text-center">
                      <p className="text-xl font-serif font-bold text-primary">{category.label}</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.images.map((image, index) => (
                        <Card
                          key={`${category.key}-${image.src}`}
                          className="overflow-hidden border-2 border-border/60 flex flex-col h-full"
                        >
                          <div className="w-full h-96 bg-muted flex items-center justify-center p-0">
                            <img
                              src={image.src}
                              alt={`${category.label} ${index + 1}`}
                              className="w-full h-full object-cover"
                              loading="lazy"
                              style={{ objectFit: 'cover' }}
                            />
                          </div>
                          <CardContent className="mt-auto p-4 flex-shrink-0">
                            <Button asChild className="w-full">
                              <a href="https://wa.me/918088281908" target="_blank" rel="noreferrer">
                                Interested? Contact us
                              </a>
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
            </>
          )}
        </section>

        {/* FRP Features Section */}
        <section className="py-16 border-t border-border">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">FRP Planters</h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              Fiber Reinforced Plastic (FRP) planters represent the perfect blend of modern technology and timeless
              design. Discover why our FRP planters are the ideal choice for any application.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="border-2 hover:border-accent transition-colors">
                <CardHeader>
                  <CardTitle className="text-primary">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
