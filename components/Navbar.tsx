import Image from 'next/image';
import Link from 'next/link';
import CustomButton from './CustomButton';

const Navbar = () => {
  return (
    <header className='absolute z-10 w-full'>
      <nav className='mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 sm:px-16'>
        <Link href='/' className='flex items-center justify-center'>
          <Image
            src='/logo.png'
            alt='oreyesdev Logo'
            width={300}
            height={45}
            className='object-contain'
          />
        </Link>

        <CustomButton
          title='Contact me'
          btnType='button'
          containerStyles='text-white rounded-full bg-[#B2980B] min-w-[130px]'
        />
      </nav>
    </header>
  );
};

export default Navbar;
