import { SecondaryButton } from '../common';

export default function ZX7Speaker() {
  return (
    <article className='home-zx7-speaker-bg w-full h-[320px] px-6 rounded-lg flex items-center md:px-[62px] lg:px-[95px]'>
      <div className='flex flex-col'>
        <p className='mb-8 uppercase text-h4 text-black font-bold tracking-h4'>
          zx7 speaker
        </p>
        <SecondaryButton text='see product' darkMode={false} />
      </div>
    </article>
  );
}
