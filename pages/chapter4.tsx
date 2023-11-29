import Layout from '@/components/Layout';
import PageCard from '@/components/PageCard';
import JSumRange from '@/components/exercises/chapter-4-jon/JSumRange';
import ReversingAnArray from '@/components/exercises/chapter-4-oscar/ReversingAnArray';
import SumOfARange from '@/components/exercises/chapter-4-oscar/SumOfARange';
import DeepComparison from '@/components/exercises/chapter-4-oscar/DeepComparison/DeepComparison';
import chapter from '@/constants/chapter.json';
import '../app/globals.css';

const chapterId = 4;

const chapterMatch = chapter.find((chapter) => chapter.id === chapterId);

if (!chapterMatch) {
  throw new Error(`Chapter ${chapterId} not found`);
}

const { title, subtitle, details, devOscar, devJon } = chapterMatch;

export default function Chapter4() {
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
          <div className='flex flex-col'>
            {devOscar && (
              <>
                <PageCard
                  id={devOscar[0].id}
                  title={devOscar[0].title}
                  details={devOscar[0].details}
                  code={() => <SumOfARange />}
                />
                <PageCard
                  id={devOscar[1].id}
                  title={devOscar[1].title}
                  details={devOscar[1].details}
                  code={() => <ReversingAnArray />}
                />
                <PageCard
                  id={devOscar[3].id}
                  title={devOscar[3].title}
                  details={devOscar[3].details}
                  code={() => <DeepComparison />}
                />
              </>
            )}
          </div>
          <div className='flex flex-col'>
            {devJon && (
              <PageCard
                id={devJon[0].id}
                title={devJon[0].title}
                details={devJon[0].details}
                code={() => <JSumRange />}
              />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
