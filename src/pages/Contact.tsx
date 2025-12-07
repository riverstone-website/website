import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contact Us - Riverstone Garden Decor Bangalore | +91 80882 81908"
        description="Get in touch with Riverstone Garden Decor for custom FRP planters. Located in Bangalore. Call +91 80882 81908 or email sourav@riverstonegardendecor.com"
        keywords="contact riverstone, fiberglass planter manufacturer bangalore, FRP planter supplier, custom planters contact"
        canonicalUrl="https://www.riverstonegardendecor.com/contact"
      />
      <TopBar />
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-primary">Contact Us</h1>
          <p className="text-xl text-accent mb-12">Get in touch with us for any inquiries about our products</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-card p-8 rounded-lg border border-border">
              <h2 className="text-3xl font-bold mb-6 text-primary">Get in Touch</h2>
              <p className="text-lg text-foreground/90 mb-8 leading-relaxed">
                Have questions about our fiberglass planters? We'd love to hear from you.
                Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-card p-6 rounded-lg border-l-4 border-accent flex items-start gap-4">
                <Phone className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-primary">Phone</h3>
                  <a href="tel:+918088281908" className="text-foreground/80 hover:text-accent transition-colors text-lg">
                    +91 80882 81908
                  </a>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border-l-4 border-accent flex items-start gap-4">
                <Mail className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-primary">Email</h3>
                  <a
                    href="mailto:sourav@riverstonegardendecor.com"
                    className="text-foreground/80 hover:text-accent transition-colors break-all"
                  >
                    sourav@riverstonegardendecor.com
                  </a>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border-l-4 border-accent flex items-start gap-4">
                <MapPin className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-primary">Visit Our Showroom</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    169/6, Near HP Petrol Pump, Hennur Bagalur Main Road<br />
                    Bidarahalli Hobli, Kannur Village<br />
                    Bangalore – 560077, Karnataka, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-muted/30 p-8 rounded-lg border border-border">
            <form
              className="space-y-6"
              action="mailto:sourav@riverstonegardendecor.com"
              method="POST"
              encType="text/plain"
            >
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" className="mt-2" />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your.email@example.com" className="mt-2" />
              </div>

              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" placeholder="+91 80882 81908" className="mt-2" />
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your project..." 
                  className="mt-2 min-h-[120px]"
                />
              </div>

              <Button className="w-full bg-accent hover:bg-accent/90 text-lg py-6">
                Send Message
              </Button>
            </form>
          </div>
        </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
