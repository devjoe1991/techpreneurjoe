import { decodeHtmlEntities } from '@/lib/utils';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-foreground/60">
        <p>{decodeHtmlEntities('&copy;')} {new Date().getFullYear()} Techpreneur Joe. All Rights Reserved.</p>
        <div className="flex justify-center mt-4">
          <a href="https://www.instagram.com/techpreneurjoe/" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
        </div>
        <p className="text-sm mt-2">Built with passion in North London.</p>
      </div>
    </footer>
  );
};

export default Footer;
