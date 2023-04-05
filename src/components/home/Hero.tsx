import { PrimaryButton } from '../common';

export default function Hero() {
  return (
    <section className='relative w-full h-hero px-4 bg-backgroundBlack flex'>
      <div className='hero w-full mx-auto pt-[108px] md:max-w-mainContentTablet md:pt-[128px] lg:max-w-mainContent'>
        <div className='w-100 flex flex-col mx-auto items-center lg:items-start lg:mx-0'>
          <p className='uppercase text-md text-transparentWhite tracking-md'>
            new product
          </p>
          <p className='py-6 uppercase text-h2 leading-h2 tracking-h2 text-center text-white md:text-h1 md:leading-h1 md:tracking-h1 font-bold lg:text-start'>
            XX99 Mark II HeadphoneS
          </p>
          <p className='w-[300px] pb-7 text-lg text-center text-transparentWhite leading-lg tracking-lg font-medium md:w-[350px] md:pb-10 lg:text-start'>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <PrimaryButton text='see product' />
        </div>
      </div>
    </section>
  );
}
