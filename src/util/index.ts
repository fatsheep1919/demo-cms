import { SearchParams } from '@/type';

export function searchParamsToString(searchParams: SearchParams): string {
  let paramStr = '';
  if (searchParams.locale) {
    paramStr = `?locale=${searchParams.locale}`;
  }
  return paramStr;
}