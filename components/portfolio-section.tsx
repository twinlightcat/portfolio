import { useState } from 'react';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

import { ExternalLink, Github, Eye } from 'lucide-react';
import OpenSourceSection from '@/components/open-source';
import { portfolioData } from '@/lib/portfolio-data';

interface PortfolioSectionProps {
  data?: typeof portfolioData;
}

export function PortfolioSection({
  data = portfolioData,
}: PortfolioSectionProps) {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <div className="space-y-6 md:space-y-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Projects
        </h2>
        <div className="w-10 h-1 bg-accent rounded-full mb-6 mt-1" />
        <p className="mt-3 text-muted-foreground">
          Key projects from my professional career
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        {data.projects.map((project, index) => (
          <div key={index} className="project-card">
            <Card className="overflow-hidden h-full flex flex-col rounded-xl md:rounded-2xl py-0 shadow-none border-border dark:border-accent/50">
              <CardContent className="flex-1 flex flex-col p-4 md:p-6">
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mt-3">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-secondary dark:bg-[#1e293b] text-muted-foreground dark:text-foreground px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-links mt-3">
                  {project.codeLink && (
                    <Button size="sm" variant="outline" asChild>
                      <Link
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-1 h-4 w-4" /> Code
                      </Link>
                    </Button>
                  )}
                  {project.liveLink && (
                    <Button size="sm" variant="outline" asChild>
                      <Link
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-1 h-4 w-4" /> Live
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
      <OpenSourceSection />
    </div>
  );
}
