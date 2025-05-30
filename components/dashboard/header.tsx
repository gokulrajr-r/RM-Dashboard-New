'use client';

import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/lib/hooks/use-auth';
import { Bell, LogOut } from 'lucide-react';

export function Header() {
  const { signOut } = useAuth();

  return (
    <header className="sticky top-0 z-20 flex h-16 items-center gap-4 border-b bg-background px-6">
      <div className="ml-auto flex items-center gap-4">
        <Button variant="outline" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
            3
          </span>
        </Button>
        <ModeToggle />
        <Button
          variant="ghost"
          size="icon"
          onClick={signOut}
          title="Sign out"
        >
          <LogOut className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}