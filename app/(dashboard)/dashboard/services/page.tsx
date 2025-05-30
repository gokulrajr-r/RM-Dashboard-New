'use client';

import { useState } from 'react';
import { PageHeader } from '@/components/dashboard/page-header';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/data-table/data-table';
import { Service } from '@/lib/types';
import { formatDate } from '@/lib/utils/format';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, Edit, MoreHorizontal, Plus, Trash } from 'lucide-react';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { toast } from 'sonner';

// Sample data
const services: Service[] = [
  {
    id: '1',
    title: 'UI/UX Design',
    category: 'Design',
    description: 'Professional UI/UX design services for web and mobile applications.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    slug: 'ui-ux-design',
    created_at: '2025-01-05T10:00:00Z',
    updated_at: '2025-01-05T10:00:00Z',
  },
  {
    id: '2',
    title: 'Web Development',
    category: 'Development',
    description: 'Custom web development services using the latest technologies.',
    image: 'https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    slug: 'web-development',
    created_at: '2025-01-03T10:00:00Z',
    updated_at: '2025-01-03T10:00:00Z',
  },
  {
    id: '3',
    title: 'Mobile App Development',
    category: 'Development',
    description: 'Native and cross-platform mobile app development services.',
    image: 'https://images.pexels.com/photos/6393013/pexels-photo-6393013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    slug: 'mobile-app-development',
    created_at: '2025-01-01T10:00:00Z',
    updated_at: '2025-01-01T10:00:00Z',
  },
  {
    id: '4',
    title: 'Digital Marketing',
    category: 'Marketing',
    description: 'Comprehensive digital marketing services to grow your online presence.',
    image: 'https://images.pexels.com/photos/6804080/pexels-photo-6804080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    slug: 'digital-marketing',
    created_at: '2024-12-25T10:00:00Z',
    updated_at: '2024-12-25T10:00:00Z',
  },
  {
    id: '5',
    title: 'SEO Optimization',
    category: 'Marketing',
    description: 'Search engine optimization services to improve your website ranking.',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    slug: 'seo-optimization',
    created_at: '2024-12-20T10:00:00Z',
    updated_at: '2024-12-20T10:00:00Z',
  },
];

export default function ServicesPage() {
  const [data, setData] = useState<Service[]>(services);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [serviceToDelete, setServiceToDelete] = useState<Service | null>(null);

  const handleDelete = (service: Service) => {
    setServiceToDelete(service);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (serviceToDelete) {
      setData(data.filter((item) => item.id !== serviceToDelete.id));
      toast.success(`${serviceToDelete.title} has been deleted`);
      setDeleteDialogOpen(false);
      setServiceToDelete(null);
    }
  };

  const columns: ColumnDef<Service>[] = [
    {
      accessorKey: 'title',
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Title
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="font-medium">{row.original.title}</div>
      ),
    },
    {
      accessorKey: 'category',
      header: 'Category',
      cell: ({ row }) => (
        <div className="capitalize">{row.original.category}</div>
      ),
    },
    {
      accessorKey: 'description',
      header: 'Description',
      cell: ({ row }) => (
        <div className="max-w-[300px] truncate">{row.original.description}</div>
      ),
    },
    {
      accessorKey: 'updated_at',
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Updated
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => <div>{formatDate(row.original.updated_at)}</div>,
    },
    {
      id: 'actions',
      cell: ({ row }) => {
        const service = row.original;
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href={`/dashboard/services/${service.id}`}>
                  <Edit className="mr-2 h-4 w-4" />
                  Edit
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="text-destructive focus:text-destructive"
                onClick={() => handleDelete(service)}
              >
                <Trash className="mr-2 h-4 w-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-5">
        <PageHeader
          title="Services"
          description="Manage your service offerings."
          actions={
            <Button asChild>
              <Link href="/dashboard/services/create">
                <Plus className="mr-2 h-4 w-4" />
                Add Service
              </Link>
            </Button>
          }
        />

        <DataTable
          columns={columns}
          data={data}
          searchColumn="title"
          searchPlaceholder="Search services..."
        />
      </div>

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete{' '}
              <span className="font-medium">{serviceToDelete?.title}</span>. This
              action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}