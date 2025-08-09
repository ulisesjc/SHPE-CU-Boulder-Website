import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, GraduationCap, MapPin } from "lucide-react";

const Board = () => {
  const boardMembers = [
    {
      name: "Maria Rodriguez",
      position: "President",
      major: "Computer Engineering",
      year: "Senior",
      location: "San Antonio, TX",
      bio: "Passionate about increasing representation of Hispanics in tech. Interned at Google and Microsoft.",
      email: "maria.r@university.edu",
      linkedin: "#",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Carlos Martinez",
      position: "Vice President",
      major: "Mechanical Engineering",
      year: "Junior", 
      location: "Houston, TX",
      bio: "Focus on sustainable engineering solutions and renewable energy systems. NASA USRP intern.",
      email: "carlos.m@university.edu",
      linkedin: "#",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Isabella Garcia",
      position: "Secretary",
      major: "Biomedical Engineering",
      year: "Sophomore",
      location: "Austin, TX",
      bio: "Interested in medical device innovation and healthcare technology. Research assistant in biotech lab.",
      email: "isabella.g@university.edu",
      linkedin: "#",
      image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Diego Hernandez",
      position: "Treasurer",
      major: "Industrial Engineering",
      year: "Junior",
      location: "Dallas, TX",
      bio: "Expertise in operations research and supply chain optimization. Ford Motor Company intern.",
      email: "diego.h@university.edu",
      linkedin: "#",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Sofia Lopez",
      position: "Professional Development Chair",
      major: "Electrical Engineering",
      year: "Senior",
      location: "El Paso, TX",
      bio: "Specializes in power systems and smart grid technology. Tesla engineering intern.",
      email: "sofia.l@university.edu",
      linkedin: "#",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Miguel Torres",
      position: "Community Outreach Chair",
      major: "Civil Engineering",
      year: "Senior",
      location: "Laredo, TX",
      bio: "Passionate about infrastructure development and community impact. Fluor Corporation intern.",
      email: "miguel.t@university.edu",
      linkedin: "#",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Ana Morales",
      position: "Academic Chair",
      major: "Chemical Engineering",
      year: "Junior",
      location: "Corpus Christi, TX",
      bio: "Research focus on sustainable chemistry and green energy solutions. ExxonMobil intern.",
      email: "ana.m@university.edu",
      linkedin: "#",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Roberto Gutierrez",
      position: "Social Chair",
      major: "Aerospace Engineering",
      year: "Sophomore",
      location: "McAllen, TX",
      bio: "Passionate about space exploration and satellite technology. SpaceX engineering co-op.",
      email: "roberto.g@university.edu",
      linkedin: "#",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Valeria Ramirez",
      position: "Public Relations Chair",
      major: "Environmental Engineering",
      year: "Senior",
      location: "Brownsville, TX",
      bio: "Dedicated to environmental sustainability and water resource management. EPA internship.",
      email: "valeria.r@university.edu",
      linkedin: "#",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Luis Vega",
      position: "Technical Chair",
      major: "Software Engineering",
      year: "Junior",
      location: "Plano, TX",
      bio: "Full-stack developer with expertise in AI and machine learning. Amazon SDE intern.",
      email: "luis.v@university.edu",
      linkedin: "#",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Meet Our Board
          </h1>
        </div>
      </section>

      {/* Board Members */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <Card 
                key={member.name} 
                className="group hover:shadow-primary hover:bg-accent/10 transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="relative mx-auto mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-accent/20 group-hover:border-accent/40 transition-colors"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <GraduationCap className="h-4 w-4 text-accent-foreground" />
                    </div>
                  </div>
                  <CardTitle className="text-primary text-xl">{member.name}</CardTitle>
                  <Badge variant="secondary" className="w-fit mx-auto">
                    {member.position}
                  </Badge>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="outline">{member.major}</Badge>
                    <Badge variant="outline">{member.year}</Badge>
                  </div>
                  
                  <div className="flex items-center justify-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    {member.location}
                  </div>
                  
                  <CardDescription className="text-center leading-relaxed">
                    {member.bio}
                  </CardDescription>
                  
                  <div className="flex justify-center space-x-4 pt-4 border-t border-border">
                    <a 
                      href={`mailto:${member.email}`}
                      className="p-2 rounded-full bg-accent/10 hover:bg-accent/20 transition-colors group"
                    >
                      <Mail className="h-4 w-4 text-accent group-hover:text-accent-glow" />
                    </a>
                    <a 
                      href={member.linkedin}
                      className="p-2 rounded-full bg-accent/10 hover:bg-accent/20 transition-colors group"
                    >
                      <Linkedin className="h-4 w-4 text-accent group-hover:text-accent-glow" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Join Board CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Interested in Leadership?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Board positions become available each academic year. Join us in leading positive change 
            and making a lasting impact in the engineering community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:shpe@university.edu"
              className="inline-flex items-center justify-center px-8 py-3 bg-accent hover:bg-accent-glow text-accent-foreground font-medium rounded-md transition-colors shadow-accent"
            >
              Learn About Elections
            </a>
            <a 
              href="#"
              className="inline-flex items-center justify-center px-8 py-3 border border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-medium rounded-md transition-colors"
            >
              View Requirements
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Board;