
import { LayoutTemplate, CodeXml, ServerCog } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const skills = [
  {
    icon: <LayoutTemplate className="w-10 h-10 mb-4 text-primary" />,
    title: 'UI/UX Design',
    description: 'Pixel-perfect, intuitive interfaces that delight users.',
  },
  {
    icon: <CodeXml className="w-10 h-10 mb-4 text-secondary" />,
    title: 'Front-End Development',
    description: 'Beautiful, responsive landing pages and user-facing features.',
  },
  {
    icon: <ServerCog className="w-10 h-10 mb-4 text-accent" />,
    title: 'Full-Stack & Native Apps',
    description: 'Complex, scalable web and native applications for all clients.',
  },
];

const technologies = ['React', 'Node.js', 'TypeScript', 'Swift', 'Next.js', 'GraphQL', 'PostgreSQL', 'Docker'];

const SkillsSection = () => {
  return (
    <AnimatedSection id="skills" className="py-20 lg:py-32 bg-card border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold">My Skillset</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            From design to deployment, I cover the entire spectrum of web and app development.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skills.map((skill) => (
            <Card key={skill.title} className="text-center p-6 border-border hover:border-primary transition-all duration-300 hover:scale-105 hover:-translate-y-2">
              <CardHeader className="items-center">
                {skill.icon}
                <CardTitle className="text-2xl">{skill.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-4">
                {technologies.map(tech => (
                    <div key={tech} className="bg-background border border-border rounded-full px-4 py-2 text-foreground/80">
                        {tech}
                    </div>
                ))}
            </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default SkillsSection;
