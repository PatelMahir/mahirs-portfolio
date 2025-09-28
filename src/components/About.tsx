import { Code2, Brain, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following industry best practices and modern development patterns."
    },
    {
      icon: Brain,
      title: "Problem Solving",
      description: "Analyzing complex requirements and developing efficient solutions that drive business growth."
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Delivering projects on time with clear communication and ongoing support for long-term success."
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8">
              I'm a passionate full-stack developer with over 5 years of experience building 
              web and mobile applications. I specialize in creating robust, scalable solutions 
              using modern technologies and frameworks.
            </p>
            <p className="text-lg text-muted-foreground">
              My expertise spans across frontend and backend development, mobile app creation, 
              and API integration. I pride myself on writing clean, efficient code and delivering 
              solutions that not only meet requirements but exceed expectations.
            </p>
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