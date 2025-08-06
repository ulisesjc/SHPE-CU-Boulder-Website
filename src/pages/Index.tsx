import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, Users, Award, ArrowRight, BookOpen, Briefcase, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [backgroundOpacity, setBackgroundOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Calculate transition point (halfway through the page)
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = currentScrollY / documentHeight;
      
      // Start transition at 40% scroll, complete at 60%
      const transitionStart = 0.4;
      const transitionEnd = 0.6;
      
      if (scrollProgress <= transitionStart) {
        setBackgroundOpacity(0);
      } else if (scrollProgress >= transitionEnd) {
        setBackgroundOpacity(1);
      } else {
        const progress = (scrollProgress - transitionStart) / (transitionEnd - transitionStart);
        setBackgroundOpacity(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      {/* Fixed Background Image */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(/lovable-uploads/11b3b9f8-8a03-4f65-aa45-ee132f76ce13.png)`
          }}
        />
        <div className="absolute inset-0 bg-primary/60" />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-primary/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in text-center">
            Welcome to the
            <span className="block text-accent animate-glow">Familia</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 animate-fade-in max-w-3xl mx-auto text-center">
            SHPE CU Boulder
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
                <CardTitle className="text-primary">Academic Excellence</CardTitle>
                <CardDescription>
                  Supporting academic success through tutoring, study groups, and mentorship programs.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-primary transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <Briefcase className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-primary">Professional Development</CardTitle>
                <CardDescription>
                  Building career skills through workshops, networking events, and industry partnerships.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-primary transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-primary">Community Impact</CardTitle>
                <CardDescription>
                  Making a difference through community service and STEM outreach programs.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="animate-float">
              <div className="text-4xl font-bold text-accent mb-2">150+</div>
              <div className="text-primary-foreground/80">Active Members</div>
            </div>
            <div className="animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="text-4xl font-bold text-accent mb-2">25+</div>
              <div className="text-primary-foreground/80">Events Per Year</div>
            </div>
            <div className="animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-4xl font-bold text-accent mb-2">95%</div>
              <div className="text-primary-foreground/80">Employment Rate</div>
            </div>
            <div className="animate-float" style={{ animationDelay: '1.5s' }}>
              <div className="text-4xl font-bold text-accent mb-2">50+</div>
              <div className="text-primary-foreground/80">Partner Companies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Get Involved</h2>
            <p className="text-lg text-muted-foreground">
              Discover how you can be part of our engineering community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-primary transition-all duration-300 cursor-pointer">
              <CardHeader>
                <Calendar className="h-12 w-12 text-accent mb-4 group-hover:animate-glow" />
                <CardTitle className="text-primary">Upcoming Events</CardTitle>
                <CardDescription>
                  Join our workshops, networking events, and professional development sessions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground">
                  View Events
                </Button>
              </CardContent>
            </Card>

            <Link to="/board">
              <Card className="group hover:shadow-primary transition-all duration-300 cursor-pointer h-full">
                <CardHeader>
                  <Users className="h-12 w-12 text-accent mb-4 group-hover:animate-glow" />
                  <CardTitle className="text-primary">Meet Our Board</CardTitle>
                  <CardDescription>
                    Get to know the dedicated students leading our chapter forward.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground">
                    Meet the Team
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link to="/contact">
              <Card className="group hover:shadow-primary transition-all duration-300 cursor-pointer h-full">
                <CardHeader>
                  <Award className="h-12 w-12 text-accent mb-4 group-hover:animate-glow" />
                  <CardTitle className="text-primary">Join SHPE</CardTitle>
                  <CardDescription>
                    Become part of a community that supports your engineering journey.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </div>
  );
};

export default Index;
