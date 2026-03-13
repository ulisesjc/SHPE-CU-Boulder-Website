import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-[#faf8f3] pt-16">
      <Navigation />
      
      {/* Hero Section */}
      <section
        className="py-20"
        style={{
          backgroundImage: "url('/images/aboutpicture.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white mb-6 animate-fade-in drop-shadow-lg">
            About Our Chapter
          </h1>
        </div>
      </section>

      {/* Professional Development, Community Service & Familia */}
      <section className="py-20 bg-[#faf8f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Professional Development Card with Image */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src="/images/board2024.jpeg"
                  alt="Professional Development" 
                  loading="lazy"
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
                  Service from our professional chapter is a pillar upon which our academic chapter thrives. 
                  We always want to make sure to pay this forward! The most prominent service event we host is the Dia De Sciencias. Which aims to introduce students from underrepresented communities into STEM!
                  </p>
                </CardContent>
              </Card>
              <div>
                <img 
                  src="/images/scienceday.jpeg"
                  alt="Community Service" 
                  loading="lazy"
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                  style={{ maxHeight: '400px' }}
                />
              </div>
            </div>

            {/* Familia Card with Placeholder Image Area */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src="/images/PhillyLove.jpeg"
                  alt="Familia community"
                  loading="lazy"
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                  style={{ maxHeight: '400px' }}
                />
              </div>
              <Card className="group hover:shadow-primary transition-all duration-300 order-1 lg:order-2">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Familia</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Above all, the heart of our mission is community. We strive to create a supportive space where you can find 
                    belonging, encouragement, and lifelong friendships as you navigate your engineering journey.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are — National Organization */}
      <section className="py-16 bg-[#f5e6c8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            We are a chapter of the Society of Hispanic Professional Engineers, the nation&apos;s largest association dedicated to fostering Hispanic leadership in STEM.
            Today we continue that mission, supporting students, connecting with industry, and giving back through service.
          </p>
          <a
            href="https://shpe.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Visit National SHPE
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;