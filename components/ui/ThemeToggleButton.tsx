"use client";

import { Moon, Sun, Computer } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function ThemeToggleButton() {
  const { setTheme } = useTheme();

  const themeOptions = [
    { theme: "light", name: "Light", icon: <Sun /> },
    { theme: "dark", name: "Dark", icon: <Moon /> },
    { theme: "system", name: "System", icon: <Computer /> },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="cursor-pointer" variant="ghost">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themeOptions.map((themeOption) => {
          return (
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => setTheme(themeOption.theme)}
              key={themeOption.theme}
            >
              <div className="flex items-center gap-2">
                {themeOption.icon}
                <span>{themeOption.name}</span>
              </div>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ThemeToggleButton;
