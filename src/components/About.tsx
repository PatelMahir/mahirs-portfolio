import { Code2, Brain, Users } from "lucide-react";
import mahirPhoto from "@/assets/mahir-photo.jpg";

const About = () => {
  const features = [
    {
      icon: Code2,
      title: "Speed & Quality",
      description: "Rapid development without compromising code quality. I deliver working prototypes and MVPs quickly using battle-tested tools and frameworks."
    },
    {
      icon: Brain,
      title: "Scalable Architecture",
      description: "Building solutions that grow with your business. Clean, maintainable code and infrastructure that handles increasing demands."
    },
    {
      icon: Users,
      title: "Reliability & Clarity",
      description: "On-time delivery, transparent communication, and ongoing support. You'll always know where your project stands."
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
            About Me
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mb-8">
              <div className="flex-shrink-0">
                <img 
                  src={mahirPhoto} 
                  alt="Mahir Patel" 
                  className="w-48 h-48 rounded-2xl object-cover border-4 border-primary/20 shadow-glow"
                />
              </div>
              <div className="flex-1 lg:text-left text-center">
                <p className="text-lg text-muted-foreground mb-4">
                  I partner with early-stage startups and small businesses to transform ideas into 
                  production-ready web and mobile applications. With 4+ years of experience, I focus 
                  on delivering MVPs and scalable products that drive real business value.
                </p>
                <p className="text-lg text-muted-foreground">
                  My approach combines speed with quality—using proven tech stacks like React, Node.js, 
                  and Flutter to build reliable, maintainable solutions. I prioritize clear communication, 
                  on-time delivery, and architecture that grows with your business.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card-hover rounded-2xl p-8 text-center">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl">
                <feature.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;