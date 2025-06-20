import { useState, useEffect } from 'react';
import AnimatedSection from './AnimatedSection';
import { Card, CardContent } from './ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from './ui/carousel';

const services = [
  {
    title: 'Front-End Development',
    description: 'Crafting responsive, high-performance, and pixel-perfect websites using modern frameworks like React and Next.js. I turn complex designs into intuitive and engaging user interfaces.',
  },
  {
    title: 'UI/UX Landing Pages',
    description: 'Designing and developing visually stunning, user-centric landing pages that are built to convert. My focus is on creating a seamless user journey from the first click to the final call-to-action.',
  },
  {
    title: 'SEO-Optimized Experiences',
    description: 'Building websites with Search Engine Optimization at their core. I ensure your project has clean code, fast load times, and a structure that is favored by search engines to maximize organic reach.',
  },
  {
    title: 'Back-End & Full-Stack Solutions',
    description: 'Developing robust and scalable server-side logic and APIs. I build complete, end-to-end applications that handle business logic and data management efficiently.',
  },
  {
    title: 'Cloud Database Integration',
    description: 'Expert integration with modern cloud databases like Supabase and Firebase. I build real-time, secure, and scalable data solutions to power your applications.',
  },
  {
    title: 'Serverless Deployment',
    description: 'Leveraging serverless platforms like Vercel and Netlify for seamless, scalable, and cost-effective deployment. I provide continuous integration and delivery pipelines for a fast and reliable workflow.',
  },
  {
    title: 'Custom AI Chatbots',
    description: 'Building intelligent, conversational AI chatbots that enhance user engagement, automate customer support, and provide instant, 24/7 assistance for your business.',
  },
  {
    title: 'AI-Powered Business Automation',
    description: 'Integrating artificial intelligence to streamline your business processes. From automating repetitive tasks to providing data-driven insights, I can enhance your operational efficiency with AI.',
  },
];

const ServicesSection = () => {
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
    <AnimatedSection id="services" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold">What I Can Build For You</h2>
        </div>
        <Carousel setApi={setApi} className="w-full max-w-6xl mx-auto">
          <CarouselContent>
            {services.map((service) => (
              <CarouselItem key={service.title} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="group h-full flex flex-col overflow-hidden border-border bg-card shadow-lg transition-transform duration-300 hover:scale-105">
                    <div className="h-1 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:h-2"></div>
                    <CardContent className="p-6 flex-grow">
                      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                      <p className="text-foreground/80">{service.description}</p>
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

export default ServicesSection; 