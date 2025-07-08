import * as React from 'react';
import { Sun, Moon, Monitor, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTheme } from '@/contexts/ThemeContext';

function ThemeToggle() {
  const { theme, setTheme, actualTheme } = useTheme();

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
    setTheme(newTheme);
  };

  const getIcon = () => {
    if (theme === 'system') {
      return <Monitor className="h-4 w-4" />;
    }
    return actualTheme === 'dark' ? (
      <Moon className="h-4 w-4" />
    ) : (
      <Sun className="h-4 w-4" />
    );
  };

  const themes = [
    {
      key: 'light' as const,
      label: 'Light',
      icon: Sun,
      bgColor: 'bg-gradient-to-br from-yellow-100 to-orange-100',
      iconColor: 'text-yellow-600',
      hoverColor: 'hover:bg-yellow-50',
    },
    {
      key: 'dark' as const,
      label: 'Dark',
      icon: Moon,
      bgColor: 'bg-gradient-to-br from-slate-800 to-slate-900',
      iconColor: 'text-blue-400',
      hoverColor: 'hover:bg-slate-700',
    },
    {
      key: 'system' as const,
      label: 'System',
      icon: Monitor,
      bgColor: 'bg-gradient-to-br from-green-100 to-blue-100',
      iconColor: 'text-green-600',
      hoverColor: 'hover:bg-green-50',
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="relative hover-scale group transition-all duration-300"
          title="Toggle theme"
        >
          <div className="relative">
            {getIcon()}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-transparent to-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 p-2">
        {themes.map((themeOption) => {
          const Icon = themeOption.icon;
          const isSelected = theme === themeOption.key;
          
          return (
            <DropdownMenuItem
              key={themeOption.key}
              onClick={() => handleThemeChange(themeOption.key)}
              className={`
                relative flex items-center gap-3 p-3 rounded-lg cursor-pointer
                transition-all duration-200 
                ${isSelected 
                  ? `${themeOption.bgColor} ${themeOption.iconColor} shadow-md` 
                  : `${themeOption.hoverColor} text-foreground`
                }
                hover:scale-105 transform
              `}
            >
              <div className={`
                p-2 rounded-full transition-all duration-200
                ${isSelected 
                  ? 'bg-white/20 shadow-lg' 
                  : 'bg-muted/50'
                }
              `}>
                <Icon className={`
                  h-4 w-4 transition-all duration-200
                  ${isSelected ? themeOption.iconColor : 'text-muted-foreground'}
                `} />
              </div>
              
              <div className="flex-1">
                <div className={`
                  font-medium transition-colors duration-200
                  ${isSelected ? 'text-inherit' : 'text-foreground'}
                `}>
                  {themeOption.label}
                </div>
                <div className={`
                  text-xs transition-colors duration-200
                  ${isSelected ? 'text-inherit opacity-80' : 'text-muted-foreground'}
                `}>
                  {themeOption.key === 'system' 
                    ? `Currently ${actualTheme}`
                    : `${themeOption.key === 'dark' ? 'Dark' : 'Light'} theme`
                  }
                </div>
              </div>

              {isSelected && (
                <div className="p-1 rounded-full bg-white/20">
                  <Check className="h-3 w-3 text-inherit animate-scale-in" />
                </div>
              )}

              {isSelected && (
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50 animate-pulse" />
              )}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ThemeToggle;
