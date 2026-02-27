import { skillsData } from '@/lib/portfolio-data';

interface SkillsSectionProps {
  data?: typeof skillsData;
}

export function SkillsSection({ data = skillsData }: SkillsSectionProps) {
  return (
    <div className="space-y-6 md:space-y-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Skills
        </h2>
        <div className="w-10 h-0.5 bg-accent mb-6 mt-1" />
        <p className="text-muted-foreground">
          {data.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        {data.categories.map((category, index) => (
          <div
            key={index}
            className="p-4 md:p-6 bg-card rounded-xl md:rounded-2xl border border-border dark:border-accent/50"
          >
            <h3 className="text-base md:text-lg font-semibold text-foreground mb-3">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="text-xs bg-secondary dark:bg-[#1e293b] text-muted-foreground dark:text-foreground px-2 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
