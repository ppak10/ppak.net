/**
 * contentful.ts
 * Contentful API functions.
 */

// Node Modules
import { createClient } from 'contentful';

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

export const getEntries = async () => {
  try {
    const response = await client.getEntries();
    return response.items;
  } catch (error) {
    console.error('Error retrieving Contentful entries:', error);
    return [];
  }
};
