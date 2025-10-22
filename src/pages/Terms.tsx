import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary">Terms and Conditions</h1>
        
        <div className="prose max-w-4xl space-y-6 text-muted-foreground">
          <p className="text-lg">
            Welcome to Riverstone Garden Decor. By accessing and using our website, you agree 
            to comply with and be bound by the following terms and conditions.
          </p>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Use of Website</h2>
            <p>
              This website and its content are provided for informational purposes. You may not 
              use this website for any unlawful purpose or in any way that might damage the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Products and Services</h2>
            <p>
              All products and services are subject to availability. We reserve the right to 
              discontinue any product at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and images, is the 
              property of Riverstone Garden Decor and is protected by copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Contact Information</h2>
            <p>
              For any questions regarding these terms, please contact us at{" "}
              <a href="mailto:info@midartsbengaluru.com" className="text-accent hover:underline">
                info@midartsbengaluru.com
              </a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
