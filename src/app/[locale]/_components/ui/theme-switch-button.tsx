'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useModeAnimation } from 'react-theme-switch-animation';

export function ModeToggle() {
  const { setTheme } = useTheme();
  const { ref, toggleSwitchTheme, isDarkMode } = useModeAnimation({
    duration: 1000, // Optional: adjust animation duration
  });

  // @ts-ignore
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="bg-navbar-bg">
        <Button variant="default" size="lg" className="!px-0 group">
          <Sun size={24} className="!w-[24px] !h-[24px] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 group-hover:text-primary" />
          <Moon
            size={24}
            className="!w-[24px] !h-[24px] absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 group-hover:text-primary"
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="bg-navbar-bg !w-6">
        <DropdownMenuItem className="text-white hover:text-primary" onClick={() => setTheme('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem className="text-white hover:text-primary" ref={ref} onClick={toggleSwitchTheme}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem className="text-white hover:text-primary" onClick={() => setTheme('system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
