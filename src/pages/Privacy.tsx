import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary">Privacy Policy</h1>
        
        <div className="prose max-w-4xl space-y-6 text-muted-foreground">
          <p className="text-lg">
            At Riverstone Garden Decor, we are committed to protecting your privacy and ensuring 
            the security of your personal information.
          </p>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, including your name, email 
              address, phone number, and any other information you choose to provide.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services, 
              to communicate with you, and to fulfill your orders.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{" "}
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

export default Privacy;
