/**
 * publishedWorks.ts
 */

export interface PublishedWork {
  articleHref: string;
  articleTitle: string;
  authors: string[];
  publisher: string;
  year: number;
}

const publishedWorks = [
  {
    articleHref: 'https://arxiv.org/abs/2510.02567',
    articleTitle: 'Agentic Additive Manufacturing Alloy Discovery',
    authors: ['Peter Pak', 'Achuth Chandrasekhar', 'Amir Barati Farimani'],
    publisher: 'arXiv',
    year: 2025,
  },
  {
    articleHref:
      'https://www.sciencedirect.com/science/article/pii/S277236902500026X',
    articleTitle:
      'AdditiveLLM: Large language models predict defects in metals additive manufacturing',
    authors: ['Peter Pak', 'Amir Barati Farimani'],
    publisher: 'Additive Manufacturing Letters',
    year: 2025,
  },
  {
    articleHref:
      'https://www.sciencedirect.com/science/article/pii/S2214860424005499',
    articleTitle:
      'ThermoPore: Predicting Part Porosity Based on Thermal Images Using Deep Learning',
    authors: [
      'Peter Pak',
      'Francis Ogoke',
      'Andrew Polonsky',
      'Anthony Garland',
      'Dan S Bolintineanu',
      'Dan R Moser',
      'Michael J Heiden',
      'Amir Barati Farimani',
    ],
    publisher: 'Journal of Additive Manufacturing',
    year: 2024,
  },
  {
    articleHref:
      'https://www.sciencedirect.com/science/article/pii/S2772369024000513',
    articleTitle:
      'Deep learning for melt pool depth contour prediction from surface thermal images via vision transformers',
    authors: [
      'Francis Ogoke',
      'Peter Pak',
      'Alexander Myers',
      'Guadalupe Quirarte',
      'Jack Beuth',
      'Jonathan Malen',
      'Amir Barati Farimani',
    ],
    publisher: 'Additive Manufacturing Letters',
    year: 2024,
  },
  {
    articleHref: 'https://arxiv.org/abs/2408.14307',
    articleTitle:
      'LLM-3D Print: Large Language Models to Monitor and Control 3D Printing',
    authors: ['Yayati Jadhav', 'Peter Pak', 'Amir Barati Farimani'],
    publisher: 'arXiv',
    year: 2024,
  },
];

export default publishedWorks;
