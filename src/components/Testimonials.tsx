import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      content: "Outstanding work! The web application exceeded our expectations. Clean code, perfect timing, and excellent communication throughout the project.",
      rating: 5,
      avatar: "SJ"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Product Manager, InnovateLabs",
      content: "The mobile app development was flawless. Cross-platform solution works perfectly on both iOS and Android. Highly recommend for any mobile project.",
      rating: 5,
      avatar: "MC"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "CTO, DataFlow Solutions",
      content: "Exceptional API development and integration work. The documentation was comprehensive and the performance is outstanding. Will definitely work together again.",
      rating: 5,
      avatar: "ER"
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Founder, E-Commerce Plus",
      content: "Transformed our business with a complete e-commerce platform. The attention to detail and user experience design is remarkable. Sales increased by 150%!",
      rating: 5,
      avatar: "DT"
    },
    {
      id: 5,
      name: "Lisa Wang",
      position: "Director, FinTech Innovations",
      content: "Professional, reliable, and technically excellent. The financial dashboard application handles complex data beautifully. Great problem-solving skills.",
      rating: 5,
      avatar: "LW"
    },
    {
      id: 6,
      name: "Alex Parker",
      position: "Startup Founder",
      content: "From concept to launch, the entire process was smooth. The MVP was delivered on time and within budget. Perfect partner for startup development.",
      rating: 5,
      avatar: "AP"
    }
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
            What Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say about 
            working with me and the results we've achieved together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card-hover rounded-2xl p-8 relative">
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20" />
              
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-muted-foreground italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Star className="h-5 w-5 fill-accent text-accent mr-2" />
              <span className="font-semibold text-foreground">5.0</span> average rating
            </div>
            <div>50+ projects completed</div>
            <div>100% client satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;