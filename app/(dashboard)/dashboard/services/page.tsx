'use client';

import { PageHeader } from '@/components/dashboard/page-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, BookOpen, PenTool, Code, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const categories = [
	{
		name: 'Recruitment',
		description: 'Find and hire the best talent for your organization.',
		icon: <Briefcase className="h-8 w-8 text-primary" />,
		href: '/dashboard/services/recruitment',
	},
	{
		name: 'Training',
		description: 'Upskill your team with our professional training programs.',
		icon: <BookOpen className="h-8 w-8 text-primary" />,
		href: '/dashboard/services/training',
	},
	{
		name: 'Design',
		description: 'Creative design solutions for your business needs.',
		icon: <PenTool className="h-8 w-8 text-primary" />,
		href: '/dashboard/services/design',
	},
	{
		name: 'Development',
		description: 'Web and mobile development services.',
		icon: <Code className="h-8 w-8 text-primary" />,
		href: '/dashboard/services/development',
	},
	{
		name: 'Marketing',
		description: 'Grow your business with our marketing expertise.',
		icon: <TrendingUp className="h-8 w-8 text-primary" />,
		href: '/dashboard/services/marketing',
	},
];

export default function ServicesPage() {
	return (
		<div className="flex flex-col gap-6">
			<PageHeader
				title="Service Categories"
				description="Browse and manage your service categories."
			/>
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{categories.map((cat) => (
					<Link key={cat.name} href={cat.href} className="group">
						<Card className="transition-shadow group-hover:shadow-lg h-full">
							<CardHeader className="flex flex-row items-center gap-4">
								{cat.icon}
								<CardTitle>{cat.name}</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground text-sm">
									{cat.description}
								</p>
							</CardContent>
						</Card>
					</Link>
				))}
			</div>
		</div>
	);
}