import { useState, useEffect } from 'react';

const ReadingProgressBar = () => {
  const [width, setWidth] = useState(0);

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollHeight === clientHeight) {
      setWidth(100);
      return;
    }
    const windowHeight = scrollHeight - clientHeight;
    const scrollPercent = (scrollTop / windowHeight) * 100;
    setWidth(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 z-50 w-full h-1">
      <div
        className="h-full bg-gradient-to-r from-primary to-secondary"
        style={{ width: `${width}%` }}
      />
    </div>
  );
};

export default ReadingProgressBar; 