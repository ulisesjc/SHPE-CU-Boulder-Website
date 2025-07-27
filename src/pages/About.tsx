import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Users, Award, BookOpen, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="group hover:shadow-primary transition-all duration-300">
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
          </div>
        </div>
      </section>

      {/* Chapter History */}
      <section className="py-20 bg-subtle-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Story</h2>
            <p className="text-lg text-muted-foreground">
              The journey of our SHPE chapter and its impact on students
            </p>
          </div>

          <div className="space-y-8">
            <Card className="animate-fade-in">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">2015 - Chapter Founded</h3>
                    <p className="text-muted-foreground">
                      Our SHPE chapter was established by a group of passionate Hispanic engineering 
                      students who recognized the need for representation and support in STEM fields. 
                      Starting with just 15 members, we set out to create a community of excellence.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">2018 - First National Conference</h3>
                    <p className="text-muted-foreground">
                      Our chapter sent its first delegation to the SHPE National Convention, where 
                      members participated in career fairs, technical sessions, and networking events. 
                      This marked a significant milestone in our professional development journey.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">2020 - Community Outreach Launch</h3>
                    <p className="text-muted-foreground">
                      We launched our K-12 outreach program, visiting local schools to inspire 
                      young Hispanic students to pursue STEM careers. Despite challenges from 
                      the pandemic, we adapted with virtual programs and continued our mission.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">2024 - 150+ Strong</h3>
                    <p className="text-muted-foreground">
                      Today, our chapter has grown to over 150 active members across all engineering 
                      disciplines. We've established partnerships with major companies and have helped 
                      hundreds of students secure internships and full-time positions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
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