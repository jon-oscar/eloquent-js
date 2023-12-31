import Layout from '@/components/Layout';
import PageCard from '@/components/PageCard';
import chapter from '@/constants/chapter.json';
import '../app/globals.css';

import BeanCounting from '@/components/exercises/chapter-3-oscar/BeanCounting';
import Minimum from '@/components/exercises/chapter-3-oscar/Minimum';
import Recursion from '@/components/exercises/chapter-3-oscar/Recursion';
import JCountChars from '@/components/exercises/chapter-3-jon/JCountChars';
import JMinimum from '@/components/exercises/chapter-3-jon/JMinimum';
import JRecursiveIsEven from '@/components/exercises/chapter-3-jon/JRecursiveIsEven';

const chapterId = 3;

const chapterMatch = chapter.find((chapter) => chapter.id === chapterId);

if (!chapterMatch) {
  throw new Error(`Chapter ${chapterId} not found`);
}

const { title, subtitle, details, devOscar, devJon } = chapterMatch;

/**
 * Renders the exercises for Chapter 3 of the book.
 * @returns {JSX.Element} The JSX element that represents the content of Chapter 3.
 */
export default function Chapter3() {
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
                  code={() => <Minimum />}
                  details={devOscar[0].details}
                  id={devOscar[0].id}
                  title={devOscar[0].title}
                />
                <PageCard
                  code={() => <Recursion />}
                  details={devOscar[1].details}
                  id={devOscar[1].id}
                  title={devOscar[1].title}
                />
                <PageCard
                  code={() => <BeanCounting phraseValue={''} />}
                  details={devOscar[2].details}
                  id={devOscar[2].id}
                  title={devOscar[2].title}
                />
              </>
            )}
          </div>
          <div className='flex flex-col'>
            {devJon && (
              <>
                <PageCard
                  code={() => <JMinimum />}
                  details={devJon[0].details}
                  id={devJon[0].id}
                  title={devJon[0].title}
                />
                <PageCard
                  code={() => <JRecursiveIsEven />}
                  details={devJon[1].details}
                  id={devJon[1].id}
                  title={devJon[1].title}
                />
                <PageCard
                  code={() => <JCountChars />}
                  details={devJon[2].details}
                  id={devJon[2].id}
                  title={devJon[2].title}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
