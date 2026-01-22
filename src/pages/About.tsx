import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Users, Award, BookOpen, Lightbulb } from "lucide-react";

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

      {/* Mission & Vision */}
      <section className="py-20" style={{ backgroundColor: '#faf8f3' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Mission Card with Image */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src="/images/board2024.jpeg" 
                  alt="SHPE Mission" 
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                  style={{ maxHeight: '400px' }}
                />
              </div>
              <Card className="group hover:shadow-primary transition-all duration-300 order-1 lg:order-2">
                <CardHeader>
                  <Target className="h-12 w-12 text-accent mb-4 group-hover:animate-glow" />
                  <CardTitle className="text-2xl text-primary">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    SHPE changes lives by empowering the Hispanic community to realize its fullest 
                    potential and to impact the world through STEM awareness, access, support and 
                    professional development. We are committed to increasing the number of Hispanic 
                    engineers by providing motivation, support, and professional development 
                    opportunities to our members.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Vision Card with Image */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <Card className="group hover:shadow-primary transition-all duration-300">
                <CardHeader>
                  <Eye className="h-12 w-12 text-accent mb-4 group-hover:animate-glow" />
                  <CardTitle className="text-2xl text-primary">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    A world where Hispanics are highly valued and influential as the leading 
                    innovators, scientists, mathematicians and engineers. We envision a future 
                    where every Hispanic student has access to opportunities in STEM fields and 
                    the support system needed to achieve their dreams in engineering and technology.
                  </p>
                </CardContent>
              </Card>
              <div>
                <img 
                  src="/images/conference2025.jpeg" 
                  alt="SHPE Vision" 
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                  style={{ maxHeight: '400px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20" style={{ backgroundColor: '#faf8f3' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-primary transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-primary">Community</CardTitle>
                <CardDescription>
                  Building a strong, supportive network of Hispanic engineers who lift each other up.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-primary transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-primary">Excellence</CardTitle>
                <CardDescription>
                  Striving for the highest standards in academics, professional development, and service.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-primary transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <BookOpen className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-primary">Education</CardTitle>
                <CardDescription>
                  Promoting STEM education and creating pathways for Hispanic students to succeed.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-primary transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <Lightbulb className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-primary">Innovation</CardTitle>
                <CardDescription>
                  Encouraging creative thinking and technological advancement to solve real-world problems.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-primary transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <Target className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-primary">Leadership</CardTitle>
                <CardDescription>
                  Developing the next generation of Hispanic leaders in engineering and technology.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-primary transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <Eye className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-primary">Integrity</CardTitle>
                <CardDescription>
                  Maintaining the highest ethical standards in all our activities and relationships.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;