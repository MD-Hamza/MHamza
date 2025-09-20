import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github, Users, Zap, Brain, Image, Rocket, Code2 } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "r/place Clone (Scribble)",
      description: "Built a serverless real-time collaborative drawing platform using Lambda WebSocket APIs, Redis, and DynamoDB. Implemented client-side architecture with SQS queue for reliable event handling and pixel broadcasting.",
      icon: <Users className="w-6 h-6" />,
      technologies: ["AWS Lambda", "API Gateway", "Redis", "DynamoDB", "SQS", "CloudFront", "Python", "Docker"],
      highlights: [
        "Stored recent user sessions and base64-encoded canvas images in Redis",
        "Served static content via S3 CloudFront with a delivery and pixel read access time policies",
        "Deployed infrastructure in a multi-AZ VPC with NAT Gateways and a Network Load Balancer"
      ],
      gradient: "from-emerald-500 to-green-500",
      bgGradient: "from-emerald-500/10 to-green-500/10"
    },
    {
      title: "Lingo For Life",
      description: "Created a Language learning app for healthcare workers. Developed a React-TypeScript chatbot and handwriting assistant, trained and incorporated an encoder-decoder RNN model using attention to detect grammatical errors.",
      icon: <Brain className="w-6 h-6" />,
      technologies: ["React", "TypeScript", "TailWind CSS", "Django", "PyTorch", "Redis"],
      highlights: [
        "Trained RNN model with attention mechanism for error detection",
        "Designed RESTful APIs using Django and React",
        "Developed database caching using Redis and Celery"
      ],
      gradient: "from-green-500 to-teal-500",
      bgGradient: "from-green-500/10 to-teal-500/10"
    },
    {
      title: "RoadAI - Car Collision Detection System",
      description: "Engineered an intersection safety system that detects car collisions and alerts emergency services via Twilio API. Integrated real-time processing of surveillance frames and executed sound via Arduino hardware.",
      icon: <Zap className="w-6 h-6" />,
      technologies: ["Python", "React", "Twilio", "AWS", "Flask", "Arduino"],
      highlights: [
        "Integrated Arduino hardware to trigger physical flashing lights",
        "Interfaced with Arduino hardware and web interface",
        "Developed a Flask-based backend for remote access and scalability"
      ],
      gradient: "from-lime-500 to-emerald-500",
      bgGradient: "from-lime-500/10 to-emerald-500/10"
    },
    {
      title: "ImageRecog - Computer Vision System",
      description: "Created an image classifier using the Naive Bayes algorithm, trained with Maximum Likelihood Estimation (MLE). Developed modular and command-line pattern with SOLID design principles for modular and object-oriented software design.",
      icon: <Image className="w-6 h-6" />,
      technologies: ["Python", "Probabilistic Learning", "Git", "NumPy", "SpringBoot"],
      highlights: [
        "Collaborated in a team of four making use of the Agile Development Cycle",
        "Applied the Visitor and Command design patterns with SOLID design principles",
        "Created unit tests using JUnit and integrated them into the CI/CD pipeline"
      ],
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/10 to-emerald-500/10"
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-primary/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
            <Rocket className="w-3 h-3 mr-1" />
            Featured Projects
          </Badge>
          <h2 className="mb-4">Bringing Ideas to Life</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A showcase of innovative solutions spanning full-stack development, machine learning, and interactive systems
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group h-full border-0 shadow-lg bg-gradient-to-br from-card to-card/50 hover:shadow-xl transition-all duration-500 relative overflow-hidden">
              {/* Hover gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <CardHeader className="relative">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6 relative">
                <div>
                  <h4 className="mb-3 flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-primary" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="bg-muted/50 hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="mb-3 flex items-center gap-2">
                    <Rocket className="w-4 h-4 text-primary" />
                    Key Highlights
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto border-0 shadow-lg bg-gradient-to-br from-card to-card/50">
            <CardContent className="p-8">
              <h3 className="mb-4">Explore More of My Work</h3>
              <p className="text-muted-foreground mb-6">
                These projects represent just a glimpse of my technical journey. Visit my GitHub for complete source code 
                and my itch.io for interactive gaming experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.open('https://github.com/MD-Hamza', '_blank')}
                  className="bg-gradient-to-r from-primary to-emerald-600 hover:from-primary/90 hover:to-emerald-600/90 text-white shadow-lg hover:shadow-primary/25 transition-all duration-300"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View GitHub Profile
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => window.open('https://shankks.itch.io/', '_blank')}
                  className="border-2 hover:border-orange-500 hover:text-orange-500 hover:bg-orange-500/5 transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Game Portfolio on itch.io
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}