import { useEffect, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar as CalendarIcon, ExternalLink } from "lucide-react";
import { BookOpen, Briefcase, Heart } from "lucide-react";
import myPhoto from "/images/MainConf2024.jpeg";

const Index = () => {
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
            University of Colorado Boulder
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
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <BookOpen className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-primary">Awareness</CardTitle>
                <CardDescription>
                  Bringing Hispanic/Latin American culture to campus, mentoring students in high school, outreach and volunteering in STEM
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-primary transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <Briefcase className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-primary">Development</CardTitle>
                <CardDescription>
                  Workshops on personal finance, networking, resume building, activism, and socially-bonded growth
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-primary transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-primary">Support</CardTitle>
                <CardDescription>
                  The largest network of Hispanic students on campus, community-bonding, academic mentorship, social community, personal support
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-foreground mb-4">Event Calendar</h2>
            <p className="text-lg text-primary-foreground/80">
              Stay up to date with our upcoming events and activities
            </p>
          </div>
          <Card className="bg-background">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <CalendarIcon className="h-6 w-6 text-accent" />
                SHPE Events Calendar
              </CardTitle>
              <a
                href="https://calendar.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1"
              >
                Open in Google Calendar
                <ExternalLink className="h-4 w-4" />
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
