import { PageHeader } from '@/components/dashboard/page-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import {
  FileText,
  Grid,
  MessageSquare,
  Plus,
  Users,
} from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-5">
      <PageHeader
        title="Dashboard"
        description="Welcome to the Rareminds admin dashboard."
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Services
            </CardTitle>
            <Grid className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              +2 from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Blogs</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">
              +4 from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Team Members
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">+1 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Testimonials
            </CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
            <p className="text-xs text-muted-foreground">
              +3 from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="recent" className="w-full">
        <TabsList>
          <TabsTrigger value="recent">Recent Activity</TabsTrigger>
          <TabsTrigger value="drafts">Drafts</TabsTrigger>
        </TabsList>
        <TabsContent value="recent" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-base">
                  <span>Latest Services</span>
                  <Button size="sm" variant="outline" asChild>
                    <Link href="/dashboard/services">
                      <Plus className="mr-2 h-4 w-4" />
                      Add New
                    </Link>
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="rounded-lg border p-3">
                    <div className="font-medium">UI/UX Design</div>
                    <div className="text-sm text-muted-foreground">
                      Updated 2 days ago
                    </div>
                  </div>
                  <div className="rounded-lg border p-3">
                    <div className="font-medium">Web Development</div>
                    <div className="text-sm text-muted-foreground">
                      Updated 3 days ago
                    </div>
                  </div>
                  <div className="rounded-lg border p-3">
                    <div className="font-medium">Mobile App Development</div>
                    <div className="text-sm text-muted-foreground">
                      Updated 5 days ago
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-base">
                  <span>Latest Blogs</span>
                  <Button size="sm" variant="outline" asChild>
                    <Link href="/dashboard/blogs">
                      <Plus className="mr-2 h-4 w-4" />
                      Add New
                    </Link>
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="rounded-lg border p-3">
                    <div className="font-medium">
                      The Future of Web Design
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Published 1 day ago
                    </div>
                  </div>
                  <div className="rounded-lg border p-3">
                    <div className="font-medium">
                      10 Tips for Better UX
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Published 4 days ago
                    </div>
                  </div>
                  <div className="rounded-lg border p-3">
                    <div className="font-medium">
                      Responsive Design in 2025
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Published 1 week ago
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-base">
                  <span>Latest Team Members</span>
                  <Button size="sm" variant="outline" asChild>
                    <Link href="/dashboard/team">
                      <Plus className="mr-2 h-4 w-4" />
                      Add New
                    </Link>
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 rounded-lg border p-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <span className="font-medium text-primary">JD</span>
                    </div>
                    <div>
                      <div className="font-medium">Jane Doe</div>
                      <div className="text-sm text-muted-foreground">
                        UI/UX Designer
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg border p-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <span className="font-medium text-primary">JS</span>
                    </div>
                    <div>
                      <div className="font-medium">John Smith</div>
                      <div className="text-sm text-muted-foreground">
                        Frontend Developer
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="drafts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Draft Content</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border p-4 text-center">
                <p className="mb-2 text-sm text-muted-foreground">
                  You have 5 draft items waiting to be published
                </p>
                <Button size="sm">Review Drafts</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}