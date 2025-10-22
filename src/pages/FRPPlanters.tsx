// ============================================
// IMPORTS
// ============================================
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// ============================================
// IMAGES - ADD YOUR PRODUCT IMAGES HERE
// ============================================
// Step 1: Add your image files to src/assets folder
// Step 2: Uncomment the lines below and add your image names:
// import { heroPlanters, frpProduct1, frpProduct2, frpProduct3 } from '@/assets/images';

// For now using placeholder until you add your images
import { heroPlanters } from '@/assets/images';

// ============================================
// FRP PLANTERS PAGE COMPONENT
// ============================================
const FRPPlanters = () => {
  // ============================================
  // PRODUCT DATA - UPDATE WITH YOUR DETAILS
  // ============================================
  // After adding images to src/assets/images.ts, update the image property below
  const products = [
    {
      id: 1,
      title: "FRP 1",
      sku: "MIDFRP001",
      sizes: "1",
      dimensions: ['Height: XX"', 'Diameter: XX"'],
      colors: "Available in more than 2000 Colors",
      image: heroPlanters, // Change to: frpProduct1 after importing
    },
    {
      id: 2,
      title: "Product Name 2",
      sku: "MIDFRP002",
      sizes: "1",
      dimensions: ['Height: XX"', 'Diameter: XX"'],
      colors: "Available in more than 2000 Colors",
      image: "/placeholder.svg", // Change to: frpProduct2 after importing
    },
    {
      id: 3,
      title: "Product Name 3",
      sku: "MIDFRP003",
      sizes: "1",
      dimensions: ['Height: XX"', 'Diameter: XX"'],
      colors: "Available in more than 2000 Colors",
      image: "/placeholder.svg", // Change to: frpProduct3 after importing
    },
  ];

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
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-primary">FRP Planters</h1>

        {/* Products Section */}
        <section className="py-8 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary text-center">Our Products</h2>
          <div className="space-y-24">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center bg-primary/5 rounded-lg overflow-hidden`}
              >
                {/* Product Image */}
                <div className="w-full lg:w-1/2 bg-muted aspect-[4/3] flex items-center justify-center">
                  <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                </div>

                {/* Product Details */}
                <div className="w-full lg:w-1/2 p-8 lg:p-12 space-y-6">
                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary uppercase tracking-wide">
                    {product.title}
                  </h3>

                  <div className="space-y-3 text-foreground/80">
                    <p className="text-lg">
                      <span className="font-semibold text-primary">SKU:</span> {product.sku}
                    </p>
                    <p className="text-lg">
                      <span className="font-semibold text-primary">Available Sizes:</span> {product.sizes}
                    </p>

                    <div className="pt-2">
                      <p className="text-lg font-semibold text-primary mb-2">Dimensions:</p>
                      <ul className="space-y-2 pl-5">
                        {product.dimensions.map((dimension, idx) => (
                          <li key={idx} className="text-base list-disc">
                            {dimension}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className="text-base pt-2">
                      <span className="font-semibold text-accent">•</span> {product.colors}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
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

export default FRPPlanters;
