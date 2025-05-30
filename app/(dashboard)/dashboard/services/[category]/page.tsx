import { PageHeader } from "@/components/dashboard/page-header";
import CategoryServicesTable from "./CategoryServicesTable";

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
      />
      <CategoryServicesTable category={category} />
    </div>
  );
}

export async function generateStaticParams() {
  // List all categories you want to statically generate (lowercase for route matching)
  return [
    { category: 'recruitment' },
    { category: 'training' },
    { category: 'design' },
    { category: 'development' },
    { category: 'marketing' },
  ];
}
