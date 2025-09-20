import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Code, Wrench, Cloud, Database, TrendingUp, Zap } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-5 h-5" />,
      skills: ["Java", "Python", "C/C++", "C#", "JavaScript", "HTML/CSS", "Lua", "Racket", "Haskell", "Shell scripting", "SQL", "PHP"],
      gradient: "from-emerald-500 to-green-500",
      bgGradient: "from-emerald-500/10 to-green-500/10"
    },
    {
      title: "Frameworks & Libraries",
      icon: <Wrench className="w-5 h-5" />,
      skills: ["Node.js", "Flask", "Django", "JUnit", "WordPress", "React", "Laravel", "TensorFlow/PyTorch", "Docker", "Unity"],
      gradient: "from-green-500 to-teal-500",
      bgGradient: "from-green-500/10 to-teal-500/10"
    },
    {
      title: "Developer Tools",
      icon: <Cloud className="w-5 h-5" />,
      skills: ["Git", "Google Cloud Platform", "VS Code", "Visual Studio", "PyCharm", "IntelliJ", "Eclipse", "Figma", "Adobe CC"],
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/10 to-emerald-500/10"
    },
    {
      title: "Systems & Databases",
      icon: <Database className="w-5 h-5" />,
      skills: ["Linux (Ubuntu/Kali)", "AWS", "Redis", "DynamoDB", "MySQL", "PostgreSQL", "MongoDB", "Docker", "CI/CD"],
      gradient: "from-lime-500 to-emerald-500",
      bgGradient: "from-lime-500/10 to-emerald-500/10"
    }
  ];

  const learningSkills = [
    { name: "Kubernetes", color: "emerald" },
    { name: "GraphQL", color: "green" },
    { name: "Rust", color: "lime" },
    { name: "Go", color: "teal" },
    { name: "Unreal Engine", color: "emerald" },
    { name: "WebGL", color: "green" }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/30"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-l from-primary/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
            <Zap className="w-3 h-3 mr-1" />
            Technical Skills
          </Badge>
          <h2 className="mb-4">Tools & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A comprehensive toolkit spanning multiple domains of software development and engineering
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group border-0 shadow-lg bg-gradient-to-br from-card to-card/50 hover:shadow-xl transition-all duration-500 relative overflow-hidden">
              {/* Hover gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <CardHeader className="relative">
                <CardTitle className="flex items-center gap-3">
                  <div className={`w-10 h-10 bg-gradient-to-br ${category.gradient} rounded-lg flex items-center justify-center text-white shadow-lg`}>
                    {category.icon}
                  </div>
                  <span className="group-hover:text-primary transition-colors">
                    {category.title}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="bg-muted/50 hover:bg-primary/10 hover:text-primary transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <Card className="max-w-4xl mx-auto border-0 shadow-lg bg-gradient-to-br from-card to-card/50">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-medium">Currently Learning</span>
                </div>
                <h3 className="mb-4">Expanding My Horizons</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm always expanding my skillset and staying current with the latest technologies. 
                  Currently, I'm diving deeper into advanced machine learning techniques, cloud architecture patterns, 
                  and modern game development frameworks.
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3">
                {learningSkills.map((skill) => (
                  <Badge 
                    key={skill.name} 
                    variant="outline" 
                    className={`
                      border-2 px-4 py-2 hover:shadow-lg transition-all duration-200 cursor-default
                      ${skill.color === 'emerald' ? 'border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10' : ''}
                      ${skill.color === 'green' ? 'border-green-500/30 text-green-400 hover:bg-green-500/10' : ''}
                      ${skill.color === 'lime' ? 'border-lime-500/30 text-lime-400 hover:bg-lime-500/10' : ''}
                      ${skill.color === 'teal' ? 'border-teal-500/30 text-teal-400 hover:bg-teal-500/10' : ''}
                    `}
                  >
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}