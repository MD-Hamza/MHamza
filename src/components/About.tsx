import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { GraduationCap, Award, Star, Trophy } from "lucide-react";
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/30"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-emerald-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
            <Star className="w-3 h-3 mr-1" />
            About Me
          </Badge>
          <h2 className="mb-4">Building the Future Through Code</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A journey of academic excellence, practical innovation, and creative problem-solving
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-card/50 hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-emerald-600 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-lg">Bachelor of Science in Computer Science</h4>
                      <p className="text-primary">University of Toronto</p>
                      <p className="text-muted-foreground">Minor in Mathematics</p>
                    </div>
                    <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
                      GPA: 3.99/4.0
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Sep 2021 - June 2025
                  </div>
                </div>
                
                <div className="pt-4 border-t border-border/50">
                  <p className="text-muted-foreground mb-3">Relevant Courses:</p>
                  <div className="flex flex-wrap gap-2">
                    {["Operating Systems", "Neural Networks", "Deep Learning", "Video Game Design", "Algorithm Design", "Scalable Computing"].map((course) => (
                      <Badge key={course} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-card/50 hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  Awards & Recognition
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    title: "Trenwith Computer Science Award (2025)",
                    description: "In-Campus scholarship granted annually to one top undergraduate student",
                    icon: <Trophy className="w-4 h-4 text-yellow-500" />
                  },
                  {
                    title: "Dean's List Scholar (2022 - 2025)",
                    description: "Cumulative GPA of 3.50 or after completion of a year",
                    icon: <Star className="w-4 h-4 text-emerald-400" />
                  },
                  {
                    title: "University of Toronto Honor Roll (2022)",
                    description: "Awarded to students who are in good academic standing",
                    icon: <Star className="w-4 h-4 text-green-400" />
                  },
                  {
                    title: "University of Toronto Scholar's Award (2021)",
                    description: "Scholarship recognizing the most outstanding students to apply",
                    icon: <Star className="w-4 h-4 text-green-500" />
                  }
                ].map((award, index) => (
                  <div key={index} className="flex gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                    <div className="mt-1">{award.icon}</div>
                    <div>
                      <h4 className="text-sm font-medium">{award.title}</h4>
                      <p className="text-muted-foreground text-sm">{award.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-emerald-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1618255630366-f402c45736f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwdG9yb250byUyMGNhbXB1c3xlbnwxfHx8fDE3NTcwNTQ1OTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="University campus"
                className="relative w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            
            <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-card/50">
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl">My Journey</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm a passionate computer science graduate from the University of Toronto with a strong 
                    foundation in software development, algorithms, and machine learning. My academic journey 
                    has been marked by consistent excellence, maintaining a <span className="text-primary font-medium">3.99 GPA</span> while exploring diverse 
                    areas of computer science.
                  </p>
                  <p>
                    Beyond traditional software development, I have a keen interest in <span className="text-emerald-400 font-medium">game development</span> and 
                    have created several games available on itch.io. I enjoy the creative challenge of 
                    combining technical skills with storytelling and user experience design.
                  </p>
                  <p>
                    As a <span className="text-green-400 font-medium">Teaching Assistant</span> at UofT, I've helped hundreds of students understand complex 
                    programming concepts, developing strong communication skills and a deep understanding 
                    of computer science fundamentals.
                  </p>
                </div>
                
                <div className="mt-6 pt-6 border-t border-border/50">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-medium text-primary">3.99</div>
                      <div className="text-sm text-muted-foreground">GPA</div>
                    </div>
                    <div>
                      <div className="text-2xl font-medium text-emerald-400">9</div>
                      <div className="text-sm text-muted-foreground">Courses TA'd</div>
                    </div>
                    <div>
                      <div className="text-2xl font-medium text-green-400">4</div>
                      <div className="text-sm text-muted-foreground">Awards</div>
                    </div>
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