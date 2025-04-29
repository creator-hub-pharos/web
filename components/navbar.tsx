"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Button } from "@/components/ui/button";
import { MenuIcon, X, Flame } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const routes = [
  { name: "Home", path: "/" },
  { name: "Creators", path: "/creators" },
  { name: "Mint", path: "/mint" },
  { name: "Collaborate", path: "/collaborate" },
  { name: "Leaderboard", path: "/leaderboard" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 justify-center items-center flex flex-col">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Flame className="h-8 w-8 text-purple-500" />
            <span className="text-xl font-bold tracking-tight">CreatorHub</span>
          </Link>
          <nav className="hidden md:flex ml-6 gap-6">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === route.path
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {route.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <ConnectButton />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              {routes.map((route) => (
                <DropdownMenuItem key={route.path} asChild>
                  <Link 
                    href={route.path}
                    className={cn(
                      pathname === route.path ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    {route.name}
                  </Link>
                </DropdownMenuItem>
              ))}
              <div className="p-2">
                <ConnectButton />
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}