import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

const Board = () => {
  const [selectedYear, setSelectedYear] = useState("2024-2025");

  const boardMembers = [
    {
      name: "Carlos Mendoza",
      position: "PRESIDENT",
      major: "Electrical Engineering",
      year: "Senior",
      bgColor: "bg-orange-400",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Sofia Herrera",
      position: "VICE PRESIDENT", 
      major: "Computer Science",
      year: "Junior",
      bgColor: "bg-teal-400",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Diego Martinez",
      position: "SECRETARY",
      major: "Mechanical Engineering", 
      year: "Sophomore",
      bgColor: "bg-gray-400",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Ana Gutierrez",
      position: "TREASURER",
      major: "Industrial Engineering",
      year: "Senior", 
      bgColor: "bg-green-400",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-foreground mb-8">
              &lt; Meet The Board /&gt;
            </h1>
            
            {/* Year Selector */}
            <div className="flex justify-center gap-4 mb-12">
              <Button
                variant={selectedYear === "2023-2024" ? "outline" : "ghost"}
                onClick={() => setSelectedYear("2023-2024")}
                className="px-6 py-2 text-muted-foreground hover:text-foreground"
              >
                2023-2024
              </Button>
              <Button
                variant={selectedYear === "2024-2025" ? "default" : "ghost"}
                onClick={() => setSelectedYear("2024-2025")}
                className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white"
              >
                2024-2025
              </Button>
            </div>
          </div>

          {/* Board Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {boardMembers.map((member, index) => (
              <Card 
                key={member.name}
                className="overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group border-0"
              >
                <div className={`${member.bgColor} p-8 flex items-center justify-center`}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 object-cover border-4 border-white shadow-lg"
                  />
                </div>
                <CardContent className="p-6 text-left bg-white">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      {member.name}
                    </h3>
                    <Linkedin className="h-4 w-4 text-blue-600" />
                  </div>
                  <p className="text-gray-600 text-sm mb-1">
                    {member.major}
                  </p>
                  <p className="text-red-600 font-semibold text-sm mb-1">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {member.year}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Board;