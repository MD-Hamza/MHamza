import { Github, Mail, Gamepad2, Heart, ArrowUp } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-background to-muted/30 border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-medium text-sm">MH</span>
              </div>
              <h3>Muhammad Hamza</h3>
            </div>
            <p className="text-muted-foreground">Computer Science Graduate & Game Developer</p>
            <p className="text-muted-foreground text-sm mt-1">Building the future, one line of code at a time</p>
          </div>
          
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => window.open('https://github.com/MD-Hamza', '_blank')}
                className="w-10 h-10 bg-muted/50 hover:bg-primary/10 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-200"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </button>
              <button 
                onClick={() => window.open('mailto:muhammad.hamza@mail.utoronto.ca', '_blank')}
                className="w-10 h-10 bg-muted/50 hover:bg-blue-500/10 rounded-lg flex items-center justify-center text-muted-foreground hover:text-blue-500 transition-all duration-200"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </button>
              <button 
                onClick={() => window.open('https://shankks.itch.io/', '_blank')}
                className="w-10 h-10 bg-muted/50 hover:bg-orange-500/10 rounded-lg flex items-center justify-center text-muted-foreground hover:text-orange-500 transition-all duration-200"
                aria-label="itch.io"
              >
                <Gamepad2 className="w-5 h-5" />
              </button>
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="hover:border-primary hover:text-primary transition-all duration-200"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to top
            </Button>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="flex items-center justify-center gap-2 text-muted-foreground">
            Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> by Muhammad Hamza © 2025
          </p>
        </div>
      </div>
    </footer>
  );
}