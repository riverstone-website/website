import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const ClientStories = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <HeroSection />
      <TestimonialsSection />
      <FeaturedStoriesSection />
      <ImpactSection />
      <Footer />
    </div>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-16 md:py-24 px-4">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_25%,rgba(255,255,255,.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,.05)_75%,rgba(255,255,255,.05))] bg-[length:60px_60px]" />
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">Client Stories</h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto opacity-95 px-4">
          Discover how our fiberglass planters have transformed spaces and exceeded expectations
        </p>
      </div>
    </section>
  );
};

// Main Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      company: "SNN Builders",
      role: "Landscape Architect",
      story: "The fiberglass planters from Riverstone Garden Decor have completely transformed our residential projects. The durability and elegant designs perfectly complement modern architecture. Our clients are thrilled with the premium look and low maintenance requirements.",
      rating: 5,
      imagePlaceholder: "client-1"
    },
    {
      id: 2,
      name: "Priya Sharma",
      company: "Coffee Day The Square",
      role: "Operations Manager",
      story: "We installed these planters across multiple locations, and they've exceeded our expectations. They withstand heavy foot traffic and weather conditions while maintaining their aesthetic appeal. The customization options allowed us to match our brand perfectly.",
      rating: 5,
      imagePlaceholder: "client-2"
    },
    {
      id: 3,
      name: "Vikram Reddy",
      company: "Adarsh Palm Retreat",
      role: "Project Director",
      story: "Outstanding quality and service! The team worked closely with us to create custom planters that enhanced our luxury resort's ambiance. The lightweight yet sturdy construction made installation effortless. Highly recommend for premium projects.",
      rating: 5,
      imagePlaceholder: "client-3"
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3 md:mb-4 px-4">What Our Clients Say</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Real experiences from businesses and individuals who chose Riverstone Garden Decor
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-card hover:shadow-xl transition-all border-2 hover:border-accent">
              <CardContent className="p-5 md:p-6">
                {/* Client Image Placeholder */}
                <div className="mb-4 md:mb-6">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 mx-auto flex items-center justify-center">
                    <span className="text-2xl md:text-3xl font-bold text-primary">{testimonial.name.charAt(0)}</span>
                  </div>
                </div>

                {/* Quote Icon */}
                <Quote className="h-8 w-8 md:h-10 md:w-10 text-accent/30 mb-3 md:mb-4" />

                {/* Story */}
                <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 italic leading-relaxed">
                  "{testimonial.story}"
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-3 md:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 md:h-5 md:w-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Client Details */}
                <div className="border-t pt-4">
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm font-medium text-accent mt-1">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// Featured Stories Section
const FeaturedStoriesSection = () => {
  const featuredStories = [
    {
      id: 1,
      title: "Airport Transformation Project",
      client: "International Airport Authority",
      description: "A complete landscape overhaul featuring over 200 custom fiberglass planters across terminal areas. The project showcased our ability to deliver premium quality at scale while maintaining strict installation deadlines.",
      highlights: [
        "200+ custom planters installed",
        "Completed within tight 3-month timeline",
        "Weather-resistant finish for outdoor durability",
        "Modern minimalist design to complement architecture"
      ],
      imagePlaceholder: "airport-project"
    },
    {
      id: 2,
      title: "One8 Commune Restaurant Design",
      client: "One8 Commune",
      description: "Collaborated to create an exclusive planter collection that embodies luxury dining. Each piece was custom-designed to enhance the restaurant's sophisticated ambiance while providing functionality for live greenery displays.",
      highlights: [
        "Bespoke design matching brand aesthetics",
        "Premium metallic finish options",
        "Indoor-outdoor versatility",
        "Seamless integration with interior design"
      ],
      imagePlaceholder: "one8-project"
    },
    {
      id: 3,
      title: "TNPL Corporate Campus Landscaping",
      client: "TNPL Tamil Nadu",
      description: "Transformed a corporate campus with sustainable landscaping solutions. Our fiberglass planters provided the perfect balance of durability and elegance needed for a professional environment while supporting diverse plant varieties.",
      highlights: [
        "Eco-friendly material selection",
        "Low maintenance requirements",
        "Custom sizes for varied plant species",
        "Professional aesthetic across campus"
      ],
      imagePlaceholder: "tnpl-project"
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4 bg-secondary">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3 md:mb-4 px-4">Featured Success Stories</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Explore our most impactful projects and see how we've helped transform spaces
          </p>
        </div>

        <div className="space-y-8 md:space-y-12">
          {featuredStories.map((story, index) => (
            <Card key={story.id} className="overflow-hidden border-2 hover:border-accent transition-all">
              <div className="grid md:grid-cols-2 gap-0 md:gap-6">
                {/* Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <div className="text-center p-6 md:p-8">
                    <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 md:mb-4 bg-muted rounded-full flex items-center justify-center">
                      <span className="text-xl md:text-2xl font-bold text-primary">{story.client.charAt(0)}</span>
                    </div>
                    <span className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
                      Project Image
                    </span>
                  </div>
                </div>

                {/* Content */}
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">{story.title}</h3>
                  <p className="text-accent font-medium mb-3 md:mb-4">{story.client}</p>
                  <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 leading-relaxed">
                    {story.description}
                  </p>

                  <div className="space-y-2 md:space-y-3">
                    <p className="font-semibold text-primary text-sm md:text-base">Project Highlights:</p>
                    <ul className="space-y-1.5 md:space-y-2">
                      {story.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 md:mt-2 flex-shrink-0" />
                          <span className="text-xs md:text-sm text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// Impact Section
const ImpactSection = () => {
  const stats = [
    { label: "Happy Clients", value: "500+" },
    { label: "Projects Completed", value: "1000+" },
    { label: "Planters Delivered", value: "50,000+" },
    { label: "Years of Excellence", value: "15+" }
  ];

  return (
    <section className="py-12 md:py-20 px-4 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 px-4">Our Impact in Numbers</h2>
          <p className="text-base md:text-lg opacity-90 max-w-2xl mx-auto px-4">
            Building trust through quality and consistency
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm lg:text-base opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientStories;
