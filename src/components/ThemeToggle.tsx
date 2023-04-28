"use client"; // this is a client component
import { useTheme } from "next-themes";
import { FC } from "react";
import { DropdownMenu } from "@/ui/DropdownMenu";
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import Button from "@/ui/Button";
import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {}

const ThemeToggle: FC<ThemeToggleProps> = ({}) => {
    const {setTheme}=useTheme()
  return <DropdownMenu>
    <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm">
          <Sun className="rotate-0 scale-100 transition-all hover:text-slate-900 dark:rotate-90 dark:scale-0 dark:text-slate-400 dark:hover:text-slate-100"/>
          <Moon className="absolute  rotate-90 scale-100 transition-all hover:text-slate-900 dark:rotate-0 dark:scale-100 dark:text-slate-400 dark:hover:text-slate-100"/>
          <span className="sr-only">Toggle theme</span>
        </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
        <DropdownMenuItem>
            <Sun className="mr-2 h-4 w-4"/>
            <span></span>
        </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
};
export default ThemeToggle;
