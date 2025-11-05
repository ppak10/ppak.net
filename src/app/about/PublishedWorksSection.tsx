/**
 * PublishedWorks.tsx 
 * Section for Navigating through published works.
 */

'use client'

// Node Modules
import { FC, Fragment, useState } from 'react';

// Components
import { Checkbox } from 'components/ui/checkbox';
import { Label } from 'components/ui/label';
import { Section, SectionTitle } from 'components/Section';

// Constants
import publishedWorks, { PublishedWork } from './publishedWorks'; 

// Types
interface Props {
  publishedWork: PublishedWork;
}

const PublishedWorkListItem: FC<Props> = ({ publishedWork }) => (
  <li className="border-2 border-black bg-main/10 p-4 shadow-shadow">
    <h3 className="mb-2 text-lg">
      <a href={publishedWork.articleHref} target="_blank" rel="noopener noreferrer">
        {publishedWork.articleTitle}
      </a>
    </h3>
    <p className="mb-1 text-base font-medium">
      {publishedWork.authors.map((author, index, array) => (
        <Fragment key={index}>
          <span className={index ? "" : "font-black"}>
            {author}
          </span>
          <span>
            {(array.length > 0 && index !== array.length -1)? ', ': ''}
          </span>
        </Fragment>
      ))}
    </p>
    <p className="text-sm font-bold">
      <em>{publishedWork.publisher}</em> · {publishedWork.year}
    </p>
  </li>
);

const PublishedWorksSection: FC = () => {
  // Hooks
  const [showFirstAuthorOnly, setShowFirstAuthorOnly] = useState(false);

  // Callbacks 
  const handleCheckedChange = () => {
    setShowFirstAuthorOnly((prevState) => !prevState);
  }

  return (
    <Section id="published_works">
      <SectionTitle>Published Works</SectionTitle>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="first_author_only" 
          checked={showFirstAuthorOnly}
          onCheckedChange={handleCheckedChange}
        />
        <Label htmlFor="first_author_only">Show first author only</Label>
      </div>
      <ul className="flex flex-col mt-4 gap-4">
        {publishedWorks
          .filter(({authors}) => showFirstAuthorOnly ? authors[0] === "Peter Pak" : authors)
          .map((publishedWork) => (
          <PublishedWorkListItem
            key={publishedWork.articleHref}
            publishedWork={publishedWork}
          />
        ))}
      </ul>
    </Section>
  );
};

export default PublishedWorksSection;

