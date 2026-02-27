'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ProfileSidebar } from '@/components/profile-sidebar';
import { AboutSection } from '@/components/about-section';
import { ResumeSection } from '@/components/resume-section';
import { SkillsSection } from '@/components/skills-section';
import { PortfolioSection } from '@/components/portfolio-section';
import { ContactSection } from '@/components/contact-section';
import { ThemeToggle } from '@/components/theme-toggle';
import {
  profileData,
  aboutData,
  resumeData,
  skillsData,
  portfolioData,
  blogData,
  contactData,
} from '@/lib/portfolio-data';

const sectionVariants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

const sectionTransition = { duration: 0.2, ease: 'easeInOut' as const };

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="min-h-screen bg-background p-3 sm:p-4 md:p-6 lg:p-12">
      <div className="fixed top-4 right-4 md:top-6 md:right-6 z-50">
        <ThemeToggle />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 md:gap-6">
          <ProfileSidebar data={profileData} />

          {/* Main Content */}
          <main className="flex-1 bg-card rounded-xl md:rounded-2xl border border-border dark:border-accent/50 overflow-hidden">
            {/* Navigation */}
            <nav className="relative flex gap-1 sm:gap-2 md:gap-4 p-3 sm:p-4 md:p-6 border-b border-border overflow-x-auto scrollbar-hide">
              {['about', 'resume', 'portfolio', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className="relative px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium capitalize transition-colors whitespace-nowrap shrink-0 overflow-visible"
                >
                  {activeSection === section && (
                    <motion.div
                      layoutId="tab-background"
                      className="absolute inset-0 bg-accent/10 dark:bg-[oklch(0.82_0.12_55)] rounded-lg"
                      style={{ zIndex: 0 }}
                      transition={{
                        type: 'spring',
                        bounce: 0.2,
                        duration: 0.4,
                      }}
                    />
                  )}
                  <span
                    className={`relative z-10 font-semibold transition-colors duration-150 ${
                      activeSection === section
                        ? 'text-foreground dark:text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {section}
                  </span>
                </button>
              ))}
            </nav>

            <div className="p-4 sm:p-5 md:p-6 lg:p-8 min-h-[200px]">
              <AnimatePresence mode="wait">
                {activeSection === 'about' && (
                  <motion.div
                    key="about"
                    variants={sectionVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={sectionTransition}
                  >
                    <AboutSection data={aboutData} />
                  </motion.div>
                )}
                {activeSection === 'resume' && (
                  <motion.div
                    key="resume"
                    variants={sectionVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={sectionTransition}
                  >
                    <ResumeSection data={resumeData} />
                  </motion.div>
                )}
                {activeSection === 'portfolio' && (
                  <motion.div
                    key="portfolio"
                    variants={sectionVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={sectionTransition}
                  >
                    <PortfolioSection data={portfolioData} />
                  </motion.div>
                )}
                {activeSection === 'skills' && (
                  <motion.div
                    key="skills"
                    variants={sectionVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={sectionTransition}
                  >
                    <SkillsSection data={skillsData} />
                  </motion.div>
                )}
                {activeSection === 'contact' && (
                  <motion.div
                    key="contact"
                    variants={sectionVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={sectionTransition}
                  >
                    <ContactSection data={contactData} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
