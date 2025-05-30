'use client';

import { useState } from 'react';
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
import { slugify } from '@/lib/utils/format';

type FormValues = z.infer<typeof serviceSchema>;

export default function CreateServicePage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

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

  const watchTitle = form.watch('title');

  // Auto-generate slug from title
  const onTitleChange = (value: string) => {
    form.setValue('slug', slugify(value));
  };

  async function onSubmit(data: FormValues) {
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      console.log('Form data:', data);
      toast.success('Service created successfully');
      router.push('/dashboard/services');
    } catch (error) {
      console.error(error);
      toast.error('Failed to create service');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Create Service"
        description="Add a new service to your portfolio."
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
                      <Input
                        placeholder="e.g. UI/UX Design"
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          onTitleChange(e.target.value);
                        }}
                      />
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
                    The URL-friendly version of the title. Auto-generated but can be
                    customized.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-4">
              <Button type="submit" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Create Service
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