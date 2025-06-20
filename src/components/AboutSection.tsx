import AnimatedSection from './AnimatedSection';
import { decodeHtmlEntities } from '@/lib/utils';
import joeImage from '@/images/techpreneurjoedisplay.PNG';

const AboutSection = () => {
  return (
    <AnimatedSection id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-12">
          <img
            src={joeImage}
            alt="Techpreneur Joe"
            className="rounded-full w-32 h-32 border-4 border-primary shadow-lg object-cover"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              A Developer and an Entrepreneur
            </h2>
            <p className="text-lg text-foreground/80 mb-4">
              Based in the heart of North London, I'm not just a developer; I'm a
              creator. My passion lies in bringing ideas to life, whether it's for a
              local startup or a high-end enterprise client.
            </p>
            <p className="text-lg text-foreground/80">
              My entrepreneurial journey with my two digital businesses,{' '}
              <a href="#" className="text-primary hover:underline">
                boroughly.com
              </a>{' '}
              and{' '}
              <a href="#" className="text-secondary hover:underline">
                neighbourhoodwash.com
              </a>
              , has given me a unique perspective. I understand the entire
              product lifecycle, from concept to launch, emphasizing quality,
              detail, and a user experience that truly resonates.
            </p>
          </div>
          <div className="bg-card p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-bold mb-4 gradient-text">My Ethos</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">
                  {decodeHtmlEntities('&#10003;')}
                </span>
                <span>
                  <strong className="text-foreground">Detail-Oriented:</strong>{' '}
                  Pixel-perfect implementation is not an option, it's a
                  requirement.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">
                  {decodeHtmlEntities('&#10003;')}
                </span>
                <span>
                  <strong className="text-foreground">Quality-Driven:</strong> I
                  build robust, scalable, and maintainable applications that stand
                  the test of time.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">
                  {decodeHtmlEntities('&#10003;')}
                </span>
                <span>
                  <strong className="text-foreground">User-Centric:</strong>{' '}
                  Crafting intuitive and delightful user experiences is at the
                  core of my work.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AboutSection;
