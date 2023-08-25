import { PageProps } from '@/type';
import { DEFAULT_LOCALE, getBlogDetail } from '@/apollo/query';

interface LocalProps extends PageProps {
  params: {
    blogid: string
  }
}

/**
 * get locale from searchPaarms
 * get blogid from path
 */
export default async function BlogDetail({ searchParams, params }: LocalProps) {
  const blog = await getBlogDetail({
    locale: searchParams.locale || DEFAULT_LOCALE,
    id: params.blogid,
  });

  return (
    <div className='flex flex-col gap-4'>
      <div className='text-2xl text-center'>
        {blog?.title}
      </div>
      <div>
        {blog?.image ? (
          <img src={blog.image} alt='' width={300} height={300} />
        ) : <></>}
      </div>
    </div>
  )
}
