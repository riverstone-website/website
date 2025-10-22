import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary">Blog</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Discover tips, trends, and inspiration for using FRP (Fiberglass Reinforced Plastic) planters in your spaces.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article className="bg-secondary rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-muted"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-primary">Why Choose FRP Planters?</h3>
              <p className="text-muted-foreground mb-4">
                Explore the advantages of fiberglass planters - from their durability and lightweight design to their versatility in both indoor and outdoor settings.
              </p>
              <span className="text-sm text-accent">Read more →</span>
            </div>
          </article>

          <article className="bg-secondary rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-muted"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-primary">FRP Planter Care Guide</h3>
              <p className="text-muted-foreground mb-4">
                Learn how to maintain your fiberglass planters to keep them looking beautiful for years. Simple care tips for long-lasting results.
              </p>
              <span className="text-sm text-accent">Read more →</span>
            </div>
          </article>

          <article className="bg-secondary rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-muted"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-primary">Custom FRP Solutions</h3>
              <p className="text-muted-foreground mb-4">
                Discover how custom-made FRP planters can transform your landscaping projects with tailored designs, colors, and sizes.
              </p>
              <span className="text-sm text-accent">Read more →</span>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
