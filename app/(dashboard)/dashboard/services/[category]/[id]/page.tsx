import { PageHeader } from '@/components/dashboard/page-header';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import EditServiceForm from './EditServiceForm';

interface Props {
  params: {
    category: string;
    id: string;
  };
}

export default function ServicePage({ params }: Props) {
  const { category, id } = params;
  
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Edit Service"
        description="Update service information."
        actions={
          <Button variant="outline" asChild>
            <Link href={`/dashboard/services/${category}`}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Link>
          </Button>
        }
      />
      <EditServiceForm serviceId={id} />
    </div>
  );
}

import { getServiceParams } from '@/lib/config/services';

export async function generateStaticParams() {
  return getServiceParams();
}