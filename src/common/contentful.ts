/**
 * contentful.ts
 * Contentful API functions.
 */

// Node Modules
import {
  createClient,
  EntriesQueries,
  EntryCollection,
  EntrySkeletonType,
} from 'contentful';

// Types
export type Query = EntriesQueries<EntrySkeletonType, undefined> | undefined;
export type Entries = EntryCollection<EntrySkeletonType, undefined, string> | object;

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

export const getEntries = async (query?: Query): Promise<Entries>=> {
  try {
    const response = await client.getEntries(query);
    return response.items;
  } catch (error) {
    console.error('Error retrieving Contentful entries:', error);
    return {};
  }
};
