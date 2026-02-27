// import { BookOpen, Briefcase } from 'lucide-react'
import { resumeData } from '@/lib/portfolio-data';
import { Badge } from '@/components/ui/badge';

interface ResumeSectionProps {
  data?: typeof resumeData;
}

export function ResumeSection({ data = resumeData }: ResumeSectionProps) {
  return (
    <div className="space-y-8 md:space-y-10">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Experience
        </h2>
        <div className="w-12 h-1 bg-accent rounded-full mb-6 mt-1" />
        <p className="mt-3 text-muted-foreground">
          My professional journey and key accomplishments
        </p>
      </div>

      {/* Experience */}
      <div>
        <div className="grid grid-cols-1 gap-3 md:gap-4">
          {data.experience.map((item, index) => (
            <div
              key={index}
              className="flex flex-col p-4 md:p-6 bg-card rounded-xl md:rounded-2xl border border-border dark:border-accent/50"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <div>
                  <h4 className="text-base md:text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {item.company}
                  </p>
                </div>
                <div className="mt-2 sm:mt-0 flex flex-col sm:items-end">
                  <Badge variant="outline" className="text-xs">
                    {item.period}
                  </Badge>
                  <span className="text-xs text-muted-foreground mt-1">
                    {item.location}
                  </span>
                </div>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
