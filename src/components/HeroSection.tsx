import { Button } from './ui/button';
import { ColourfulText } from './ColourfulText';
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";

const HeroSection = () => {
  const lines = ["Crafting", "Digital", "Experiences", "from", "North London."];

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
        <BackgroundGradientAnimation containerClassName="absolute inset-0 h-full w-full z-0" />
        <div className="absolute inset-0 bg-background/50 z-10"></div>
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-normal font-heading">
              {lines.map((line) => (
                <div key={line}>
                  <ColourfulText text={line} />
                </div>
              ))}
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
