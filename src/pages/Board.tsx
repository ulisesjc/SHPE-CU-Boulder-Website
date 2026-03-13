import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";

const boardMembers = [
  {
    name: "Kevin Sanchez",
    position: "President",
    major: "Information Science",
    year: "Senior",
    linkedin: "https://www.linkedin.com/in/kevin-sanchez-507564249/",
    image: "/images/Sanchez_Kevin_Photo.jpg",
  },
  {
    name: "Eduardo Lopez Landeros",
    position: "Vice President",
    major: "Aerospace Engineering",
    year: "Senior",
    linkedin: "https://www.linkedin.com/in/eduardolopezl/",
    image: "/images/tato.jpg",
  },
  {
    name: "Bernadette Weigang",
    position: "Treasurer",
    major: "Aerospace Engineering",
    year: "Senior",
    linkedin: "https://www.linkedin.com/in/bernadette-weigang/",
    image: "/images/bern.jpg",
  },
  {
    name: "Rachel Zamora",
    position: "Secretary",
    major: "Biomedical Engineering",
    year: "Sophomore",
    linkedin: "https://www.linkedin.com/in/rachel-m-zamora/",
    image: "/images/rachel_headshot.jpg",
  },
  {
    name: "Ari Quezada Caro",
    position: "Engagement Coordinator",
    major: "Chemical Engineering",
    year: "Senior",
    linkedin: "https://www.linkedin.com/in/ariquezadacaro/",
    image: "/images/Ari_sPic.jpg",
  },
  {
    name: "Felipe Garza Cancino",
    position: "Public Relations",
    major: "Aerospace Engineering",
    year: "Senior",
    linkedin: "https://www.linkedin.com/in/felipegarzacancino/",
    image: "/images/Garza_Felipe.jpg",
  },
  {
    name: "Jose Alberto Saucedo",
    position: "Academic Chair",
    major: "Mechanical Engineering",
    year: "Senior",
    linkedin: "https://www.linkedin.com/in/jose-a-saucedo/",
    image: "/images/Saucedo_Jose_Photo.jpg",
  },
  {
    name: "Alan Ayala",
    position: "Outreach Coordinator",
    major: "Computer Science",
    year: "Junior",
    linkedin: "https://www.linkedin.com/in/alan-xa24/",
    image: "/images/Alan_Ayala_Photo.jpg",
  },
  {
    name: "Fernanda Arias Aguilar",
    position: "Social Media Coordinator",
    major: "Architectural Engineering",
    year: "Junior",
    linkedin: "https://www.linkedin.com/in/fernanda-arias-aguilar-894063280/",
    image: "/images/Fernanda_Photo.jpg",
  },
  {
    name: "Ulises Cortez",
    position: "Webmaster",
    major: "Computer Science",
    year: "Junior",
    linkedin: "https://www.linkedin.com/in/ulisesjc/",
    image: "/images/Cortez_Ulises_Photo.jpeg",
  },
  {
    name: "Isai Marcial",
    position: "Historian",
    major: "Mechanical Engineering",
    year: "Sophomore",
    linkedin: null,
    image: "/images/isai.png",
  },
  {
    name: "Nallely Saucedo",
    position: "Professional Development",
    major: "Chemical Engineering",
    year: "Senior",
    linkedin: "https://www.linkedin.com/in/nallely-saucedo-099977251/",
    image: "/images/Saucedo_Nallely_Photo.jpg",
  },
];

const Board = () => {
  return (
    <div className="min-h-screen bg-background pt-16">
      <Navigation />

      {/* Hero Section */}
      <section className="py-10 bg-hero-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-primary-foreground animate-fade-in">
            2025–2026 Leadership Team
          </h1>
        </div>
      </section>

      {/* Board Members */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {boardMembers.map((member) => (
              <div
                key={member.name}
                className="bg-card border border-border rounded-xl p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="w-28 h-28 rounded-full object-cover mb-4 border-2 border-accent/30"
                />
                <p className="font-semibold text-foreground">{member.name}</p>
                <Badge variant="secondary" className="mt-1 mb-3">
                  {member.position}
                </Badge>
                <p className="text-sm text-muted-foreground">{member.major}</p>
                <p className="text-sm text-muted-foreground mb-4">{member.year}</p>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-accent hover:underline"
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Board;
