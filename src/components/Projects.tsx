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
      title: "Task Management System",
      description: "A comprehensive task management application with real-time collaboration, project tracking, and team management features.",
      image: ecommerceImg,
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      github: "https://github.com/PatelMahir/TaskUnity-App"
    },
    {
      id: 2,
      title: "E-Learning Platform",
      description: "Interactive e-learning platform with course management, video streaming, quizzes, and progress tracking for students and instructors.",
      image: socialImg,
      tech: ["Angular", "Express.js", "MySQL", "JWT"],
      github: "https://github.com/PatelMahir/EDU-FRAMER"
    },
    {
      id: 3,
      title: "Inventory Management Dashboard",
      description: "Real-time inventory tracking system with analytics, supplier management, and automated stock alerts for businesses.",
      image: dashboardImg,
      tech: ["Vue.js", "Laravel", "PostgreSQL", "Redis"],
      github: "https://github.com/PatelMahir/Inventory-Management"
    },
    {
      id: 4,
      title: "Weather Forecast App",
      description: "Cross-platform mobile weather application with location-based forecasts, weather alerts, and intuitive UI design.",
      image: iosImg,
      tech: ["Flutter", "Dart", "OpenWeather API", "SQLite"],
      github: "https://github.com/PatelMahir/Weather_App"
    },
    {
      id: 5,
      title: "Expense Tracker Mobile App",
      description: "Personal finance management app with expense categorization, budget planning, and financial insights with offline support.",
      image: reactNativeImg,
      tech: ["React Native", "TypeScript", "Realm DB", "Chart.js"],
      github: "https://github.com/PatelMahir/Expense-Tracker-App-ReactNative-Typescript"
    },
    {
      id: 6,
      title: "Blog Management API",
      description: "RESTful API for blog management with user authentication, content moderation, and SEO optimization features.",
      image: apiImg,
      tech: ["Python", "Django", "PostgreSQL", "Celery"],
      github: "https://github.com/PatelMahir/BLOG_REST_API_DJANGO"
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
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-glow transition-colors text-sm font-medium"
                >
                  View on GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;