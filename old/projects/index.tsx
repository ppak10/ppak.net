/**
 * index.tsx
 * Main page for displaying projects.
 */

// Node Modules
import { EntrySkeletonType } from 'contentful';
import type { NextPage } from 'next';
import Image from 'next/legacy/image';
import Link from 'next/link';

// Constants
// Thumbnails should have 4:3 aspect ratio to appear correctly.
const THUMBNAIL_HEIGHT = 230;
const THUMBNAIL_WIDTH = 307;

// Contentful
import { getEntries, Entries } from 'common/contentful';

// Styled Components
import { StyledListItem, StyledProjects } from 'common/styled';

// Types
interface Props {
  entries: Entries;
}

export const getStaticProps = async () => {
  const entries = await getEntries({
    content_type: 'project',
    select: [
      `fields.${'name'}`,
      `fields.${'description'}`,
      `fields.${'slug'}`,
      `fields.${'thumbnail'}`,
    ],
  });

  return {
    props: {
      entries
    }
  };
};

const Projects: NextPage<Props> = ({ entries }) => {
  // JSX
  const projectsJSX = (entries as EntrySkeletonType[]).map((entry: EntrySkeletonType) => (
    <StyledListItem key={entry.fields.slug}>
      <Link href={`/projects/${entry.fields.slug}`}>
        <h3>
          {entry.fields.name}
        </h3>
      </Link>
      {entry.fields.thumbnail && (
        <Image
          alt={entry.fields.thumbnail.fields.description}
          height={THUMBNAIL_HEIGHT}
          width={THUMBNAIL_WIDTH}
          src={`http:${entry.fields.thumbnail.fields.file.url}`}
        />
      )}
    </StyledListItem>
  ));

  return (
    <StyledProjects>
      {projectsJSX}
    </StyledProjects>
  );
};

export default Projects;

Projects.defaultProps = {
  entries: [],
};
