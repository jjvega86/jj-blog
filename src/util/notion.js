import { Client } from "@notionhq/client";
const notion = new Client({ auth: import.meta.env.NOTION_KEY });
const databaseId = import.meta.env.NOTION_DATABASE_ID;

// TODO: Write helpers to whittle data down for posts list and post content
export async function getPosts() {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "Published",
        checkbox: {
          equals: true,
        },
      },
    });
    return response.results;
  } catch (error) {
    console.error(error.body);
  }
}

export async function getPostContent(pageId) {
  try {
    const response = await notion.blocks.children.list({
      block_id: pageId,
      page_size: 50,
    });
    return response.results;
  } catch (error) {
    console.error(error.body);
  }
}
