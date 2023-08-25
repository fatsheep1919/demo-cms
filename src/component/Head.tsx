'use client'
import { useSearchParams } from 'next/navigation';

import { LocaleType } from '@/type';
import { DEFAULT_LOCALE } from '@/apollo/query';

/**
 * Head is a client side component
 * because it includes a switch used to control the locale.
 * locale parameter will be appended to the url and 
 * passed to the server side pages
 */
export default function Head() {
  const searchParams = useSearchParams();
  const locale = searchParams.get('locale') || 'en-US';

  return (
    <div className='w-full p-4 flex gap-4 flex-row-reverse'>
      <div className='flex gap-2'>
        <div>中文</div>
        <div
          className='w-10 h-6 bg-gray-300 rounded relative cursor-pointer'
          onClick={() => {
            let param: LocaleType = DEFAULT_LOCALE;
            if (locale === 'en-US') {
              param = 'zh-CN';
            } else if (locale === 'zh-CN') {
              param = 'en-US';
            }

            var href = new URL(window.location.href);
            href.searchParams.set('locale', param);
            window.location.href = href.toString();
          }}
        >
          <div
            className={
              `w-4 h-4 bg-gray-500 rounded absolute top-1 ${locale === 'zh-CN' ? 'left-1' : 'right-1'}`
            }
          />
        </div>
        <div>English</div>
      </div>
    </div>
  )
}