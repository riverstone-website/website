import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sparkles, Package, Wrench, Phone, Mail } from "lucide-react";

// ============================================
// IMAGE IMPORTS - All images in one place
// ============================================
// Helper function to encode image paths with spaces
const encodeImagePath = (path: string) => path.replace(/ /g, "%20");

// Home page slider images
const sliderImage1 = encodeImagePath("/images/home page/main1.jpg");
const sliderImage2 = encodeImagePath("/images/home page/main2.jpg");
const sliderImage3 = encodeImagePath("/images/home page/main3.jpg");

// Home page feature section images
const featureImage1 = encodeImagePath("/images/home page/1.jpg");
const featureImage2 = encodeImagePath("/images/home page/2.jpg");
const featureImage3 = encodeImagePath("/images/home page/3.jpg");

// ============================================
// HOME PAGE - All content in one file
// ============================================
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <HeroSection />
      <AboutIntroSection />
      <FeaturesSection />
      <ConnectSection />
      {/* <ClientsSection /> */}
      <Footer />
    </div>
  );
};

// ============================================
// HERO SECTION - Main banner with image slider
// ============================================
const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // HERO SLIDER IMAGES - Using 3 main images from home page folder
  const images = [sliderImage1, sliderImage2, sliderImage3];

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // HERO CONTENT - Edit headline and tagline here
  const heroContent = {
    headline: "PREMIUM FIBERGLASS PLANTERS FOR MODERN LANDSCAPING",
    tagline: "ELEGANT • DURABLE • CUSTOMIZABLE",
  };

  return (
    <section className="relative h-[55vh] min-h-[450px] md:h-[65vh] md:min-h-[550px] lg:h-[75vh] lg:min-h-[650px] overflow-hidden bg-gray-100 -mt-20 md:mt-0 pt-20 md:pt-0">
      {/* Background Images with Slider */}
      <div className="absolute inset-0 flex items-center justify-start">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100 z-0" : "opacity-0 z-0"
            }`}
          >
            <img
              src={img}
              alt={`Hero slide ${index + 1}`}
              className="w-full h-full"
              style={{
                display: 'block',
                position: 'absolute',
                top: '0',
                left: '0',
                bottom: '0',
                right: '0',
                height: '100%',
                width: '100%',
                objectFit: 'cover',
                objectPosition: 'center center'
              }}
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      {/* Darker overlay for better text contrast on mobile */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-primary/30 md:from-primary/30 md:to-primary/20 z-10" />

      {/* Hero Content - Always on top */}
      <div className="relative container mx-auto px-4 h-full flex items-center z-20 py-8 md:py-12">
        <div className="max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 md:mb-6 drop-shadow-lg text-left">
            {heroContent.headline}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 font-medium drop-shadow-md text-left">{heroContent.tagline}</p>

          {/* Slider Indicators */}
          <div className="flex gap-2 mt-6 md:mt-8">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1 rounded-full transition-all z-30 relative ${
                  currentSlide === index ? "w-8 md:w-12 bg-accent" : "w-6 md:w-8 bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// ABOUT INTRO SECTION - Brief introduction
// ============================================
const AboutIntroSection = () => {
  // ABOUT CONTENT - Edit text here
  const aboutContent = {
    title: "Leading Manufacturer of Fiberglass Planters",
    subtitle: "INTRODUCING THE NEW ERA OF FIBERGLASS PLANTERS BY RIVERSTONE.",
    tagline: "Elegant in Form, Enduring in Build — Riverstone FRP Planters for Every Architectural Style.",
  };

  return (
    <section className="py-12 md:py-16 px-4 bg-background">
      <div className="container mx-auto text-center max-w-4xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">{aboutContent.title}</h2>
        <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-accent mb-6">{aboutContent.subtitle}</h3>
        <p className="text-base md:text-lg text-muted-foreground italic">{aboutContent.tagline}</p>
      </div>
    </section>
  );
};

// ============================================
// FEATURES SECTION - Three main features
// ============================================
const FeaturesSection = () => {
  // FEATURES CONTENT - Edit features here
  const features = [
    {
      icon: Sparkles,
      title: "Riverstone Products are Dynamic",
      description:
        "Our great passion is the development of new, beautiful planter shapes and innovative items that impress with their uniqueness. This results in truly unique pieces for your locations.",
      image: featureImage1,
    },
    {
      icon: Package,
      title: "Discover Endless variety",
      description:
        "Our product range now a wide variety of products. We are constantly expanding our range with new shapes, colors and surfaces so that you have a large selection and can always find the right item.",
      image: featureImage2,
    },
    {
      icon: Wrench,
      title: "Tailored To Your Vison",
      description:
        "Custom-made FRP planter boxes can be a great solution for a variety of landscaping and gardening needs. We make customized solutions, allowing customers to get planter boxes that perfectly suit their specific requirements in terms of size, shape, color, and style.",
      image: featureImage3,
    },
  ];

  return (
    <section className="py-12 md:py-16 px-4 bg-secondary">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="border-2 hover:border-accent transition-all hover:shadow-lg overflow-hidden"
              >
                {/* Feature Image */}
                <div className="h-96 md:h-80 lg:h-96 bg-muted/30 relative overflow-hidden group w-full">
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>

                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-12 h-12 md:w-16 md:h-16 rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 md:h-8 md:w-8 text-accent" />
                  </div>
                  <CardTitle className="text-lg md:text-xl text-primary">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm md:text-base text-center">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>


      </div>
    </section>
  );
};

// ============================================
// CONNECT SECTION - Call to action
// ============================================
const ConnectSection = () => {
  // CONTACT CONTENT - Edit contact details here
  const contactContent = {
    title: "Connect With Us",
    description:
      "Ready to transform your space with our beautiful fiberglass planters? Get in touch with us today!",
    phoneNumber: "+918088281908",
    whatsappLink: "https://wa.me/918088281908",
  };

  return (
    <section className="py-12 md:py-16 px-4 bg-primary text-primary-foreground">
      <div className="container mx-auto text-center max-w-3xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">{contactContent.title}</h2>
        <p className="text-base md:text-lg mb-6 md:mb-8 opacity-90">{contactContent.description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" variant="secondary" className="gap-2 w-full sm:w-auto">
            <a href={contactContent.whatsappLink} target="_blank" rel="noreferrer">
              <Mail className="h-5 w-5" />
              Contact Us
            </a>
          </Button>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 gap-2 w-full sm:w-auto">
            <a href={`tel:${contactContent.phoneNumber}`}>
              <Phone className="h-5 w-5" />
              Call Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

// ============================================
// CLIENTS SECTION - Client logos/names
// ============================================
// COMMENTED OUT - Client section is hidden but code remains for future use
/*
const ClientsSection = () => {
  // CLIENTS LIST - Edit client names here, add logo paths when available
  const clients = [
    { id: 1, name: "Airport", logo: null },
    { id: 2, name: "Coffee Day The Square", logo: null },
    { id: 3, name: "SNN Builders", logo: null },
    { id: 4, name: "Evantha Sri Durga", logo: null },
    { id: 5, name: "Socials Pub", logo: null },
    { id: 6, name: "One8 Commune", logo: null },
    { id: 7, name: "Adarsh Palm Retreat", logo: null },
    { id: 8, name: "TNPL Tamil Nadu", logo: null },
    { id: 9, name: "Ayodhya Builders", logo: null },
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">CLIENTS</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {clients.map((client) => (
            <div
              key={client.id}
              className="aspect-square bg-secondary rounded-lg flex flex-col items-center justify-center hover:shadow-lg transition-all border-2 border-border hover:border-accent p-4"
            >
              {client.logo ? (
                <img src={client.logo} alt={`${client.name} logo`} className="max-w-full max-h-full object-contain" />
              ) : (
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 bg-muted rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">{client.name.charAt(0)}</span>
                  </div>
                  <span className="text-xs font-medium text-foreground">{client.name}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
*/

export default Index;
