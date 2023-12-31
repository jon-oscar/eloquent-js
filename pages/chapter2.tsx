import Layout from '@/components/Layout';
import PageCard from '@/components/PageCard';
import chapter from '@/constants/chapter.json';
import '../app/globals.css';

import Chessboard from '@/components/exercises/chapter-2-oscar/Chessboard';
import FizzBuzz from '@/components/exercises/chapter-2-oscar/FizzBuzz';
import Pyramid from '@/components/exercises/chapter-2-oscar/Pyramid';
import JChessBoard from '@/components/exercises/chapter-2-jon/JChessBoard';
import JFizzBuzz from '@/components/exercises/chapter-2-jon/JFizzBuzz';
import JPyramid from '@/components/exercises/chapter-2-jon/JPyramid';

/**
 * Renders the content for Chapter 2 page.
 * @returns JSX element
 */
export default function Chapter2() {
  // Find the chapter details from the chapter.json file
  const chapterId = 2;
  const chapterMatch = chapter.find((chapter) => chapter.id === chapterId);

  if (!chapterMatch) {
    throw new Error(`Chapter ${chapterId} not found`);
  }

  const { title, subtitle, details, devOscar, devJon } = chapterMatch;

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
                  code={() => <Pyramid rows={0} />}
                  details={devOscar[0].details}
                  id={devOscar[0].id}
                  title={devOscar[0].title}
                />
                <PageCard
                  code={() => <FizzBuzz phraseValue={''} />}
                  details={devOscar[1].details}
                  id={devOscar[1].id}
                  title={devOscar[1].title}
                />
                <PageCard
                  code={() => <Chessboard size={8} />}
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
                  code={() => <JPyramid />}
                  details={devJon[0].details}
                  id={devJon[0].id}
                  title={devJon[0].title}
                />
                <PageCard
                  code={() => <JFizzBuzz />}
                  details={devJon[1].details}
                  id={devJon[1].id}
                  title={devJon[1].title}
                />
                <PageCard
                  code={() => <JChessBoard />}
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
