import Link from 'next/link';

import { PageProps } from "@/type";
import { DEFAULT_LOCALE, getBlogs } from '@/apollo/query';
import { searchParamsToString } from '@/util';

export default async function BlogList({ searchParams }: PageProps) {
  const blogs = await getBlogs({
    locale: searchParams.locale || DEFAULT_LOCALE,
  });

  return (
    <div className='flex flex-col gap-4'>
      {blogs?.map((blog, index) => (
        <div
          key={blog?.sys?.id || index}
          className='p-2 text-2xl hover:bg-gray-100'
        >
          <Link href={`/blog/${blog?.sys?.id}${searchParamsToString(searchParams)}`}>
            {`${index + 1}. ${blog?.title}`}
          </Link>
        </div>
      ))}
    </div>
  )
}