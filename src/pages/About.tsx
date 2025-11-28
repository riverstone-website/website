import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-primary">About Riverstone Garden Decor</h1>
        
        <div className="max-w-5xl space-y-12">
          {/* Introduction */}
          <section className="bg-card p-8 rounded-lg border border-border">
            <p className="text-lg text-foreground leading-relaxed">
              Riverstone Garden Decor is a leading manufacturer and exporter of premium-quality, affordable fiberglass planters and pots for both indoor and outdoor spaces. With over 15 years of excellence in design, craftsmanship, and innovation, we have become one of India's most trusted brands for durable and elegant planter solutions.
            </p>
          </section>

          {/* Our Story */}
          <section>
            <h2 className="text-3xl font-serif font-bold mb-6 text-primary">Our Story</h2>
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p>
                Founded 15 years ago by <span className="font-semibold text-primary">Mr. Sourav Vinay</span>, Riverstone Garden Decor began with a simple vision — to transform everyday spaces into beautiful, green environments through thoughtfully designed, long-lasting fiberglass planters.
              </p>
              <p>
                From humble beginnings, we have grown into a recognized name across India, serving clients in the residential, commercial, and hospitality sectors.
              </p>
            </div>
          </section>

          {/* Our Expertise */}
          <section className="bg-muted/30 p-8 rounded-lg">
            <h2 className="text-3xl font-serif font-bold mb-6 text-primary">Our Expertise</h2>
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
            <h2 className="text-3xl font-serif font-bold mb-6 text-primary">Why Choose Riverstone?</h2>
            <ul className="space-y-3 text-foreground/90">
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl mt-1">•</span>
                <span>15+ years of trusted experience in fiberglass planter manufacturing.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl mt-1">•</span>
                <span>Customized designs, colors, and sizes to suit every project.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl mt-1">•</span>
                <span>Lightweight, strong, and weatherproof – perfect for both indoor and outdoor use.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl mt-1">•</span>
                <span>Crack-resistant, low-maintenance, and eco-friendly materials.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl mt-1">•</span>
                <span>Widely appreciated by architects, landscape designers, builders, and homeowners across India.</span>
              </li>
            </ul>
          </section>

          {/* Innovation & Design */}
          <section className="bg-card p-8 rounded-lg border border-border">
            <h2 className="text-3xl font-serif font-bold mb-6 text-primary">Innovation & Design</h2>
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
          <section>
            <h2 className="text-3xl font-serif font-bold mb-6 text-primary">Custom Solutions</h2>
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p className="font-semibold text-accent">Can't find the design you're looking for?</p>
              <p>
                We specialize in custom-made fiberglass planters — tailor-made to match your exact size, color, and design preferences.
              </p>
              <p>
                Our design experts collaborate closely with architects, landscapers, and interior designers to bring creative ideas to life.
              </p>
            </div>
          </section>

          {/* Wholesale & Retail */}
          <section className="bg-muted/30 p-8 rounded-lg">
            <h2 className="text-3xl font-serif font-bold mb-6 text-primary">Wholesale & Retail</h2>
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
            <h2 className="text-3xl font-serif font-bold mb-6 text-primary">Our Products Are Loved In</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Residential Homes & Villas",
                "Hotels, Resorts & Restaurants",
                "Office Complexes & Corporate Parks",
                "Public Parks, Urban Landscapes & Cafés",
                "Apartments, Showrooms & Retail Spaces"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                  <span className="text-accent text-xl">✓</span>
                  <span className="text-foreground/90">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Our Promise */}
          <section className="bg-primary/5 p-8 rounded-lg border-2 border-accent/20">
            <h2 className="text-3xl font-serif font-bold mb-6 text-primary">Our Promise</h2>
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p>
                At Riverstone Garden Decor, we believe every plant deserves a beautiful home.
              </p>
              <p>
                Our mission is to combine aesthetic appeal, functionality, and sustainability in every product we create.
              </p>
              <p className="font-semibold text-primary">
                We're proud to continue growing — one planter at a time — by helping our customers bring nature closer to their living spaces.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-card p-8 rounded-lg border-2 border-primary/20">
            <h2 className="text-2xl font-serif font-bold mb-6 text-primary">Get In Touch</h2>
            <div className="space-y-4 text-foreground/90">
              <div>
                <p className="font-semibold text-primary mb-2">📍 Address:</p>
                <p className="leading-relaxed">
                  169/6, Near HP Petrol Pump,<br />
                  Hennur Bagalur Main Road, Bidarahalli Hobli,<br />
                  Kannur Village, Bangalore – 560077
                </p>
              </div>
              <div>
                <p className="font-semibold text-primary mb-2">📞 Contact:</p>
                <a href="tel:+918088281908" className="hover:underline">
                  +91 80882 81908
                </a>
              </div>
              <p className="text-accent font-semibold text-lg pt-4">
                🌿 Riverstone Garden Decor – Let Your Plants Live in Style!
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
