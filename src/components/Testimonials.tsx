import { useState } from "react";
import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Testimonials = () => {
  const [reviewForm, setReviewForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleReviewChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setReviewForm({
      ...reviewForm,
      [e.target.name]: e.target.value
    });
  };

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Review Submitted!",
        description: "Thank you for your feedback. Your review will be published after verification.",
      });
      
      setReviewForm({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit review. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Sharma",
      position: "Business Owner",
      content: "Outstanding work! The web application exceeded our expectations. Clean code, perfect timing, and excellent communication throughout the project.",
      rating: 5,
      avatar: "RS"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Entrepreneur",
      content: "The mobile app development was flawless. Cross-platform solution works perfectly on both iOS and Android. Highly recommend for any mobile project.",
      rating: 5,
      avatar: "MC"
    },
    {
      id: 3,
      name: "Priya Patel",
      position: "Tech Lead",
      content: "Exceptional API development and integration work. The documentation was comprehensive and the performance is outstanding. Will definitely work together again.",
      rating: 5,
      avatar: "PP"
    },
    {
      id: 4,
      name: "James Wilson",
      position: "Project Manager",
      content: "Transformed our business with a complete e-commerce platform. The attention to detail and user experience design is remarkable. Sales increased by 150%!",
      rating: 5,
      avatar: "JW"
    },
    {
      id: 5,
      name: "Anjali Gupta",
      position: "Product Owner",
      content: "Professional, reliable, and technically excellent. The financial dashboard application handles complex data beautifully. Great problem-solving skills.",
      rating: 5,
      avatar: "AG"
    },
    {
      id: 6,
      name: "Robert Smith",
      position: "Startup Founder",
      content: "From concept to launch, the entire process was smooth. The MVP was delivered on time and within budget. Perfect partner for startup development.",
      rating: 5,
      avatar: "RS"
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

        {/* Client Review Submission */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-gradient-accent">
              Share Your Experience
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have you worked with me? I'd love to hear about your experience and share it with future clients.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="card-hover rounded-2xl p-8">
              <form onSubmit={handleReviewSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="review-name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <Input
                      id="review-name"
                      name="name"
                      type="text"
                      required
                      value={reviewForm.name}
                      onChange={handleReviewChange}
                      className="bg-secondary/50 border-border"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="review-email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      id="review-email"
                      name="email"
                      type="email"
                      required
                      value={reviewForm.email}
                      onChange={handleReviewChange}
                      className="bg-secondary/50 border-border"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="review-message" className="block text-sm font-medium mb-2">
                    Your Review
                  </label>
                  <Textarea
                    id="review-message"
                    name="message"
                    required
                    value={reviewForm.message}
                    onChange={handleReviewChange}
                    rows={4}
                    className="bg-secondary/50 border-border resize-none"
                    placeholder="Share your experience working with me..."
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-hero w-full"
                >
                  {isSubmitting ? "Submitting..." : "Submit Review"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;