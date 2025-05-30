import { LoginForm } from '@/components/auth/login-form';
import { Button } from '@/components/ui/button';
import { PenTool } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="container relative flex min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <PenTool className="mr-2 h-6 w-6" />
          Rareminds
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              "This dashboard has streamlined our content management process and helped us deliver a better experience for our clients."
            </p>
            <footer className="text-sm">Sophie Devs, CTO</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Sign in to dashboard
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email and password to continue
            </p>
          </div>
          <LoginForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            Don't have an account?{' '}
            <Button variant="link" className="p-0" asChild>
              <Link href="/register">Sign up</Link>
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
}