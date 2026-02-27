import { Mail, Phone, Calendar, MapPin } from 'lucide-react';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { profileData } from '@/lib/portfolio-data';

interface ProfileSidebarProps {
  data?: typeof profileData;
}

export function ProfileSidebar({ data = profileData }: ProfileSidebarProps) {
  return (
    <aside className="w-full lg:w-80 bg-card rounded-2xl border border-border dark:border-accent/50 p-4 md:p-6 lg:sticky lg:top-8 h-fit">
      {/* Profile Image */}
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 md:w-32 md:h-32 mb-4 md:mb-6  overflow-hidden">
          <img
            src={data.avatar || '/placeholder.svg'}
            alt={data.name}
            className="w-full h-full object-contain"
          />
        </div>

        <h1 className="text-xl md:text-2xl font-bold text-foreground mb-1">
          {data.name}
        </h1>
        <p className="text-xs md:text-sm text-muted-foreground bg-secondary px-3 md:px-4 py-1 rounded-lg">
          {data.title}
        </p>
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
