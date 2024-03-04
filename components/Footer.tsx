import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='mt-5 flex flex-col border-t border-gray-100 text-black-100'>
      <div className='max-md: flex flex-col flex-wrap justify-between gap-5 px-6 py-10 sm:px-16'>
        <div className='flex flex-col items-start justify-start gap-6'>
          <Image
            alt='oreyesdev logo'
            className='object-contain'
            height={45}
            src='/logo.png'
            width={300}
          ></Image>
          <p className='text-base text-gray-700'>
            Project by Oscar Reyes <br />
            All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
