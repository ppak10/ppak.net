/**
 * page.tsx
 * Page component for about section.
 */

'use client';

// Node Modules
import { FC } from 'react';
import { usePostHog } from 'posthog-js/react';
import {
  FileDown,
  GithubIcon,
  GraduationCapIcon,
  LinkedinIcon,
  MailIcon,
  SmileIcon,
} from 'lucide-react';

// Components
import PublishedWorksSection from './PublishedWorksSection';
import { Alert, AlertDescription } from 'components/ui/alert';
import { Button } from 'components/ui/button';
import { Section, SectionTitle } from 'components/Section';
import BackgroundVideo from 'components/BackgroundVideo';
import AnimatedWords from 'components/AnimatedWords';

const About: FC = () => {
  const posthog = usePostHog();

  return (
    <div className="relative">
      <BackgroundVideo src="/background.webm" type="video/webm">
        {/* Bio Section */}
        <Section className="w-full" id="name">
          <SectionTitle>Peter Pak</SectionTitle>
          <AnimatedWords
            words={[
              'Mechanical Engineer',
              'Materials Scientist',
              'Software Developer',
              'U.S. Citizen',
            ]}
          />
        </Section>
        <div className="flex justify-center gap-10">
          <Alert>
            <AlertDescription>
              <a
                className="flex items-center gap-2 w-full"
                href="mailto:ppak10@gmail.com"
                onClick={() => posthog.capture('about_email_clicked')}
              >
                <MailIcon /> Email
              </a>
            </AlertDescription>
          </Alert>
          <Alert>
            <AlertDescription className="items-center">
              <a
                className="flex items-center gap-2 w-full"
                href="/pak_peter_resume.pdf"
                download
                onClick={() => posthog.capture('about_resume_downloaded')}
              >
                <FileDown /> Resume
              </a>
            </AlertDescription>
          </Alert>
        </div>
      </BackgroundVideo>

      {/* Main Content Section - Scrollable */}
      <div className="relative z-20 bg-background p-4 sm:p-8">
        <div className="mx-auto max-w-5xl">
          {/* Bio Section */}
          <Section id="bio">
            <SectionTitle>Bio</SectionTitle>
            <p className="text-lg font-medium leading-relaxed">
              I like building stuff.
            </p>
          </Section>

          <PublishedWorksSection />

          {/* Find Me Section */}
          <Section>
            <SectionTitle>Find Me</SectionTitle>
            <div className="flex flex-wrap gap-4">
              <Button>
                <a
                  className="flex items-center gap-3"
                  href="https://github.com/ppak10"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    posthog.capture('about_social_link_clicked', {
                      platform: 'github',
                    })
                  }
                >
                  <GithubIcon />
                  GitHub
                </a>
              </Button>
              <Button>
                <a
                  className="flex items-center gap-3"
                  href="https://linkedin.com/in/ppak10"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    posthog.capture('about_social_link_clicked', {
                      platform: 'linkedin',
                    })
                  }
                >
                  <LinkedinIcon />
                  LinkedIn
                </a>
              </Button>
              <Button>
                <a
                  className="flex items-center gap-3"
                  href="https://scholar.google.com/citations?user=SpOSuqQAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    posthog.capture('about_social_link_clicked', {
                      platform: 'google_scholar',
                    })
                  }
                >
                  <GraduationCapIcon />
                  Google Scholar
                </a>
              </Button>
              <Button>
                <a
                  className="flex items-center gap-3"
                  href="https://huggingface.co/ppak10"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    posthog.capture('about_social_link_clicked', {
                      platform: 'huggingface',
                    })
                  }
                >
                  <SmileIcon />
                  HuggingFace
                </a>
              </Button>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
};

export default About;
