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
        {/*<div className="flex items-center gap-2 md:gap-3 mb-6">*/}
        {/*  <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-accent" />*/}
        {/*  <h3 className="text-xl md:text-2xl font-bold text-foreground">Experience</h3>*/}
        {/*</div>*/}
        <div className="space-y-4">
          {data.experience.map((item, index) => (
            <div
              key={index}
              className="relative pl-5 md:pl-6 pb-6 border-l-2 border-border last:pb-0"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent" />
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
              {/*<p className="text-xs md:text-sm text-accent mb-2">*/}
              {/*  {item.period}*/}
              {/*</p>*/}
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
