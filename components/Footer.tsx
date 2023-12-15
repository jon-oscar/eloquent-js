import footerLinks from '@/constants/footer.json';
import Image from 'next/image';
import Link from 'next/link';

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

        <div className='footer__links'>
          {footerLinks.map((item) => (
            <div className='footer__link' key={item.title}>
              <h3 className='font-bold'>{item.title}</h3>
              <div className='flex flex-col gap-5'>
                {item.links.map((link) => (
                  <Link
                    className='text-gray-500'
                    href={link.url}
                    key={link.title}
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
          <Link className='text-gray-500' href='/'>
            Privacy & Policy
          </Link>
          <Link className='text-gray-500' href='/'>
            Terms & Condition
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
