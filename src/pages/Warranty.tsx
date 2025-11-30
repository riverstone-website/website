import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Sparkles } from "lucide-react";

const Warranty = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-primary">Warranty & Care</h1>
          <p className="text-xl text-accent mb-12">Fiberglass Planter Care Instructions and Warranty Information</p>

          <div className="space-y-12">
            {/* Care Instructions */}
            <section className="bg-card p-8 rounded-lg border border-border">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="h-8 w-8 text-accent" />
                <h2 className="text-3xl font-bold text-primary">Care Instructions</h2>
              </div>
              <p className="text-lg text-foreground leading-relaxed">
                Clean regularly with a mild non-abrasive detergent, using a soft cloth. Do not use high pressure washer or high-pressure hose nozzle, rinse with soft spray. You can periodically, out of direct sunlight use an automotive spray wax on gloss finishes to enhance the shine. These tips will keep the product finish looking its very best.
              </p>
            </section>

            {/* Warranty Information */}
            <section className="bg-muted/30 p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-8 w-8 text-accent" />
                <h2 className="text-3xl font-bold text-primary">Warranty Information</h2>
              </div>
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Coverage</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    Riverstone Bengaluru warrants our fiberglass products for <span className="font-semibold text-accent">3 years on materials</span> free of defects and workmanship in manufacturing and <span className="font-semibold text-accent">1 year on finish</span> from date of purchase.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Warranty Exclusions</h3>
                  <p className="text-foreground/90 leading-relaxed mb-4">
                    Warranty void if:
                  </p>
                  <ul className="space-y-2 text-foreground/80 ml-6">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Misuse, improper repair or maintenance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Acts of God, vandalism, or negligence</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Acts of civil disobedience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Any structural changes, modifications, or alterations (E.g., irrigation and drainage holes added to planters)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Repairs by unauthorized personnel</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Damage due to shipping or improper installation</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Claim Process</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    Please notify Riverstone Bengaluru in writing of the issue. Return of defective product is at the sole cost of the purchaser. Proper documentation including the original invoice will be required on all warranty claims.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Remedy & Limitations</h3>
                  <div className="space-y-4 text-foreground/90 leading-relaxed">
                    <p>
                      The choice of remedy is in Manufacturer's sole discretion. Riverstone will not be liable for labor and/or removal costs connected with the claim.
                    </p>
                    <p>
                      In the event of repair or replacement, the original warranty shall apply to the repaired or replaced portion of the product and will extend for the balance of the warranty period in effect at the time the material proved defective.
                    </p>
                    <p>
                      It is expressly understood and agreed that the customer's sole and exclusive remedy for any and all losses or damages resulting from non-conforming goods, or from any other causes, shall be the repair or replacement of defective parts at the option of Riverstone and that Riverstone shall not be liable for damages, for injury to persons or property, nor for replacement of the entire commercial unit, if repair or replacement of defective parts can reasonably render the unit conforming.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Warranty;
