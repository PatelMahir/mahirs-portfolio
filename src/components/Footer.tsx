import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/PatelMahir",
      label: "GitHub"
    },
    {
      icon: Mail,
      href: "mailto:mahir17062002@gmail.com",
      label: "Email"
    }
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold text-gradient-primary mb-4">
              &lt;mahir.dev /&gt;
            </h3>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Full-stack developer passionate about creating innovative solutions 
              that make a difference. Let's build something amazing together.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center hover:shadow-glow transition-all duration-300"
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5 text-primary-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>📧 mahir17062002@gmail.com</p>
              <p>📍 Ahmedabad, Gujarat, India</p>
              <p className="text-sm mt-4">
                <span className="inline-block w-2 h-2 bg-accent rounded-full mr-2"></span>
                Available for new projects
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {currentYear} Full-Stack Developer Portfolio. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" fill="currentColor" /> and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;