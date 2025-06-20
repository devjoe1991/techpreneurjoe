import { useState, useEffect } from 'react';
import AnimatedSection from './AnimatedSection';
import { Card, CardContent } from './ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from './ui/carousel';
import { Button } from './ui/button';
import boroughlyImage from '@/images/boroughly.png';
import neighbourhoodwashImage from '@/images/neighbourhoodwash.png';

const projects = [
  {
    title: 'boroughly.com',
    description: "A community-focused platform connecting local residents. The challenge was to create a highly interactive and scalable social hub. The solution involved a robust back-end with a real-time front-end framework.",
    image: boroughlyImage,
    link: '#',
  },
  {
    title: 'neighbourhoodwash.com',
    description: "Your friendly neighbourhood laundry solution. The goal was to build a seamless booking and payment system. I developed a native app with a user-friendly interface and a secure payment gateway.",
    image: neighbourhoodwashImage,
    link: '#',
  },
];

const ProjectsSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <AnimatedSection id="projects" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold">Featured Projects</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Here are a couple of projects I've built from the ground up.
          </p>
        </div>
        <Carousel setApi={setApi} className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.title}>
                <div className="p-1">
                  <Card className="overflow-hidden border-border">
                    <CardContent className="grid md:grid-cols-2 gap-0 p-0">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                      <div className="p-8 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                        <p className="text-foreground/80 mb-6">{project.description}</p>
                        <Button asChild className="self-start">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">Visit Site</a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              className={`w-2 h-2 rounded-full transition-colors ${i === current - 1 ? 'bg-primary' : 'bg-foreground/20'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ProjectsSection;
