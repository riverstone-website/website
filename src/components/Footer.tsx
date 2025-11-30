import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const navigationLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Gallery", path: "/gallery" },
    { name: "Why Choose Us", path: "/why-choose-us" },
    { name: "About Fiberglass Planters", path: "/about-fiberglass" },
    { name: "Warranty & Care", path: "/warranty" },
    { name: "FAQs", path: "/faqs" },
    { name: "Contact", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms and Conditions", path: "/terms" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Navigation Links */}
      <div className="border-b border-primary-foreground/20">
        <div className="container mx-auto px-4 py-8">
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {navigationLinks.map((link) => (
              <Link key={link.path} to={link.path} className="text-sm hover:text-accent transition-colors">
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Company Info */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Riverstone Garden Decor</h3>

          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-start justify-center md:justify-start gap-3">
              <MapPin className="h-5 w-5 mt-1 flex-shrink-0 text-accent" />
              <p className="text-sm">
                169/6. Near HP Petrol pump, Hennur Bagalur Main road, Bidrahalli Hobli, Kannur Village, Bangalore
                560077, Karnataka, India.
              </p>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3 flex-wrap">
              <Mail className="h-5 w-5 text-accent" />
              <div className="flex gap-3 flex-wrap justify-center">
                <a
                  href="mailto:sourav@riverstonegardendecor.com"
                  className="text-sm hover:text-accent transition-colors"
                >
                  sourav@riverstonegardendecor.com
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <Phone className="h-5 w-5 text-accent" />
              <div className="flex gap-3 flex-wrap justify-center">
                <a href="tel:+918088281908" className="text-sm hover:text-accent transition-colors">
                  +91 80882 81908
                </a>
              </div>
            </div>

            <div className="text-center md:text-left">
              <p className="text-sm">
                <span className="text-muted-foreground">GST:</span> 29CEJPV0940K1ZX
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm opacity-80">
            Copyright © 2025 Riverstone Garden Decor - All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
