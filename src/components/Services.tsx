import { 
  Globe, 
  Smartphone, 
  Code2, 
  Database, 
  Wrench, 
  Zap 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Custom Web Development",
      description: "Full-stack web applications built with modern frameworks like React, Vue.js, and Node.js. Responsive, fast, and SEO-optimized.",
      features: ["Responsive Design", "Performance Optimization", "SEO Implementation", "Modern UI/UX"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native iOS and Android apps, plus cross-platform solutions. User-friendly interfaces with robust backend integration.",
      features: ["iOS Development", "Android Development", "App Store Deployment", "User Analytics"]
    },
    {
      icon: Code2,
      title: "Cross-Platform Solutions",
      description: "React Native and Flutter applications that work seamlessly across multiple platforms while maintaining native performance.",
      features: ["React Native", "Flutter", "Code Sharing", "Platform Optimization"]
    },
    {
      icon: Database,
      title: "API Development & Integration",
      description: "RESTful APIs, GraphQL endpoints, and third-party integrations. Secure, scalable, and well-documented backend services.",
      features: ["REST APIs", "GraphQL", "Third-party Integration", "API Documentation"]
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      description: "Ongoing maintenance, bug fixes, feature updates, and technical support to keep your applications running smoothly.",
      features: ["Bug Fixes", "Feature Updates", "Performance Monitoring", "Technical Support"]
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed up your existing applications with performance audits, code optimization, and infrastructure improvements.",
      features: ["Performance Audits", "Code Optimization", "Database Tuning", "Infrastructure Setup"]
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
            Comprehensive development services to bring your ideas to life. 
            From concept to deployment, I handle every aspect of your project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
};

export default Services;