import Layout from '@/components/Layout';
import PageCard from '@/components/PageCard';
import chapter from '@/constants/chapter.json';
import Flattening from '@/components/exercises/chapter-5-oscar/Flattening/Flattening';
import YourOwnLoop from '@/components/exercises/chapter-5-oscar/YourOwnLoop/YourOwnLoop';
import '../app/globals.css';
import JFlatList from '@/components/exercises/chapter-5-jon/JFlatList';

const chapterId = 5;

const chapterMatch = chapter.find((chapter) => chapter.id === chapterId);

if (!chapterMatch) {
  throw new Error(`Chapter ${chapterId} not found`);
}

const { title, subtitle, details, devOscar, devJon } = chapterMatch;

export default function Chapter5() {
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
                  code={() => <Flattening />}
                  details={devOscar[0].details}
                  id={devOscar[0].id}
                  title={devOscar[0].title}
                />
                <PageCard
                  code={() => <YourOwnLoop />}
                  details={devOscar[1].details}
                  id={devOscar[1].id}
                  title={devOscar[1].title}
                />
              </>
            )}
          </div>
          <div className='flex flex-col'>
            {devJon && (
              <PageCard
                code={() => <JFlatList />}
                details={devJon[0].details}
                id={devJon[0].id}
                title={devJon[0].title}
              />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
