import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, GraduationCap, MapPin } from "lucide-react";
import kevin from "@/assets/Sanchez_Kevin_Photo.jpg";
import fernanda from "@/assets/Fernanda_Photo.jpg";
import nallely from "@/assets/mainpage.jpeg";
import rachel from "@/assets/rachel_headshot.jpg";
import alan from "@/assets/Alan_Ayala_Photo.jpg";
import isai from "@/assets/mainpage.jpeg";
import ulises from "@/assets/Cortez_Ulises_Photo.jpeg";
import ari from "@/assets/Ari_s Pic.jpeg";
import tato from "@/assets/IMG_0867.jpg";
import bernadette from "@/assets/IMG_7071(1).JPG";
import jose from "@/assets/Saucedo_Jose_Photo.jpg";
import felipe from "@/assets/Garca_Felipe.jpg";



const Board = () => {
  const boardMembers = [
    {
      name: "Kevin Sanchez",
      position: "President",
      major: "Information Science",
      year: "Senior",
      email: "maria.r@university.edu",
      linkedin: "#",
      image: kevin
    },
    {
      name: "Eduardo Lopez Landeros",
      position: "Vice President",
      major: "Aerospace Engineering",
      year: "Senior", 
      email: "carlos.m@university.edu",
      linkedin: "#",
      image: tato
    },
    {
      name: "Rachel Zamora",
      position: "Secretary",
      major: "Biomedical Engineering",
      year: "Sophomore",
      email: "isabella.g@university.edu",
      linkedin: "#",
      image: rachel
    },
    {
      name: "Bernadette Weigang",
      position: "Treasurer",
      major: "Aerospace Engineering",
      year: "Senior",
      location: "Dallas, TX",
      bio: "Expertise in operations research and supply chain optimization. Ford Motor Company intern.",
      email: "diego.h@university.edu",
      linkedin: "#",
      image: bernadette
    },
    {
      name: "Felipe Garza Cancino",
      position: "Public Relations",
      major: "Aerospace Engineering",
      year: "Senior",
      email: "sofia.l@university.edu",
      linkedin: "#",
      image: felipe
    },
    {
      name: "Fernanda Arias Aguilar",
      position: "Social Media Coordinator",
      major: "Architectual Engineering",
      year: "Junior",
      email: "miguel.t@university.edu",
      linkedin: "#",
      image: fernanda
    },
    {
      name: "Jose Alberto Saucedo",
      position: "Mechanical Engineering",
      major: "Chemical Engineering",
      year: "Senior",
      email: "ana.m@university.edu",
      linkedin: "#",
      image: jose
    },
    {
      name: "Alan Ayala",
      position: "Outreach Coordinator",
      major: "Computer Science",
      year: "Junior",
      email: "roberto.g@university.edu",
      linkedin: "#",
      image: alan
    },
    {
      name: "Ulises Cortez",
      position: "Webmaster",
      major: "Computer Science Engineering",
      year: "Junior",
      email: "valeria.r@university.edu",
      linkedin: "#",
      image: ulises
    },
    {
      name: "Nallely Saucedo",
      position: "Professional Development",
      major: "Software Engineering",
      year: "Junior",
      email: "luis.v@university.edu",
      linkedin: "#",
      image: nallely
    },
    {
      name: "Ari Quezada Caro",
      position: "Engagement Coordinator",
      major: "Chemical Engineering",
      year: "Senior",
      email: "luis.v@university.edu",
      linkedin: "#",
      image: ari
    },
    {
      name: "Isai Marcial",
      position: "Historian",
      major: "Mechanical Engineer",
      year: "Sophomore",
      email: "luis.v@university.edu",
      linkedin: "#",
      image:ari
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