import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Mail, Github, ExternalLink, Gamepad2, Linkedin, MessageCircle, MapPin, Clock } from "lucide-react";
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Contact() {
  const contactLinks = [
    {
      title: "Email",
      value: "muhammad.hamza@mail.utoronto.ca",
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:muhammad.hamza@mail.utoronto.ca",
      description: "Get in touch for opportunities or collaborations",
      gradient: "from-emerald-500 to-green-500",
      hoverColor: "hover:border-emerald-500 hover:text-emerald-400 hover:bg-emerald-500/5"
    },
    {
      title: "GitHub",
      value: "github.com/MD-Hamza",
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/MD-Hamza",
      description: "Check out my code and open source contributions",
      gradient: "from-gray-700 to-gray-900",
      hoverColor: "hover:border-gray-700 hover:text-gray-700 hover:bg-gray-700/5"
    },
    {
      title: "LinkedIn",
      value: "LinkedIn Profile",
      icon: <Linkedin className="w-5 h-5" />,
      href: "#",
      description: "Connect with me professionally",
      gradient: "from-blue-600 to-blue-800",
      hoverColor: "hover:border-blue-600 hover:text-blue-600 hover:bg-blue-600/5"
    },
    {
      title: "itch.io",
      value: "shankks.itch.io",
      icon: <Gamepad2 className="w-5 h-5" />,
      href: "https://shankks.itch.io/",
      description: "Play my games and see my creative projects",
      gradient: "from-red-500 to-pink-500",
      hoverColor: "hover:border-red-500 hover:text-red-500 hover:bg-red-500/5"
    }
  ];

  const interests = [
    "Full-stack development opportunities",
    "Game development projects",
    "Machine learning applications",
    "Open source collaborations",
    "Teaching and mentoring roles"
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background"></div>
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-to-t from-primary/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
            <MessageCircle className="w-3 h-3 mr-1" />
            Get In Touch
          </Badge>
          <h2 className="mb-4">Let's Build Something Amazing</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ready to collaborate on your next project or explore new opportunities together
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-card/50">
              <CardContent className="p-8">
                <h3 className="mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                  Let's Work Together
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I'm always interested in new opportunities, whether it's software development roles, 
                  game development projects, or collaborative ventures. If you have an exciting project 
                  or just want to chat about technology, feel free to reach out!
                </p>
                
                <div className="space-y-4">
                  <h4 className="text-primary">I'm particularly interested in:</h4>
                  <div className="space-y-2">
                    {interests.map((interest, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{interest}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {contactLinks.map((link, index) => (
                <Card key={index} className="group border-0 shadow-lg bg-gradient-to-br from-card to-card/50 hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-3">
                      <div className={`w-10 h-10 bg-gradient-to-br ${link.gradient} rounded-lg flex items-center justify-center text-white shadow-lg`}>
                        {link.icon}
                      </div>
                      <span className="group-hover:text-primary transition-colors">
                        {link.title}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{link.description}</p>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className={`w-full transition-all duration-300 ${link.hoverColor}`}
                      onClick={() => window.open(link.href, '_blank')}
                    >
                      {link.value}
                      <ExternalLink className="w-3 h-3 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1730204786974-86d71b73296f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBkZXZlbG9wbWVudCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTcwNTQ1OTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Development workspace"
                className="relative w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            
            <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-card/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <h4>Open to Opportunities</h4>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I'm currently seeking full-time opportunities in software development, 
                  with a particular interest in roles that combine my technical skills 
                  with my passion for creating engaging user experiences.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">Based in Toronto, Canada</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-green-500/10 text-green-600 border-green-500/20">
                      Available for Full-time
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-500/10 text-blue-600 border-blue-500/20">
                      Remote Friendly
                    </Badge>
                    <Badge variant="secondary" className="bg-purple-500/10 text-purple-600 border-purple-500/20">
                      Toronto Based
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

