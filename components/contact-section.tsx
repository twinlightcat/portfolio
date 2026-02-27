'use client';

import { Mail, Github } from 'lucide-react';
import { useState } from 'react';
import { contactData } from '@/lib/portfolio-data';

interface ContactSectionProps {
  data?: typeof contactData;
}

export function ContactSection({ data = contactData }: ContactSectionProps) {
  return (
    <div className="space-y-6 md:space-y-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Contact
        </h2>
        <div className="w-10 h-1 bg-accent rounded-full mt-1 mb-6" />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-3 md:gap-4">
        <div className="flex items-center gap-3 md:gap-4 p-4 md:p-5 bg-card dark:bg-secondary rounded-xl md:rounded-2xl border border-border dark:border-accent/50 transition-colors">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
            <Mail className="w-5 h-5 md:w-6 md:h-6 text-accent" />
          </div>
          <div className="min-w-0">
            <h3 className="text-xs md:text-sm font-medium text-muted-foreground mb-1">
              Email
            </h3>
            <a
              href={`mailto:${data.email}`}
              className="text-sm md:text-base text-foreground hover:text-accent transition-colors font-medium truncate block"
            >
              {data.email}
            </a>
          </div>
        </div>

        <div className="flex items-center gap-3 md:gap-4 p-4 md:p-5 bg-card dark:bg-secondary rounded-xl md:rounded-2xl border border-border dark:border-accent/50 transition-colors">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
            <Github className="w-5 h-5 md:w-6 md:h-6 text-accent" />
          </div>
          <div>
            <h3 className="text-xs md:text-sm font-medium text-muted-foreground mb-1">
              Workplace GitHub
            </h3>
            <a
              href={`https://github.com/${data.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-base text-foreground hover:text-accent transition-colors font-medium"
            >
              {data.github}
            </a>
          </div>
        </div>
        <div className="flex items-center gap-3 md:gap-4 p-4 md:p-5 bg-card dark:bg-secondary rounded-xl md:rounded-2xl border border-border dark:border-accent/50 transition-colors">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
            <Github className="w-5 h-5 md:w-6 md:h-6 text-accent" />
          </div>
          <div>
            <h3 className="text-xs md:text-sm font-medium text-muted-foreground mb-1">
              Personal GitHub
            </h3>
            <a
              href={`https://github.com/${data.githubPersonal}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-base text-foreground hover:text-accent transition-colors font-medium"
            >
              {data.githubPersonal}
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-64 md:h-80 rounded-xl md:rounded-2xl overflow-hidden border border-border dark:border-accent/50 bg-secondary">
        <iframe
          src={data.mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location"
        />
      </div>
    </div>
  );
}
