import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import ecommerceImg from "@/assets/project-ecommerce.jpg";
import socialImg from "@/assets/project-social.jpg";
import dashboardImg from "@/assets/project-dashboard.jpg";
import iosImg from "@/assets/project-ios.jpg";
import reactNativeImg from "@/assets/project-react-native.jpg";
import apiImg from "@/assets/project-api.jpg";
import maintenanceImg from "@/assets/project-maintenance.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce platform with payment integration, inventory management, and admin dashboard. Built for scalability and performance.",
      image: ecommerceImg,
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      liveDemo: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Social Media App",
      description: "Cross-platform mobile app with real-time chat, media sharing, and social features. Built with modern mobile development practices.",
      image: socialImg,
      tech: ["Flutter", "Firebase", "Dart", "FCM"],
      liveDemo: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Business Analytics Dashboard",
      description: "Comprehensive business intelligence dashboard with real-time data visualization, reporting, and user management systems.",
      image: dashboardImg,
      tech: ["Laravel", "MySQL", "Chart.js", "PHP"],
      liveDemo: "#",
      github: "#"
    },
    {
      id: 4,
      title: "iOS Productivity App",
      description: "Native iOS application for productivity and task management with offline support and iCloud synchronization.",
      image: iosImg,
      tech: ["Swift", "Core Data", "CloudKit", "iOS"],
      liveDemo: "#",
      github: "#"
    },
    {
      id: 5,
      title: "Cross-Platform Finance App",
      description: "Multi-platform financial tracking application with secure authentication and real-time data synchronization.",
      image: reactNativeImg,
      tech: ["React Native", "TypeScript", "AWS", "Redux"],
      liveDemo: "#",
      github: "#"
    },
    {
      id: 6,
      title: "RESTful API Service",
      description: "Scalable REST API with comprehensive documentation, authentication, and third-party integrations for enterprise clients.",
      image: apiImg,
      tech: ["Python", "FastAPI", "PostgreSQL", "Docker"],
      liveDemo: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work spanning web applications, mobile apps, 
            and API development. Each project demonstrates my commitment to quality and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card card-hover rounded-2xl overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button size="sm" className="btn-hero flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;