import Layout from '@/components/Layout';
import PageCard from '@/components/PageCard';
import chapter from '@/constants/chapter.json';
import '../app/globals.css';
import JVector from '@/components/exercises/chapter-6-jon/JVector';

const chapterId = 6;

const chapterMatch = chapter.find((chapter) => chapter.id === chapterId);

if (!chapterMatch) {
  throw new Error(`Chapter ${chapterId} not found`);
}

const { title, subtitle, details, devOscar, devJon } = chapterMatch;

export default function Chapter6() {
  return (
    <Layout>
      <div className=' relative z-0 mx-auto mb-2 flex max-w-[1440px] gap-5 xl:flex-col'>
        <div className='max-width px-6 pt-36'>
          <h1 className='text-4xl font-extrabold'>{title}</h1>
          <h2 className='mt-5 text-[27px] font-light text-black-100'>
            {subtitle}
          </h2>
          <p>{details}</p>
        </div>

        <div className='relative z-0 mx-auto flex max-w-[1440px] flex-col gap-5 xl:flex-row'>
          <div className='flex flex-col'>{devOscar && null}</div>
          <div className='flex flex-col'>
            {devJon && (
              <>
                <PageCard
                  code={() => <JVector />}
                  details={devJon[0].details}
                  id={devJon[0].id}
                  title={devJon[0].title}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
