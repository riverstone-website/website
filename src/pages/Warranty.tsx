import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Warranty = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary">Warranty & Care Instructions</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-foreground">Riverstone – Fiberglass Planter Care Instructions and Warranty</h2>
        
        <div className="prose max-w-4xl space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">CARE</h2>
            <p className="text-lg text-muted-foreground">
              Clean regularly with a mild non-abrasive detergent, using a soft cloth. Do not use high pressure washer or high-pressure hose nozzle, rinse with soft spray. You can periodically, out of direct sunlight use an automotive spray wax on gloss finishes to enhance the shine. These tips will keep the product finish looking its very best.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">WARRANTY</h2>
            <div className="text-lg text-muted-foreground space-y-4">
              <p>
                Riverstone Bengaluru LLP., warrants our fiberglass products for 3 years on materials free of defects and workmanship in manufacturing and 1 year on finish from date of purchase. Warranty void if misuse, improper repair or maintenance, acts of God, vandalism, negligence, acts of civil disobedience, any structural changes, modified, altered, E.g., irrigation and drainage holes added to planters or repaired by unauthorized personnel or damaged due to shipping or improper installation.
              </p>
              <p>
                Please notify M/s Riverstone Bengaluru LLP., in writing of the issue. Return of defective product is at the sole cost of the purchaser.
              </p>
              <p>
                The choice of remedy is in Manufacturer's sole discretion. Riverstone will not be liable for labor and/or removal costs connected with the claim. In the event of repair or replacement, the original warranty shall apply to the repaired or replaced portion of the product and will extend for the balance of the warranty period in effect at the time the material proved defective.
              </p>
              <p>
                It is expressly understood and agreed that the customer's sole and exclusive remedy for any and all losses or damages resulting from non-conforming goods, or from any other causes, shall be the repair or replacement of defective parts at the option of Riverstone and that Riverstone shall not be liable for damages, for injury to persons or property, nor for replacement of the entire commercial unit, if repair or replacement of defective parts can reasonably render the unit conforming. Proper documentation including the original invoice will be required on all warranty claims.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Warranty;
