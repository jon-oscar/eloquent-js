import PageCard from '@/components/PageCard';
import '../app/globals.css';
import Layout from '@/components/Layout';
import { chapter } from '@/constants/chapter';

const chapterId = 2;

const chapterMatch = chapter.find((chapter) => chapter.id === chapterId);

if (!chapterMatch) {
  throw new Error(`Chapter ${chapterId} not found`);
}

const { title, subtitle, details, devOscar, devJon } = chapterMatch;

const chapter2 = () => {
  return (
    <Layout>
      <div className=' flex xl:flex-col gap-5 z-0 relative max-w-[1440px] mx-auto mb-2'>
        <div className='px-6 pt-36 max-width'>
          <h1 className='text-4xl font-extrabold'>{title}</h1>
          <h2 className='text-[27px] text-black-100 font-light mt-5'>
            {subtitle}
          </h2>
          <p>{details}</p>
        </div>

        <div className='flex xl:flex-row flex-col gap-5 z-0 relative max-w-[1440px] mx-auto'>
          <div className='flex flex-col'>
            <PageCard cardInfo={devOscar as []} />
          </div>
          <div className='flex flex-col'>
            <PageCard cardInfo={devJon as []} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default chapter2;
