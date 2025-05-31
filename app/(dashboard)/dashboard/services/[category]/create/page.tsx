import { PageHeader } from "@/components/dashboard/page-header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import CreateServiceForm from "./CreateServiceForm";
import { getCategoryParams } from "@/lib/config/services";

interface Props {
  params: {
    category: string;
  };
}

export default function CreateServicePage({ params }: Props) {
  const { category } = params;
  
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Create New Service"
        description={`Add a new service to the ${category} category.`}
        actions={
          <Button variant="outline" asChild>
            <Link href={`/dashboard/services/${category}`}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Link>
          </Button>
        }
      />
      <CreateServiceForm category={category} />
    </div>
  );
}

export async function generateStaticParams() {
  return getCategoryParams();
}
