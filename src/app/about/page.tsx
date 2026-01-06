/**
 * page.tsx
 * Page component for about section.
 */

// Node Modules
import { FC } from 'react';
import { 
  GithubIcon,
  GraduationCapIcon,
  LinkedinIcon,
  MailIcon,
  SmileIcon,
} from 'lucide-react';

// Components
import PublishedWorksSection from './PublishedWorksSection';
import { Button } from 'components/ui/button';
import { Section, SectionTitle } from 'components/Section';

const About: FC = () => (
  <div className="relative">
    {/* Hero Section with Background Video */}
    <div className="relative h-screen w-full overflow-hidden bg-[#fef6e4]">
      {/* Background Video - Fixed Position */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute left-0 top-0 h-full w-full object-cover"
      >
        <source src="/background.webm" type="video/webm" />
        <source src="/background.mp4" type="video/mp4" />
      </video>

      {/* Content Overlay on Hero */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center p-4 sm:p-8">
        <div className="mx-auto max-w-2xl">
          <header className="border-4 border-black bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h1 className="mb-2 text-5xl font-black tracking-tight sm:text-6xl">
              Peter Pak
            </h1>
            <p className="text-xl font-bold text-gray-700">
              Mechanical Engineer / Materials Scientist / Software Developer /
              U.S. Citizen
            </p>
          </header>
        </div>
      </div>
    </div>

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
                href="mailto:ppak10@gmail.com"
              >
                <MailIcon />
                Email Me
              </a>
            </Button>
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
                Hugging Face
              </a>
            </Button>
          </div>
        </Section>
      </div>
    </div>
  </div>
);

export default About;
