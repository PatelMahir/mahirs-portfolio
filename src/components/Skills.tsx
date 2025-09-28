import { 
  Code, 
  Database, 
  Smartphone, 
  Server, 
  Globe, 
  Layers,
  Monitor,
  Cloud
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Monitor,
      skills: ["React", "Next.js", "TypeScript", "Vue.js", "Tailwind CSS", "HTML5/CSS3"]
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Node.js", "Python", "Java", "Laravel", "Express.js", "FastAPI"]
    },
    {
      title: "Mobile",
      icon: Smartphone,
      skills: ["Flutter", "React Native", "iOS (Swift)", "Android (Kotlin)", "Cross-Platform"]
    },
    {
      title: "Database",
      icon: Database,
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "Redis", "Supabase"]
    },
    {
      title: "DevOps",
      icon: Cloud,
      skills: ["AWS", "Docker", "Git", "CI/CD", "Linux", "Nginx"]
    },
    {
      title: "Tools",
      icon: Layers,
      skills: ["VS Code", "Postman", "Figma", "Jira", "Slack", "GitHub"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-accent">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I work with cutting-edge technologies to build modern, scalable applications 
            that deliver exceptional user experiences.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card-hover rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-accent rounded-xl p-3 mr-4">
                  <category.icon className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="flex items-center p-3 bg-secondary/50 rounded-lg skill-icon"
                  >
                    <Code className="h-4 w-4 text-primary mr-3" />
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;