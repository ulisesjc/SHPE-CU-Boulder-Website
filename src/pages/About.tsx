import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#faf8f3' }}>
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-primary-foreground mb-6 animate-fade-in">
            About Our Chapter
          </h1>
          <p className="text-xl text-primary-foreground/90 animate-fade-in max-w-3xl mx-auto">
            Learn about our mission, values, and the impact we're making in the engineering community.
          </p>
        </div>
      </section>

      {/* Professional Development, Community Service & Familia */}
      <section className="py-20" style={{ backgroundColor: '#faf8f3' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Professional Development Card with Image */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src="/images/board2024.jpeg"
                  alt="Professional Development" 
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                  style={{ maxHeight: '400px' }}
                />
              </div>
              <Card className="group hover:shadow-primary transition-all duration-300 order-1 lg:order-2">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Professional Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                  We host a variety of workshops with the aim of developing the future generation of professional engineers. Our workshops include: Resume Building, Polishing an Elevator Pitch, Mock Interviews and much more.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Community Service Card with Image */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <Card className="group hover:shadow-primary transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Community Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    From K–12 outreach to campus initiatives, we give back through and uplift our local Hispanic and Latinx community.
                  </p>
                </CardContent>
              </Card>
              <div>
                <img 
                  src="/images/conference2025.jpeg"
                  alt="Community Service" 
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                  style={{ maxHeight: '400px' }}
                />
              </div>
            </div>

            {/* Familia Card with Placeholder Image Area */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <div className="w-full h-[300px] rounded-lg border-2 border-dashed border-accent/40 flex items-center justify-center text-muted-foreground text-sm bg-white/60">
                <img 
                  src="/images/conference2025.jpeg"
                  alt="Community Service" 
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                  style={{ maxHeight: '400px' }}
                />
                </div>
              </div>
              <Card className="group hover:shadow-primary transition-all duration-300 order-1 lg:order-2">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Familia</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Above all, SHPE CU Boulder is a supportive space where members find 
                    belonging, encouragement, and lifelong friendships on their engineering journey.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;