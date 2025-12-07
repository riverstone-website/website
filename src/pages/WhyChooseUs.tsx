import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const WhyChooseUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Why Choose Riverstone Garden Decor - 15+ Years of Excellence"
        description="Riverstone Garden Decor - Leading FRP planter manufacturer in India with 15+ years of experience. Premium quality, custom designs, and exceptional craftsmanship."
        keywords="Riverstone Garden Decor, about us, FRP planter manufacturer India, fiberglass planter company, custom planters, quality planters"
        canonicalUrl="https://www.riverstonegardendecor.com/why-choose-us"
      />
      <TopBar />
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-primary">Why Choose Us</h1>
          <p className="text-xl text-accent mb-12">Discover what makes Riverstone Garden Decor your trusted partner</p>

          <div className="space-y-12">
          {/* Introduction */}
          <section className="bg-card p-8 rounded-lg border border-border">
            <p className="text-lg text-foreground leading-relaxed">
              Riverstone Garden Decor is a leading manufacturer and exporter of premium-quality, affordable fiberglass planters and pots for both indoor and outdoor spaces. With over 15 years of excellence in design, craftsmanship, and innovation, we have become one of India's most trusted brands for durable and elegant planter solutions.
            </p>
          </section>

          {/* Our Story */}
          <section className="bg-muted/30 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-primary">Our Story</h2>
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p>
                Founded 15 years ago by <span className="font-semibold text-accent">Mr. Sourav Vinay</span>, Riverstone Garden Decor began with a simple vision — to transform everyday spaces into beautiful, green environments through thoughtfully designed, long-lasting fiberglass planters.
              </p>
              <p>
                From humble beginnings, we have grown into a recognized name across India, serving clients in the residential, commercial, and hospitality sectors.
              </p>
            </div>
          </section>

          {/* Our Expertise */}
          <section className="bg-card p-8 rounded-lg border border-border">
            <h2 className="text-3xl font-bold mb-6 text-primary">Our Expertise</h2>
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p>
                At Riverstone, we specialize in creating modern, stylish, and weather-resistant FRP (Fiberglass Reinforced Plastic) planters that enhance any setting — whether it's a home garden, hotel lobby, café patio, or corporate campus.
              </p>
              <p>
                Our dedicated design and production team uses only the finest industry-grade raw materials and advanced manufacturing processes to deliver products that meet the highest standards of quality, durability, and aesthetics.
              </p>
            </div>
          </section>

          {/* Why Choose Riverstone */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-primary text-center">Why Choose Riverstone?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-card p-6 rounded-lg border-l-4 border-accent">
                <div className="flex items-start gap-4">
                  <span className="text-accent text-2xl font-bold flex-shrink-0">✓</span>
                  <span className="text-foreground/90 leading-relaxed">15+ years of trusted experience in fiberglass planter manufacturing.</span>
                </div>
              </div>
              <div className="bg-card p-6 rounded-lg border-l-4 border-accent">
                <div className="flex items-start gap-4">
                  <span className="text-accent text-2xl font-bold flex-shrink-0">✓</span>
                  <span className="text-foreground/90 leading-relaxed">Customized designs, colors, and sizes to suit every project.</span>
                </div>
              </div>
              <div className="bg-card p-6 rounded-lg border-l-4 border-accent">
                <div className="flex items-start gap-4">
                  <span className="text-accent text-2xl font-bold flex-shrink-0">✓</span>
                  <span className="text-foreground/90 leading-relaxed">Lightweight, strong, and weatherproof – perfect for both indoor and outdoor use.</span>
                </div>
              </div>
              <div className="bg-card p-6 rounded-lg border-l-4 border-accent">
                <div className="flex items-start gap-4">
                  <span className="text-accent text-2xl font-bold flex-shrink-0">✓</span>
                  <span className="text-foreground/90 leading-relaxed">Crack-resistant, low-maintenance, and eco-friendly materials.</span>
                </div>
              </div>
              <div className="bg-card p-6 rounded-lg border-l-4 border-accent md:col-span-2">
                <div className="flex items-start gap-4">
                  <span className="text-accent text-2xl font-bold flex-shrink-0">✓</span>
                  <span className="text-foreground/90 leading-relaxed">Widely appreciated by architects, landscape designers, builders, and homeowners across India.</span>
                </div>
              </div>
            </div>
          </section>

          {/* Innovation & Design */}
          <section className="bg-card p-8 rounded-lg border border-border">
            <h2 className="text-3xl font-bold mb-6 text-primary">Innovation & Design</h2>
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p>
                Our in-house R&D team constantly works on new trends and designs to ensure our planters complement modern architecture and landscape aesthetics.
              </p>
              <p>
                We offer a wide range of FRP planters in various colors, shapes, textures, and finishes — from glossy to matte — all built to withstand sun, rain, and extreme weather conditions without losing their beauty.
              </p>
            </div>
          </section>

          {/* Custom Solutions */}
          <section className="bg-muted/30 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-primary">Custom Solutions</h2>
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p className="font-semibold text-accent text-lg">Can't find the design you're looking for?</p>
              <p>
                We specialize in custom-made fiberglass planters — tailor-made to match your exact size, color, and design preferences.
              </p>
              <p>
                Our design experts collaborate closely with architects, landscapers, and interior designers to bring creative ideas to life.
              </p>
            </div>
          </section>

          {/* Wholesale & Retail */}
          <section className="bg-card p-8 rounded-lg border border-border">
            <h2 className="text-3xl font-bold mb-6 text-primary">Wholesale & Retail</h2>
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p>
                Riverstone Garden Decor caters to both retail and bulk buyers.
              </p>
              <p>
                We supply directly to homeowners, as well as offer special wholesale pricing for retailers, landscapers, architects, and project developers.
              </p>
              <p>
                If you're looking to build a long-term business partnership, we'd love to collaborate and help your brand grow with our designer FRP planters.
              </p>
            </div>
          </section>

          {/* Our Products Are Loved In */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-primary text-center">Our Products Are Loved In</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Residential Homes & Villas",
                "Hotels, Resorts & Restaurants",
                "Office Complexes & Corporate Parks",
                "Public Parks, Urban Landscapes & Cafés",
                "Apartments, Showrooms & Retail Spaces"
              ].map((item, index) => (
                <div key={index} className="bg-card p-6 rounded-lg border-l-4 border-accent flex items-start gap-4">
                  <span className="text-accent text-2xl font-bold flex-shrink-0">✓</span>
                  <span className="text-foreground/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Our Promise */}
          <section className="bg-primary/5 p-8 rounded-lg border-2 border-accent/20">
            <h2 className="text-3xl font-bold mb-6 text-primary">Our Promise</h2>
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p>
                At Riverstone Garden Decor, we believe every plant deserves a beautiful home.
              </p>
              <p>
                Our mission is to combine aesthetic appeal, functionality, and sustainability in every product we create.
              </p>
              <p className="font-semibold text-primary text-lg">
                We're proud to continue growing — one planter at a time — by helping our customers bring nature closer to their living spaces.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-card p-8 rounded-lg border-2 border-primary/20">
            <h2 className="text-3xl font-bold mb-6 text-primary">Get In Touch</h2>
            <div className="space-y-6 text-foreground/90">
              <div className="bg-muted/30 p-6 rounded-lg">
                <p className="font-semibold text-primary mb-3 text-lg">📍 Address:</p>
                <p className="leading-relaxed">
                  169/6, Near HP Petrol Pump,<br />
                  Hennur Bagalur Main Road, Bidarahalli Hobli,<br />
                  Kannur Village, Bangalore – 560077
                </p>
              </div>
              <div className="bg-muted/30 p-6 rounded-lg">
                <p className="font-semibold text-primary mb-3 text-lg">📞 Contact:</p>
                <a href="tel:+918088281908" className="text-accent hover:underline text-lg">
                  +91 80882 81908
                </a>
              </div>
              <p className="text-accent font-semibold text-xl pt-4 text-center">
                🌿 Riverstone Garden Decor – Let Your Plants Live in Style!
              </p>
            </div>
          </section>
        </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WhyChooseUs;
