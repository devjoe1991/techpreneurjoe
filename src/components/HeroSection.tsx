
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 animated-gradient-bg z-0"></div>
        <div className="absolute inset-0 bg-background/50 z-10"></div>
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-4">
                <span className="block">North London's Full-Stack Developer:</span>
                <span className="gradient-text block mt-2">From Local Startups to High-End Apps.</span>
            </h1>
            <p className="mt-4 max-w-3xl text-lg md:text-xl text-foreground/80">
                Hi, I'm Techpreneur Joe. I build beautiful, high-quality web and native applications with expert attention to UI/UX.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
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
