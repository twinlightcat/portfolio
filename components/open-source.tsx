import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import Link from 'next/link';

export default function OpenSource() {
  const contributions = [
    {
      title: 'Personal GitHub',
      description:
        'Personal projects and explorations. Some projects are private.',
      link: 'https://github.com/twinlightcat',
    },
    {
      title: 'Workplace GitHub',
      description:
        "Private internal contributions to GoDaddy's applications, developer platform ecosystem, CI/CD tools, and infrastructure tooling.",
      link: 'https://github.com/trhodes-godaddy',
    },
  ];

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">GitHub Profiles</h3>
      <p className="text-muted-foreground text-sm mb-6">
        Find my work across personal and professional GitHub accounts
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        {contributions.map((contribution, index) => (
          <Card
            key={index}
            className="h-full flex flex-col rounded-xl md:rounded-2xl py-0 shadow-none border-border dark:border-accent/50"
          >
            <CardContent className="p-4 md:p-6 flex-1 flex flex-col">
              <div className="mb-3">
                <Github className="h-7 w-7 text-primary" />
              </div>
              <h4 className="text-base font-bold mb-1">{contribution.title}</h4>
              <p className="text-sm text-muted-foreground mb-3 flex-1">
                {contribution.description}
              </p>

              <Button
                variant="outline"
                size="sm"
                asChild
                className="w-full hover:bg-[oklch(0.82_0.12_55)] hover:text-foreground hover:border-[oklch(0.82_0.12_55)]"
              >
                <Link
                  href={contribution.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" /> View on GitHub
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
