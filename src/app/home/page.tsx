import Link from 'next/link';

import { PageProps } from '@/type';
import { DEFAULT_LOCALE, getSite } from '@/apollo/query';
import { searchParamsToString } from '@/util';

export default async function HomePage({ searchParams }: PageProps) {
  const site = await getSite({
    locale: searchParams.locale || DEFAULT_LOCALE,
  });

  return (
    <div className='w-full flex flex-col items-center gap-4'>
        <div className='text-3xl'>
          {site?.slogan}
        </div>
        <div className='p-2 hover:bg-gray-100'>
          <Link href={`/blog/list${searchParamsToString(searchParams)}`}>
            {site?.blogListTxt}
          </Link>
        </div>
    </div>
  )
}