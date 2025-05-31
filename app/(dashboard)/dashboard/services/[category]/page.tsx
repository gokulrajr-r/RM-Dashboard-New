import { PageHeader } from "@/components/dashboard/page-header";
import CategoryServicesTable from "./CategoryServicesTable";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Props {
  params: { category: string };
}

export default function ServicesByCategoryPage({ params }: Props) {
  const { category } = params;
  return (
    <div className="flex flex-col gap-5">
      <PageHeader
        title={`${category} Services`}
        description={`Manage all services under the ${category} category.`}
        actions={
          <Button asChild>
            <Link href={`/dashboard/services/${category}/create`}>
              Create New Service
            </Link>
          </Button>
        }
      />
      <CategoryServicesTable category={category} />
    </div>
  );
}

import { getCategoryParams } from '@/lib/config/services';

export async function generateStaticParams() {
  return getCategoryParams();
}
