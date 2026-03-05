import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import myPhoto from "/images/MainConf2024.jpeg";

const galleryImages = [
  {
    src: "/images/Philly2.png",
    alt: "SHPE members at a conference",
  },
  {
    src: "/images/Philly4.png",
    alt: "SHPE workshop with students",
  },
  {
    src: "/images/PhillyFlag.jpeg",
    alt: "SHPE social event",
  },
];

// Add or replace with your upcoming event photos (paths under public/images/)
const upcomingEventsImages = [
  { src: "/images/ExecDeadline.png", alt: "Upcoming event" },
  { src: "/images/ExecDeadline.png", alt: "Upcoming event" },
  { src: "/images/ExecDeadline.png", alt: "Upcoming event" },
];

const Index = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentEventsIndex, setCurrentEventsIndex] = useState(0);

  const showPreviousImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const showNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const showPreviousEvent = () => {
    setCurrentEventsIndex((prev) =>
      prev === 0 ? upcomingEventsImages.length - 1 : prev - 1
    );
  };

  const showNextEvent = () => {
    setCurrentEventsIndex((prev) =>
      prev === upcomingEventsImages.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === galleryImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      {/* Fixed Background Image */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${myPhoto})`
          }}
        />
        <div className="absolute inset-0 bg-primary/60" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 pt-16">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-primary/20" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] leading-tight font-bold text-accent mb-6">
            Society of Hispanic Professional Engineers
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto text-center">
            University of Colorado Boulder Chapter
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-subtle-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              To increase the number of Hispanic engineers by providing motivation, support, 
              and professional development opportunities to our members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-primary transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <CardTitle className="text-primary">Awareness</CardTitle>
                <CardDescription>
                  Bringing Hispanic/Latin American culture to campus, mentoring students in high school, outreach and volunteering in STEM
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-primary transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <CardTitle className="text-primary">Development</CardTitle>
                <CardDescription>
                  Workshops on personal finance, networking, resume building, activism, and socially-bonded growth
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-primary transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <CardTitle className="text-primary">Support</CardTitle>
                <CardDescription>
                  The largest network of Hispanic students on campus, community-bonding, academic mentorship, social community, personal support
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section — split: Chapter Moments (left) + Upcoming Events (right) */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left: Chapter Moments */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6 text-center">
                Fun Moments
              </h2>

              <div className="relative overflow-hidden rounded-lg border border-border bg-muted/40">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{
                    transform: `translateX(-${currentImageIndex * 100}%)`,
                  }}
                >
                  {galleryImages.map((image) => (
                    <div key={image.src} className="min-w-full">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="h-96 w-full object-cover md:h-[28rem]"
                      />
                    </div>
                  ))}
                </div>

                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {galleryImages.map((image, index) => (
                    <button
                      key={image.src}
                      type="button"
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-2.5 w-2.5 rounded-full border border-border transition-colors ${
                        index === currentImageIndex
                          ? "bg-accent"
                          : "bg-background/70 hover:bg-muted"
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Upcoming Events */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6 text-center">
                Upcoming Events
              </h2>

              <div className="relative overflow-hidden rounded-lg border border-border bg-muted/40">
                <button
                  type="button"
                  onClick={showPreviousEvent}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center rounded-full border border-border bg-background/90 px-3 py-2 text-sm font-medium text-primary hover:bg-muted transition-colors"
                  aria-label="Previous"
                >
                  Prev
                </button>
                <button
                  type="button"
                  onClick={showNextEvent}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center rounded-full border border-border bg-background/90 px-3 py-2 text-sm font-medium text-primary hover:bg-muted transition-colors"
                  aria-label="Next"
                >
                  Next
                </button>

                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{
                    transform: `translateX(-${currentEventsIndex * 100}%)`,
                  }}
                >
                  {upcomingEventsImages.map((image) => (
                    <div key={image.src} className="min-w-full">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="h-96 w-full object-cover md:h-[28rem]"
                      />
                    </div>
                  ))}
                </div>

                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {upcomingEventsImages.map((image, index) => (
                    <button
                      key={image.src}
                      type="button"
                      onClick={() => setCurrentEventsIndex(index)}
                      className={`h-2.5 w-2.5 rounded-full border border-border transition-colors ${
                        index === currentEventsIndex
                          ? "bg-accent"
                          : "bg-background/70 hover:bg-muted"
                      }`}
                      aria-label={`Go to event image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-foreground mb-4">Google Calendar Events</h2>
            <p className="text-lg text-primary-foreground/80">
              Link your calendar for upcoming events!
            </p>
          </div>
          <Card className="bg-background">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>SHPE Events Calendar</CardTitle>
              <a
                href="https://calendar.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Open in Google Calendar
              </a>
            </CardHeader>
            <CardContent>
              <div className="h-96 md:h-[600px] rounded-md overflow-hidden border border-border">
                <iframe
                  src="https://calendar.google.com/calendar/embed?src=545596a6a70f9b818f8dc47f93ef33138ff5a9b6334a0381ac03352755dc3dd6%40group.calendar.google.com&ctz=America%2FDenver"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  className="w-full h-full"
                  title="SHPE Events Calendar"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sponsors Banner */}
      <section className="py-12 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-primary mb-2">Our Sponsors</h2>
            <p className="text-sm text-muted-foreground">
              Thank you to our partners for their continued support
            </p>
          </div>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {/* First set of logos */}
              <div className="flex items-center gap-12 px-8 flex-shrink-0">
                <img 
                  src="/medtroniclogo.png" 
                  alt="Medtronic" 
                  className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
                <img 
                  src="/Trimblelogo.jpg" 
                  alt="Trimble" 
                  className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
                <img 
                  src="/eaton-logo-mobile.png" 
                  alt="Eaton" 
                  className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
                <img 
                  src="/medtroniclogo.png" 
                  alt="Medtronic" 
                  className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
                <img 
                  src="/Trimblelogo.jpg" 
                  alt="Trimble" 
                  className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
                <img 
                  src="/eaton-logo-mobile.png" 
                  alt="Eaton" 
                  className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex items-center gap-12 px-8 flex-shrink-0">
                <img 
                  src="/medtroniclogo.png" 
                  alt="Medtronic" 
                  className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
                <img 
                  src="/Trimblelogo.jpg" 
                  alt="Trimble" 
                  className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
                <img 
                  src="/eaton-logo-mobile.png" 
                  alt="Eaton" 
                  className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
                <img 
                  src="/medtroniclogo.png" 
                  alt="Medtronic" 
                  className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
                <img 
                  src="/Trimblelogo.jpg" 
                  alt="Trimble" 
                  className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
                <img 
                  src="/eaton-logo-mobile.png" 
                  alt="Eaton" 
                  className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </div>
  );
};

export default Index;
