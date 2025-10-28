import { 
  Smartphone, 
  Code2, 
  Database, 
  Zap,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "MVP Development",
      description: "Launch your product fast with a fully functional MVP. Get to market quickly with a solid foundation that validates your idea and attracts early users.",
      features: ["Rapid Prototyping", "Core Feature Focus", "User Feedback Integration", "Iterative Development"]
    },
    {
      icon: Smartphone,
      title: "Cross-Platform Mobile Apps",
      description: "iOS and Android apps from a single codebase using React Native or Flutter. Native performance, reduced development time, and consistent user experience.",
      features: ["React Native & Flutter", "iOS & Android", "App Store Publishing", "Push Notifications"]
    },
    {
      icon: Database,
      title: "API & Backend Development",
      description: "Robust backend infrastructure with RESTful APIs, authentication, database design, and third-party integrations. Secure, scalable, and well-documented.",
      features: ["REST & GraphQL APIs", "Authentication & Security", "Database Architecture", "Third-party Integration"]
    },
    {
      icon: Code2,
      title: "UI/UX Optimization",
      description: "Transform your app's user experience with modern, responsive interfaces. I'll refine your design, improve performance, and ensure accessibility.",
      features: ["Responsive Design", "Performance Tuning", "Accessibility Standards", "Modern UI Patterns"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-accent">
            Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From idea to launch, I deliver the core services that turn your vision into a working product. 
            Fast, reliable, and built to scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="card-hover rounded-2xl p-8">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-4">
                  <service.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
              </div>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-block p-8 card-hover rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Build Your Next App?</h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-xl">
              Let's discuss your project and explore how I can help bring your idea to life with speed, quality, and scalable architecture.
            </p>
            <Button 
              size="lg" 
              className="btn-hero px-8 py-6 text-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;