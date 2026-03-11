import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, ExternalLink } from "lucide-react";

// Type declaration for Instagram embed API
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

const Events = () => {
  // Load Instagram embed script
  useEffect(() => {
    // Check if script already exists
    if (document.querySelector('script[src="https://www.instagram.com/embed.js"]')) {
      // Script already loaded, just process embeds
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
      return;
    }

    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = () => {
      // Process embeds after script loads
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };
    document.body.appendChild(script);
  }, []);

  // Google Calendar embed URL - Replace with your actual Google Calendar public URL
  // To get your calendar URL: Google Calendar > Settings > Integrate calendar > Copy the iframe src
  const googleCalendarUrl = "https://calendar.google.com/calendar/embed?src=545596a6a70f9b818f8dc47f93ef33138ff5a9b6334a0381ac03352755dc3dd6%40group.calendar.google.com&ctz=America%2FDenver";

  // Instagram post IDs - Replace with your actual Instagram post IDs
  // Format: Extract the post ID from the Instagram URL (e.g., from https://www.instagram.com/p/DOEb3TpDg57/, the ID is DOEb3TpDg57)
  const instagramPosts = [
    "DVuFc8bibz2", // Replace with actual post IDs
    // Add more post IDs as needed
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-12 pt-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            SHPE Events
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join us for professional development, networking, and career opportunities. Every other Wednesday at 6:00 PM in the Campos Student Center.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Google Calendar */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <CardHeader className="flex flex-row items-center justify-between p-0 mb-6">
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="h-6 w-6 text-accent" />
                  Event Calendar
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
              <div className="h-96 md:h-[600px] rounded-md overflow-hidden border border-border">
                <iframe
                  src={googleCalendarUrl}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  className="w-full h-full"
                  title="SHPE Events Calendar"
                ></iframe>
              </div>
            </Card>
          </div>

          {/* Upcoming Events Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Instagram Posts */}
                {instagramPosts.length > 0 ? (
                  instagramPosts.map((postId, index) => (
                    <div key={index} className="flex justify-center">
                      <blockquote
                        className="instagram-media"
                        data-instgrm-permalink={`https://www.instagram.com/p/${postId}/`}
                        data-instgrm-version="14"
                        style={{
                          background: "#FFF",
                          border: "0",
                          borderRadius: "12px",
                          boxShadow: "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
                          margin: "1px",
                          maxWidth: "100%",
                          minWidth: "326px",
                          padding: "0",
                          width: "calc(100% - 2px)",
                        }}
                      ></blockquote>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <p>No upcoming events posted yet.</p>
                    <p className="text-sm mt-2">Check back soon for updates!</p>
                  </div>
                )}
              </CardContent>
            </Card>


            <Card className="bg-hero-gradient text-primary-foreground">
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
      </main>

      <Footer />
    </div>
  );
};

export default Events;
