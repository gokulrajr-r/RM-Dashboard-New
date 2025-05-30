"use client";

import { useMemo, useState } from "react";
import { DataTable } from "@/components/data-table/data-table";
import { Service } from "@/lib/types";
import { formatDate } from "@/lib/utils/format";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Edit, MoreHorizontal, Trash } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { PageHeader } from "@/components/dashboard/page-header";

// Sample data (should be replaced with real API call)
const services: Service[] = [
  {
    id: "1",
    title: "UI/UX Design",
    category: "Design",
    description: "Professional UI/UX design services for web and mobile applications.",
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    slug: "ui-ux-design",
    created_at: "2025-01-05T10:00:00Z",
    updated_at: "2025-01-05T10:00:00Z",
  },
  {
    id: "2",
    title: "Web Development",
    category: "Development",
    description: "Custom web development services using the latest technologies.",
    image:
      "https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    slug: "web-development",
    created_at: "2025-01-03T10:00:00Z",
    updated_at: "2025-01-03T10:00:00Z",
  },
  {
    id: "3",
    title: "Mobile App Development",
    category: "Development",
    description: "Native and cross-platform mobile app development services.",
    image:
      "https://images.pexels.com/photos/6393013/pexels-photo-6393013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    slug: "mobile-app-development",
    created_at: "2025-01-01T10:00:00Z",
    updated_at: "2025-01-01T10:00:00Z",
  },
  {
    id: "4",
    title: "Digital Marketing",
    category: "Marketing",
    description: "Comprehensive digital marketing services to grow your online presence.",
    image:
      "https://images.pexels.com/photos/6804080/pexels-photo-6804080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    slug: "digital-marketing",
    created_at: "2024-12-25T10:00:00Z",
    updated_at: "2024-12-25T10:00:00Z",
  },
  {
    id: "5",
    title: "SEO Optimization",
    category: "Marketing",
    description: "Search engine optimization services to improve your website ranking.",
    image:
      "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    slug: "seo-optimization",
    created_at: "2024-12-20T10:00:00Z",
    updated_at: "2024-12-20T10:00:00Z",
  },
  {
    id: "6",
    title: "Campus Recruitment",
    category: "Recruitment",
    description: "End-to-end campus recruitment solutions.",
    image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    slug: "campus-recruitment",
    created_at: "2025-01-10T10:00:00Z",
    updated_at: "2025-01-10T10:00:00Z",
  },
  {
    id: "7",
    title: "Corporate Training",
    category: "Training",
    description: "Corporate training programs for employees.",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    slug: "corporate-training",
    created_at: "2025-01-12T10:00:00Z",
    updated_at: "2025-01-12T10:00:00Z",
  },
];

export default function CategoryServicesTable({ category }: { category: string }) {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [serviceToDelete, setServiceToDelete] = useState<Service | null>(null);

  // Filter services by category (case-insensitive)
  const filteredServices = useMemo(
    () =>
      services.filter(
        (s) => s.category.toLowerCase() === category?.toLowerCase()
      ),
    [category]
  );

  const columns: ColumnDef<Service>[] = [
    {
      accessorKey: "title",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Title
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => <div className="font-medium">{row.original.title}</div>,
    },
    {
      accessorKey: "description",
      header: "Description",
      cell: ({ row }) => (
        <div className="max-w-[300px] truncate">{row.original.description}</div>
      ),
    },
    {
      accessorKey: "updated_at",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Updated
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => <div>{formatDate(row.original.updated_at)}</div>,
    },
    {
      id: "actions",
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
                <Link href={`/dashboard/services/${service.category.toLowerCase()}/${service.id}`}>
                  <Edit className="mr-2 h-4 w-4" />
                  Edit
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="text-destructive focus:text-destructive"
                onClick={() => setServiceToDelete(service)}
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
    <div className="flex flex-col gap-5">
      <DataTable
        columns={columns}
        data={filteredServices}
        searchColumn="title"
        searchPlaceholder={`Search ${category} services...`}
      />
    </div>
  );
}
