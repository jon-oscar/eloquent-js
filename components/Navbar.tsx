import Image from 'next/image';
import Link from 'next/link';
import CustomButton from './CustomButton';

const Navbar = () => {
  return (
    <header className='absolute z-10 w-full'>
      <nav className='mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 sm:px-16'>
        <Link className='flex items-center justify-center' href='/'>
          <Image
            alt='oreyesdev Logo'
            className='object-contain'
            height={45}
            src='/logo.png'
            width={300}
          />
        </Link>

        <CustomButton
          btnType='button'
          containerStyles='text-white rounded-full bg-[#B2980B] min-w-[130px]'
          title='Contact me'
        />
      </nav>
    </header>
  );
};

export default Navbar;
