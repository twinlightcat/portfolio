import { Mail, Phone, Calendar, MapPin } from 'lucide-react';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { profileData } from '@/lib/portfolio-data';

interface ProfileSidebarProps {
  data?: typeof profileData;
}

export function ProfileSidebar({ data = profileData }: ProfileSidebarProps) {
  return (
    <aside className="w-full lg:w-80 bg-card rounded-2xl border border-border dark:border-accent/50 p-4 md:p-6 lg:sticky lg:top-8 h-fit">
      {/* Profile - side by side when stacked, centered when sidebar */}
      <div className="flex flex-row items-center gap-4 lg:flex-col lg:items-center">
        <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-32 lg:h-32 shrink-0 overflow-hidden rounded-full lg:rounded-none lg:mb-6 aspect-square">
          <img
            src={data.avatar || '/placeholder.svg'}
            alt={data.name}
            width={128}
            height={128}
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
        </div>

        <div className="min-w-0 flex-1 lg:text-center lg:flex-none">
          <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-0.5 lg:mb-1 truncate">
            {data.name}
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground bg-secondary dark:bg-[#1e293b] dark:text-foreground px-2 py-0.5 sm:px-3 sm:py-1 rounded-lg inline-block lg:inline">
            {data.title}
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-border my-4 md:my-6" />

      {/* Contact Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 md:gap-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-accent/10 flex items-center justify-center shrink-0">
            <Mail className="w-5 h-5 text-accent" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-muted-foreground uppercase mb-1">
              Email
            </p>
            <a
              href={`mailto:${data.email}`}
              className="text-sm text-foreground hover:text-accent transition-colors break-all"
            >
              {data.email}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-accent/10 flex items-center justify-center shrink-0">
            <MapPin className="w-5 h-5 text-accent" />
          </div>
          <div className="flex-1">
            <p className="text-xs text-muted-foreground uppercase mb-1">
              Location
            </p>
            <p className="text-sm text-foreground">{data.location}</p>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex items-center justify-center gap-4 mt-4 md:mt-6 pt-4 md:pt-6 border-t border-border">
        <a
          href={data.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-accent/10 text-foreground hover:bg-[oklch(0.82_0.12_55)] hover:text-foreground dark:hover:text-accent transition-colors flex items-center justify-center"
          aria-label="Instagram"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href={data.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-accent/10 text-foreground hover:bg-[oklch(0.82_0.12_55)] hover:text-foreground dark:hover:text-accent transition-colors flex items-center justify-center"
          aria-label="GitHub"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href={data.social.githubPersonal}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-accent/10 text-foreground hover:bg-[oklch(0.82_0.12_55)] hover:text-foreground dark:hover:text-accent transition-colors flex items-center justify-center"
          aria-label="Instagram"
        >
          <Github className="w-5 h-5" />
        </a>
      </div>
    </aside>
  );
}
