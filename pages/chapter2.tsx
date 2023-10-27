import '../app/globals.css';
import PageCard from '@/components/PageCard';
import Layout from '@/components/Layout';
import chapter from '@/constants/chapter.json';

import Pyramid from '@/components/exercises/chapter-2-oscar/Pyramid';
import FizzBuzz from '@/components/exercises/chapter-2-oscar/FizzBuzz';
import Chessboard from '@/components/exercises/chapter-2-oscar/Chessboard';

const chapterId = 2;

const chapterMatch = chapter.find((chapter) => chapter.id === chapterId);

if (!chapterMatch) {
  throw new Error(`Chapter ${chapterId} not found`);
}

const { title, subtitle, details, devOscar, devJon } = chapterMatch;

export default function Chapter2() {
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
            {devOscar && (
              <>
                <PageCard
                  id={devOscar[0].id}
                  title={devOscar[0].title}
                  details={devOscar[0].details}
                  code={() => <Pyramid rows={0} />}
                />
                <PageCard
                  id={devOscar[1].id}
                  title={devOscar[1].title}
                  details={devOscar[1].details}
                  code={() => <FizzBuzz phraseValue={''} />}
                />
                <PageCard
                  id={devOscar[2].id}
                  title={devOscar[2].title}
                  details={devOscar[2].details}
                  code={() => <Chessboard size={8} />}
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
                code={() => 'YOUR CODE GOES HERE'}
              />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
