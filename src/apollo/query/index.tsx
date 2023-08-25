import cmsClient from "@/apollo/client";
import { BlogOrder } from "@/generated";

/**
 * the queries of Site, Blogs, Blog that have been defined in query.gql
 * can be involked by cmsClient directly in the help of graphql-codegen
 */

export const DEFAULT_LOCALE = 'en-US';

export async function getSite({ locale }: { locale: string }) {
  const re = await cmsClient().Site({ locale });
  return re?.siteCollection?.items?.[0];
}

export async function getBlogs({ locale }: { locale: string }) {
  const re = await cmsClient().Blogs({ locale, order: [BlogOrder.SysPublishedAtDesc] });
  return re?.blogCollection?.items;
}

export async function getBlogDetail({ locale, id }: { locale: string, id: string}) {
  const re = await cmsClient().Blog({ locale, id });
  return re?.blog;
}