import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, Users, TrendingUp } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="mb-12 text-center">Experience</h2>
        
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Teaching Assistant</CardTitle>
                  <p className="text-muted-foreground">University of Toronto</p>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>Sep 2022 - Apr 2025</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <Badge>CSC108</Badge>
                <Badge>CSC148</Badge>
                <Badge>CSC236</Badge>
                <Badge>MAT224</Badge>
                <Badge>CSC209</Badge>
                <Badge>CSC263</Badge>
                <Badge>MAT102</Badge>
                <Badge>MAT223</Badge>
                <Badge>CSC358</Badge>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-medium">500% Improvement</p>
                    <p className="text-muted-foreground">Reduced grading time using Python unit tests and Selenium</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-medium">30+ Students</p>
                    <p className="text-muted-foreground">Organized practicals for classes averaging 30+ students</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-medium">Weekly Mentoring</p>
                    <p className="text-muted-foreground">Mentored students on implementing data structures</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4>Key Responsibilities & Achievements:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Created automated grading scripts using <strong>Python</strong> unittest, reducing grading time by <strong>500%</strong></li>
                  <li>• Designed course material on networking concepts including <strong>TCP/IP, DHCP, DNS</strong>, and packet analysis using <strong>Wireshark</strong></li>
                  <li>• Mentored students on implementing <strong>a shell in C</strong> and using <strong>GDB</strong> for debugging during weekly office hours</li>
                  <li>• Organized practicals for classes averaging <strong>30+ students</strong> on topics such as <strong>data structures, systems programming, object-oriented programming, unit testing</strong>, and <strong>complexity analysis</strong></li>
                  <li>• Developed worksheets demonstrating the use of <strong>preconditions, postconditions</strong>, and <strong>loop invariants</strong> to teach formal methods of proving software correctness</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}