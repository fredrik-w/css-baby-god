import Image from 'next/image'
import {Libre_Baskerville} from 'next/font/google'
import {SparklesIcon} from '@heroicons/react/24/outline';

import TailwindLogo from '@/tailwindcss-logotype.svg'
import clsx from 'clsx';

const googleFont = Libre_Baskerville({subsets: ['latin'], weight: '400', variable: '--font-roboto'})

export default function Home() {
  return (
    <main className='flex items-center justify-center bg-white h-full'>
      <article className="h-fit w-[500px] flex flex-col gap-4 bg-pink-50 p-8 -pl-8 rounded-3xl">
        <div className="bg-pink-500 rounded-xl p-4 flex flex-row self-end w-fit text-white gap-4">
          <SparklesIcon width={24}/> Achievement unlocked
        </div>

        <div className="flex flex-col items-end w-fit">
          <Image src={TailwindLogo} alt="Tailwind logo" height={50}/>
          <h3 className={clsx('font-bold text-xl', googleFont.className)}>Tailwind Apprentice, baby steps</h3>
        </div>
      </article>
    </main>
  )
}
