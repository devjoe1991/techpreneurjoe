
const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-foreground/60">
        <p>&copy; {new Date().getFullYear()} Techpreneur Joe. All Rights Reserved.</p>
        <p className="text-sm mt-2">Built with passion in North London.</p>
      </div>
    </footer>
  );
};

export default Footer;
