import Image from 'next/image'

import { useId } from 'react'
import { Container } from '@/components/Container'
import bmLogo from '../images/logos/bmLogo.svg'
import ActionBtn from './ActionBtn'

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

              <div className="-mt-12 flex flex-col sm:flex-row items-center justify-start text-left sm:justify-center sm:text-left">
                <Image 
                  className="h-28 w-auto mb-6 sm:mb-0 sm:mr-8 animate-fade-down animate-delay-200 animate-ease-in"
                  src={bmLogo}
                  alt="Mobile Blood Pro logo for Central Florida phlebotomy"
                />
                <div className="flex flex-col">
                  <p className="text-sm font-semibold text-[#06b6d4] uppercase tracking-[0.2em] mb-2 animate-fade-down animate-delay-600 animate-ease-in">
                    Orlando & Central Florida
                  </p>
                  <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-[#084072] drop-shadow-sm animate-fade-down animate-delay-800 animate-ease-in leading-[1.1]">
                    At-Home <br className="hidden sm:block" /> Phlebotomy
                  </h1>
                </div>
              </div>
          
            <p className="mt-8 text-xl sm:text-2xl leading-relaxed text-slate-700 font-light text-left sm:text-center max-w-2xl mx-auto animate-fade-down animate-delay-1000 animate-ease-in">
              We provide safe and high-quality phlebotomy services in the comfort of your home while strictly adhering to safety standards.
            </p>
            
            <div className="mt-10 flex flex-col items-start sm:items-center justify-start sm:justify-center animate-fade-down animate-delay-1200 animate-ease-in">
              <a 
                href="tel:5165081898" 
                className="group relative inline-flex items-center justify-center px-8 py-3.5 text-lg font-medium text-white bg-[#084072] rounded-full overflow-hidden transition-all hover:scale-105 shadow-md hover:shadow-xl hover:bg-[#062c54] focus:outline-none focus:ring-2 focus:ring-[#084072] focus:ring-offset-2"
              >
                <span className="relative flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                  </svg>
                  (516) 508 1898
                </span>
              </a>
              <p className="mt-3 text-sm font-medium text-slate-500 text-left sm:text-center">
                Call today to schedule your mobile blood draw.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap justify-start sm:justify-center gap-x-6 gap-y-4 animate-fade-down animate-delay-1400 animate-ease-in">
              <ActionBtn />
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
