
import AnimatedSection from './AnimatedSection';
import { Button } from './ui/button';

const ContactSection = () => {
  return (
    <AnimatedSection id="contact" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text">
          Let's Build Something Great Together
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-foreground/80 mb-8">
          Have a project in mind? I'd love to hear about it.
        </p>
        <Button size="lg" asChild>
          <a href="mailto:hello@techpreneurjoe.com">
            hello@techpreneurjoe.com
          </a>
        </Button>
      </div>
    </AnimatedSection>
  );
};

export default ContactSection;
