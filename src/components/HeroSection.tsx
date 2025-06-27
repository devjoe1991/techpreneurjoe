import { Button } from './ui/button';
import AnimatedTextWordByWord from './AnimatedTextWordByWord';
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import { motion, Variants } from 'framer-motion';

const HeroSection = () => {
  const lines = ["Crafting Digital", "Experiences from", "North London."];

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.8 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
        <BackgroundGradientAnimation containerClassName="absolute inset-0 h-full w-full z-0" />
        <div className="absolute inset-0 bg-background/50 z-10"></div>
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 text-white leading-tight"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {lines.map((line, index) => (
                <motion.div key={index} variants={item}>
                  <AnimatedTextWordByWord text={line} />
                </motion.div>
              ))}
            </motion.h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                I'm Joe. I build fast, beautiful, and user-friendly applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                    <a href="#projects">View My Work</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                    <a href="#contact">Get in Touch</a>
                </Button>
            </div>
        </div>
    </section>
  );
};

export default HeroSection;
