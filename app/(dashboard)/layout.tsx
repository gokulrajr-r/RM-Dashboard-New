'use client';

import { Header } from '@/components/dashboard/header';
import { Sidebar } from '@/components/dashboard/sidebar';
import { useAuth } from '@/lib/hooks/use-auth';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Toaster } from 'sonner';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !loading && !user) {
      router.push('/login');
    }
  }, [user, loading, mounted, router]);

  // Wait for authentication to be checked
  if (!mounted || loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  // Don't render the layout until we're sure about authentication
  if (!user) {
    return null;
  }

  return (
    <div className="flex h-screen flex-col md:flex-row">
      <Sidebar />
      <main className="flex flex-1 flex-col overflow-hidden">
        <Header />
        <div className="flex-1 overflow-y-auto p-6">{children}</div>
      </main>
      <Toaster position="top-right" />
    </div>
  );
}