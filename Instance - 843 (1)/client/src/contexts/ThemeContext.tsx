import * as React from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  actualTheme: 'light' | 'dark';
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = React.useState<Theme>('system');
  const [actualTheme, setActualTheme] = React.useState<'light' | 'dark'>('light');

  React.useEffect(() => {
    const savedTheme = localStorage.getItem('cropora_theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  React.useEffect(() => {
    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const updateTheme = () => {
      const root = document.documentElement;
      
      if (theme === 'system') {
        const systemDark = darkQuery.matches;
        setActualTheme(systemDark ? 'dark' : 'light');
        root.classList.toggle('dark', systemDark);
      } else {
        const isDark = theme === 'dark';
        setActualTheme(isDark ? 'dark' : 'light');
        root.classList.toggle('dark', isDark);
      }
    };

    updateTheme();
    darkQuery.addEventListener('change', updateTheme);
    localStorage.setItem('cropora_theme', theme);

    return () => darkQuery.removeEventListener('change', updateTheme);
  }, [theme]);

  const value = {
    theme,
    setTheme,
    actualTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
