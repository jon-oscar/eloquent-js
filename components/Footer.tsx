import footerLinks from '@/constants/footer.json';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='mt-5 flex flex-col border-t border-gray-100 text-black-100'>
      <div className='max-md: flex flex-col flex-wrap justify-between gap-5 px-6 py-10 sm:px-16'>
        <div className='flex flex-col items-start justify-start gap-6'>
          <Image
            src='/logo.png'
            alt='oreyesdev logo'
            width={300}
            height={45}
            className='object-contain'
          ></Image>
          <p className='text-base text-gray-700'>
            Project by Oscar Reyes <br />
            All rights reserved
          </p>
        </div>

        <div className='footer__links'>
          {footerLinks.map((item) => (
            <div key={item.title} className='footer__link'>
              <h3 className='font-bold'>{item.title}</h3>
              <div className='flex flex-col gap-5'>
                {item.links.map((link) => (
                  <Link
                    key={link.title}
                    href={link.url}
                    className='text-gray-500'
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='mt-10 flex flex-wrap items-center justify-between border-t border-gray-100 px-6 py-10 sm:px-16'>
        <p>oreyesdev. All rights reserved</p>

        <div className='footer__copyrights-link'>
          <Link href='/' className='text-gray-500'>
            Privacy & Policy
          </Link>
          <Link href='/' className='text-gray-500'>
            Terms & Condition
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
