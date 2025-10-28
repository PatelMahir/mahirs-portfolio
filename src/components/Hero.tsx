import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden hero-glow">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 float">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display">
              Full-Stack 
              <span className="text-gradient-primary block mt-2">
                Web & Mobile
              </span>
              <span className="text-gradient-accent block mt-2">
                App Developer
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Helping early-stage startups and small businesses build web and mobile applications with React, Node.js, and Flutter. Delivering speed, quality, and scalable architecture.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="btn-hero px-8 py-6 text-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Talk About Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="btn-accent px-8 py-6 text-lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground mb-4">Trusted by startups and small businesses</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="h-12 w-24 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg flex items-center justify-center text-xs font-semibold">
                STARTUPS
              </div>
              <div className="h-12 w-24 bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg flex items-center justify-center text-xs font-semibold">
                SMBs
              </div>
              <div className="h-12 w-24 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg flex items-center justify-center text-xs font-semibold">
                AGENCIES
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;