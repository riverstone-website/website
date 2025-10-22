import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Career = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary">Career Opportunities</h1>
        
        <div className="prose max-w-4xl">
          <p className="text-lg text-muted-foreground mb-8">
            Dear Job seekers,
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            Thank you for your interest, but there are no job openings available at this time. Please check back at another time.
          </p>
          <p className="text-lg text-muted-foreground">
            Team Mid Arts Bengaluru LLP.,
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Career;
