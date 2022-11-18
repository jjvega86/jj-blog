import { Client } from "@notionhq/client";
const notion = new Client({ auth: import.meta.env.NOTION_KEY });
const databaseId = import.meta.env.NOTION_DATABASE_ID;

export default async function getPosts() {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
    });
    console.log(response);
  } catch (error) {
    console.error(error.body);
  }
}
