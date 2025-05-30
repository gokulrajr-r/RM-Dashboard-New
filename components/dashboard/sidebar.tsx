'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  BarChart2,
  FileText,
  Grid,
  Home,
  LayoutDashboard,
  MessageSquare,
  PenTool,
  Settings,
  Users,
  X,
  Menu,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useAuth } from '@/lib/hooks/use-auth';

interface SidebarProps {
  className?: string;
}

interface NavItem {
  title: string;
  href: string;
  icon: React.ReactNode;
  submenu?: {
    title: string;
    href: string;
  }[];
  requiredRole?: 'admin' | 'editor';
}

export function Sidebar({ className }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { user } = useAuth();

  const navItems: NavItem[] = [
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      title: 'Services',
      href: '/dashboard/services',
      icon: <Grid className="h-5 w-5" />,
    },
    {
      title: 'Blogs',
      href: '/dashboard/blogs',
      icon: <FileText className="h-5 w-5" />,
    },
    {
      title: 'Team',
      href: '/dashboard/team',
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: 'Testimonials',
      href: '/dashboard/testimonials',
      icon: <MessageSquare className="h-5 w-5" />,
    },
    {
      title: 'Analytics',
      href: '/dashboard/analytics',
      icon: <BarChart2 className="h-5 w-5" />,
      requiredRole: 'admin',
    },
    {
      title: 'Settings',
      href: '/dashboard/settings',
      icon: <Settings className="h-5 w-5" />,
      requiredRole: 'admin',
    },
  ];

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close sidebar when navigating to a new page on mobile
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="fixed left-4 top-4 z-40 md:hidden"
        onClick={() => setIsOpen(true)}
      >
        <Menu className="h-5 w-5" />
      </Button>

      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-30 flex w-72 flex-col bg-background shadow-lg transition-transform md:relative md:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full',
          className
        )}
      >
        <div className="flex h-16 items-center border-b px-6">
          <Link href="/dashboard" className="flex items-center gap-2 font-bold">
            <PenTool className="h-6 w-6 text-primary" />
            <span>Rareminds</span>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2 md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        <ScrollArea className="flex-1 py-4">
          <nav className="grid gap-1 px-4">
            {navItems
              .filter(
                (item) =>
                  !item.requiredRole || item.requiredRole === user?.role
              )
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground',
                    pathname === item.href
                      ? 'bg-accent text-accent-foreground'
                      : 'transparent'
                  )}
                >
                  {item.icon}
                  {item.title}
                </Link>
              ))}
          </nav>
        </ScrollArea>
        <div className="mt-auto border-t p-4">
          <div className="flex items-center gap-3 rounded-md py-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10">
              <span className="text-sm font-medium text-primary">
                {user?.email?.[0]?.toUpperCase() || 'U'}
              </span>
            </div>
            <div className="grid gap-0.5">
              <p className="text-sm font-medium">{user?.email || 'User'}</p>
              <p className="text-xs text-muted-foreground capitalize">
                {user?.role || 'Editor'}
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}