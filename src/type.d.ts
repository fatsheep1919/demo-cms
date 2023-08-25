export type LocaleType = 'en-US' | 'zh-CN';

export type SearchParams = {
  locale?: LocaleType;
}

export type PageProps = {
  searchParams: SearchParams;
}