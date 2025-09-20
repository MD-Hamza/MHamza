import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowDown, Github, ExternalLink, Sparkles } from "lucide-react";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-primary/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(99,102,241,0.15),rgba(255,255,255,0))]"></div>
        <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:60px_60px]"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-primary/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 text-center z-10 relative">
        <div className="mb-6 flex justify-center">
          <Badge variant="secondary" className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
            <Sparkles className="w-3 h-3 mr-1" />
            Available for opportunities
          </Badge>
        </div>

        <h1 className="mb-6 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
          Muhammad Hamza
        </h1>
        <div className="mb-8">
          <h2 className="mb-4 bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
            Computer Science Graduate & Game Developer
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Passionate about creating innovative software solutions and immersive gaming experiences. 
            From University of Toronto with expertise in full-stack development, machine learning, 
            and interactive design.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg"
            onClick={() => scrollToSection('projects')}
            className="bg-gradient-to-r from-primary to-emerald-600 hover:from-primary/90 hover:to-emerald-600/90 text-white shadow-lg hover:shadow-primary/25 transition-all duration-300"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.open('https://github.com/MD-Hamza', '_blank')}
            className="border-2 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300"
          >
            <Github className="w-4 h-4 mr-2" />
            GitHub Profile
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.open('https://shankks.itch.io/', '_blank')}
            className="border-2 hover:border-orange-500 hover:text-orange-500 hover:bg-orange-500/5 transition-all duration-300"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Game Portfolio
          </Button>
        </div>

        <div className="flex justify-center items-center gap-6 mb-12">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Toronto, Canada
          </div>
          <div className="w-1 h-1 bg-muted-foreground/30 rounded-full"></div>
          <div className="text-sm text-muted-foreground">GPA: 3.99/4.0</div>
          <div className="w-1 h-1 bg-muted-foreground/30 rounded-full"></div>
          <div className="text-sm text-muted-foreground">Dean's List Scholar</div>
        </div>

        <button 
          onClick={() => scrollToSection('about')}
          className="animate-bounce text-primary hover:text-primary/80 transition-colors"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}