
import AnimatedSection from './AnimatedSection';
import { Card, CardContent } from './ui/card';

const testimonials = [
  {
    quote: "Joe's attention to detail is second to none. He delivered a high-quality app that exceeded our expectations.",
    name: 'Jane Doe',
    company: 'High-End Client Inc.',
  },
  {
    quote: "Working with Joe was a breeze. He understood our vision for our local business and brought it to life beautifully.",
    name: 'John Smith',
    company: 'Local Cafe',
  },
];

const TestimonialsSection = () => {
  return (
    <AnimatedSection id="testimonials" className="py-20 lg:py-32 bg-card border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold">What My Clients Say</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-background border-border p-6">
              <CardContent className="p-0">
                <p className="text-lg italic text-foreground/80 mb-4">"{testimonial.quote}"</p>
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-primary">{testimonial.company}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default TestimonialsSection;
