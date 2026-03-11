import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const sponsors = [
  { src: "/medtroniclogo.png", alt: "Medtronic", url: "https://www.medtronic.com" },
  { src: "/Trimblelogo.jpg", alt: "Trimble", url: "https://www.trimble.com" },
  { src: "/eaton-logo-mobile.png", alt: "Eaton", url: "https://www.eaton.com" },
];

const Sponsors = () => {
  return (
    <div className="min-h-screen bg-background pt-16">
      <Navigation />

      {/* Hero Section */}
      <section
        className="py-32"
        style={{
          backgroundImage: "url('/images/flatironsbackground.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white animate-fade-in drop-shadow-lg">
            Our Sponsors
          </h1>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4"> A Special Thank You to Our Partners!</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our sponsors make it possible for SHPE CU Boulder to thrive. We are deeply grateful
            for their continued commitment to supporting the next generation of Hispanic engineers.
          </p>
        </div>
      </section>

      {/* Sponsor Logos */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-4">
            {sponsors.map((sponsor) => (
              <a
                key={sponsor.alt}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-6 bg-background border border-border rounded-xl hover:border-accent hover:shadow-md transition-all"
              >
                <img
                  src={sponsor.src}
                  alt={sponsor.alt}
                  loading="lazy"
                  className="h-12 w-auto object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Sponsor Section */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Become a Sponsor</h2>
          <p className="text-muted-foreground mb-8">
            Partnering with SHPE CU Boulder gives your organization direct access to a talented,
            diverse pipeline of engineering students. Whether through event sponsorship, scholarships,
            or recruiting partnerships, we'd love to work with you.
          </p>
          <a
            href="/corporate-packet.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:bg-accent/90 transition-colors"
          >
            View Our Corporate Sponsorship Packet
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sponsors;
