import Image from 'next/image'

import { useId } from 'react'
import { Container } from '@/components/Container'
import bmLogo from '../images/logos/bmLogo.svg'

function BackgroundIllustration(props) {
  let id = useId()

  return (
    <div {...props}>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-slow"
      >
        <path
          d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke={`url(#${id}-gradient-1)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-1`}
            x1="1"
            y1="513"
            x2="1"
            y2="1025"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
      >
        <path
          d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M913 513c0 220.914-179.086 400-400 400"
          stroke={`url(#${id}-gradient-2)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-2`}
            x1="913"
            y1="513"
            x2="913"
            y2="913"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

function PlayIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="11.5" stroke="#D4D4D4" />
      <path
        d="M9.5 14.382V9.618a.5.5 0 0 1 .724-.447l4.764 2.382a.5.5 0 0 1 0 .894l-4.764 2.382a.5.5 0 0 1-.724-.447Z"
        fill="#A3A3A3"
        stroke="#A3A3A3"
      />
    </svg>
  )
}

export function Hero() {
  return (
    <div className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36 flex items-center justify-center">
      <Container>
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">

              <div className="-mt-12 flex flex-row items-center justify-start text-left sm:justify-center sm:text-left">
                <Image 
                  className="h-32 w-auto drop-shadow-xl border-s-orange-700 mb-4 sm:mb-0 sm:mr-4 animate-fade-down animate-delay-200 animate-ease-in"
                  src={bmLogo}
                  alt="BMF logo"
                />
                <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-[#084072] font-serif drop-shadow-xl animate-fade-down animate-delay-500 animate-ease-in">
                  Mobole Blood Pro
                </h1>
              </div>
          
            <h2 className="text-xl font-medium tracking-tight text-slate-900 mt-4 text-left sm:text-center animate-fade-down animate-delay-1000 animate-ease-in">
            Gentle hands Expert care.
            </h2>
            <p className="mt-6 text-lg text-slate-600 text-left sm:text-center max-w-xl mx-auto animate-fade-down animate-delay-2000 animate-ease-in">
              We provide safe and high-quality phlebotomy services in the comfort of your home while strictly adhering to safety standards.
              <br />
             <a href="tel:5165081898" className="-mt-20 text-[#084072] text-sm font-semibold hover:underline ">
               ☎ (516) 508 1898
             </a>
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">

              {/* {Here is were the btn does to schedule it.} */}
            
            </div>
          </div>
          <div className="relative -mt-12 sm:mt-4 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6 max-w-xs mx-auto">
            <BackgroundIllustration className="absolute top-4 left-1/2 h-[1026px] w-[1026px] -translate-x-1/3 mask-[linear-gradient(to_bottom,white_20%,transparent_75%)] stroke-gray-300/70 sm:top-10 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
            <div className="-mx-2 h-[300px] mask-[linear-gradient(to_bottom,white_60%,transparent)] px-4 sm:mx-0 lg:absolute lg:-inset-x-10 lg:-top-10 lg:-bottom-20 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
