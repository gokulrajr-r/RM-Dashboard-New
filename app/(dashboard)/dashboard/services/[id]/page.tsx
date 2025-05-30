'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { serviceSchema } from '@/lib/schemas';
import { PageHeader } from '@/components/dashboard/page-header';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { ArrowLeft, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { Service } from '@/lib/types';

type FormValues = z.infer<typeof serviceSchema>;

// Sample service data
const service: Service = {
  id: '1',
  title: 'UI/UX Design',
  category: 'Design',
  description: 'Professional UI/UX design services for web and mobile applications.',
  image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  slug: 'ui-ux-design',
  created_at: '2025-01-05T10:00:00Z',
  updated_at: '2025-01-05T10:00:00Z',
};

export default function EditServicePage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingService, setIsLoadingService] = useState(true);

  const form = useForm<FormValues>({
    resolver: zodResolver(serviceSchema),
    defaultValues: {
      title: '',
      category: '',
      description: '',
      image: '',
      slug: '',
    },
  });

  // Fetch service data
  useEffect(() => {
    const fetchService = async () => {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 500));
        
        // In a real app, you would fetch the service by ID
        // const { data } = await supabase.from('services').select('*').eq('id', params.id).single();
        
        form.reset({
          title: service.title,
          category: service.category,
          description: service.description,
          image: service.image,
          slug: service.slug,
        });
        
        setIsLoadingService(false);
      } catch (error) {
        console.error('Error fetching service:', error);
        toast.error('Failed to load service');
        router.push('/dashboard/services');
      }
    };

    fetchService();
  }, [params.id, form, router]);

  async function onSubmit(data: FormValues) {
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      console.log('Updated data:', data);
      toast.success('Service updated successfully');
      router.push('/dashboard/services');
    } catch (error) {
      console.error(error);
      toast.error('Failed to update service');
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoadingService) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Edit Service"
        description="Update service information."
        actions={
          <Button variant="outline\" asChild>
            <Link href="/dashboard/services">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Link>
          </Button>
        }
      />

      <div className="rounded-lg border p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. UI/UX Design" {...field} />
                    </FormControl>
                    <FormDescription>
                      The name of your service.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Design" {...field} />
                    </FormControl>
                    <FormDescription>
                      The category this service belongs to.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your service..."
                      className="min-h-32"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    A detailed description of your service.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image URL</FormLabel>
                  <FormControl>
                    <Input placeholder="https://example.com/image.jpg" {...field} />
                  </FormControl>
                  <FormDescription>
                    A URL to an image representing this service.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="slug"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Slug</FormLabel>
                  <FormControl>
                    <Input placeholder="ui-ux-design" {...field} />
                  </FormControl>
                  <FormDescription>
                    The URL-friendly version of the title.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-4">
              <Button type="submit" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Update Service
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => router.back()}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}