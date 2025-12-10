'use client'

import React from 'react';
import arelisPhoto from '../images/arelisPhoto.png'
import Image from 'next/image';

import { BookmarkSquareIcon, CalendarDaysIcon} from '@heroicons/react/20/solid'
import { TruckIcon } from '@heroicons/react/24/outline';

const locationGroups = [
  {
    title: 'Orange County',
    description: 'Orlando, Winter Park, Lake Mary, Bithlo, Union Park',
    label: 'ZIP coverage: 32801–32837',
  },
  {
    title: 'Seminole & Lake County',
    description: 'Altamonte Springs, Winter Springs, Apopka, Longwood',
    label: 'ZIP coverage: 32701–32792',
  },
  {
    title: 'North Orlando & Villages Corridor',
    description: 'The Villages, Mount Dora, North Orlando suburbs',
    label: 'ZIP coverage: 32746–34789',
  },
]

export default function About() {
  return (
    <div id='about' className="relative isolate overflow-hidden bg-[F1EFEC] px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-bmpBlue">Safety & Comfortability</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Central Florida At-Home Phlebotomy & Home Lab Testing
              </h2>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                From Orlando’s neighborhoods to the Villages corridor, Mobile Blood Pro delivers certified at-home phlebotomy, mobile blood draw visits, and Florida home lab services right to you.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <div className="w-[36rem] sm:w-[42rem] max-w-none rounded-xl">
            <Image
              className="w-[36rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[42rem] opacity-70"
              src={arelisPhoto}
              alt="Certified phlebotomist delivering an at-home blood draw in Orlando, FL"
            />
          </div>
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
            <p>
              At-home phlebotomy services just got better! Experience our top-notch mobile blood draw, home lab testing coordination, and comfort-first care. Our highly trained professionals strictly adhere to safety protocols while delivering high-quality services right inside your residence.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                <CalendarDaysIcon className="mt-1 h-5 w-5 flex-none fill-bmpBlue" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Schedule an appointment.</strong> Schedule your appointment and our team representative will confirm the time that works for you.
                  </span>
                </li>
                <li className="flex gap-x-3">
                <BookmarkSquareIcon className="mt-1 h-5 w-5 flex-none fill-bmpBlue" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Blood draw.</strong> A qualified professional from our team will collect your blood sample while adhering to rigorous safety standards.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <TruckIcon className="mt-1 h-5 w-5 flex-none text-bmpBlue" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Secure delivery.</strong> The blood sample will be carefully and professionally packaged to ensure a secure delivery to the laboratory.
                  </span>
                </li>
              </ul>
              <p className="mt-8 text-base text-gray-700">
                We serve caregivers, seniors, and busy professionals looking for mobile blood draw trust across Central Florida. Our trained professionals use sanitary tools, temperature-controlled transport, and concierge ease so you can focus on what matters.
              </p>
              <section className="mt-10 space-y-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Areas We Serve
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Mobile Blood Pro is active across Orange, Seminole, Lake, Sumter, and North Orlando communities with at-home phlebotomy, “mobile blood draw near me,” and Florida home lab testing.
                  </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {locationGroups.map((group) => (
                    <article key={group.title} className="rounded-xl border border-gray-100 bg-gray-50 p-4 text-sm text-gray-600 shadow-inner">
                      <h4 className="text-sm font-semibold text-gray-900">{group.title}</h4>
                      <p className="mt-1 text-xs uppercase tracking-[0.3em] text-gray-400">
                        {group.label}
                      </p>
                      <p className="mt-2 leading-relaxed text-xs text-gray-600">{group.description}</p>
                    </article>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
