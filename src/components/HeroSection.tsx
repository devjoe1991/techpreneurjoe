
import { Button } from './ui/button';
import AnimatedTextWordByWord from './AnimatedTextWordByWord';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 animated-gradient-bg z-0"></div>
        <div className="absolute inset-0 bg-background/50 z-10"></div>
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-4">
                <AnimatedTextWordByWord text="Crafting Digital Experiences from North London." />
            </h1>
            <p
              className="mt-4 max-w-3xl text-lg md:text-xl text-foreground/80 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.6s" }}
            >
                {"I'm Joe. I build fast, beautiful, and user-friendly applications."}
            </p>
            <div
              className="mt-8 flex flex-wrap justify-center gap-4 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.8s" }}
            >
                <Button size="lg" asChild>
                    <a href="#projects">View My Work</a>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                    <a href="#contact">Contact Me</a>
                </Button>
            </div>
        </div>
    </section>
  );
};

export default HeroSection;
