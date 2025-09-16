import { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, Clock, MapPin } from "lucide-react";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const Events = () => {
  const [view, setView] = useState<'month' | 'agenda'>('month');

  const events = [
    {
      id: 1,
      title: "General Meeting",
      start: new Date(2024, 2, 15, 18, 0),
      end: new Date(2024, 2, 15, 19, 30),
      location: "Engineering Building Room 205",
      description: "Monthly general meeting discussing upcoming events and initiatives."
    },
    {
      id: 2,
      title: "Resume Workshop",
      start: new Date(2024, 2, 22, 17, 0),
      end: new Date(2024, 2, 22, 19, 0),
      location: "Career Services Center",
      description: "Professional development workshop on resume building and interview skills."
    },
    {
      id: 3,
      title: "Networking Event",
      start: new Date(2024, 2, 28, 18, 30),
      end: new Date(2024, 2, 28, 21, 0),
      location: "Student Union Ballroom",
      description: "Connect with industry professionals and alumni."
    },
    {
      id: 4,
      title: "Community Service",
      start: new Date(2024, 3, 5, 9, 0),
      end: new Date(2024, 3, 5, 13, 0),
      location: "Local Elementary School",
      description: "STEM outreach program for local elementary students."
    }
  ];

  const upcomingEvents = events
    .filter(event => event.start > new Date())
    .sort((a, b) => a.start.getTime() - b.start.getTime())
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 animate-fade-in">
            SHPE Events
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Join us for professional development, networking, and community engagement opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calendar */}
          <div className="lg:col-span-2">
            <Card className="p-6 animate-fade-in">
              <CardHeader className="flex flex-row items-center justify-between p-0 mb-6">
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="h-6 w-6 text-accent" />
                  Event Calendar
                </CardTitle>
                <div className="flex gap-2">
                  <Button
                    variant={view === 'month' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setView('month')}
                  >
                    Month
                  </Button>
                  <Button
                    variant={view === 'agenda' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setView('agenda')}
                  >
                    Agenda
                  </Button>
                </div>
              </CardHeader>
              <div className="h-96 md:h-[500px]">
                <Calendar
                  localizer={localizer}
                  events={events}
                  startAccessor="start"
                  endAccessor="end"
                  view={view}
                  onView={setView}
                  style={{ height: '100%' }}
                  className="bg-background text-foreground [&_.rbc-calendar]:bg-background [&_.rbc-header]:bg-secondary [&_.rbc-header]:text-secondary-foreground [&_.rbc-event]:bg-accent [&_.rbc-event]:text-accent-foreground [&_.rbc-today]:bg-accent/10"
                />
              </div>
            </Card>
          </div>

          {/* Upcoming Events Sidebar */}
          <div className="space-y-6">
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Instagram Post 1 */}
              <iframe
                src="https://www.instagram.com/p/C9kxxxxxx/embed"
                width="100%"
                height="500"
                frameBorder="0"
                scrolling="no"
                allowTransparency
                allow="encrypted-media"
                className="rounded-md"
              ></iframe>

              {/* Instagram Post 2 */}
              <iframe
                src="https://www.instagram.com/p/C8jyyyyyy/embed"
                width="100%"
                height="500"
                frameBorder="0"
                scrolling="no"
                allowTransparency
                allow="encrypted-media"
                className="rounded-md"
              ></iframe>
            </CardContent>
          </Card>

          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full bg-accent hover:bg-accent-glow text-accent-foreground">
                Submit Event Proposal
              </Button>
              <Button variant="outline" className="w-full">
                Subscribe to Updates
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-hero-gradient text-primary-foreground animate-fade-in">
            <CardContent className="p-6 text-center">
              <h3 className="font-bold mb-2">Stay Connected</h3>
              <p className="text-sm mb-4 opacity-90">
                Follow our social media for real-time updates and announcements
              </p>
              <a
                href="https://www.instagram.com/cuboulder_shpemaes/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" size="sm">
                  Follow Us
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
    </div>
      </main >

  <Footer />
    </div >
  );
};

export default Events;