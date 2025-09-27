import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-8 h-8 md:w-10 md:h-10 bg-muted rounded-lg flex items-center justify-center animate-pulse" />
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="w-8 h-8 md:w-10 md:h-10 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all duration-200 hover-lift focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Sun className="w-3 h-3 md:w-4 md:h-4" />
      ) : (
        <Moon className="w-3 h-3 md:w-4 md:h-4" />
      )}
    </button>
  );
};

export default ThemeToggle;