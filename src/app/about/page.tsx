/**
 * page.tsx
 * Page component for about section.
 */

// Node Modules
import { FC } from 'react';
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

const About: FC = () => (
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
            >
              <MailIcon /> Email
            </a>
          </AlertDescription>
        </Alert>
        <Alert>
          <AlertDescription className="items-center">
            <a
              className="flex items-center gap-2 w-full"
              href="/resume.pdf"
              download
            >
              <FileDown /> Resume
            </a>
          </AlertDescription>
        </Alert>
      </div>
    </BackgroundVideo>

    {/* Main Content Section - Scrollable */}
    <div className="relative z-20 bg-[#fef6e4] p-4 sm:p-8">
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

export default About;
