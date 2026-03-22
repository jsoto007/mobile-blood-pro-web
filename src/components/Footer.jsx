import Image from 'next/image'
import Link from 'next/link'
import mbmFullLogo from '../images/logos/mbpFullLogo.png'

import { Container } from '@/components/Container'
import { NavLinks } from '@/components/NavLinks'

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <Container>
        <div className="grid grid-cols-1 gap-12 pt-16 pb-12 md:grid-cols-2 lg:grid-cols-4 lg:pt-24 lg:pb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center text-gray-900">
              <Image src={mbmFullLogo} alt="Mobile Blood Pro" className="h-10 w-auto" />
            </div>
            <p className="mt-6 text-sm text-gray-600 leading-relaxed font-light">
              Founded by certified phlebotomist Arelis Perez, Mobile Blood Pro delivers premium at-home phlebotomy, mobile blood draw visits, and Florida home lab services directly to you.
            </p>
          </div>
          <div className="lg:pl-8">
            <h3 className="text-sm font-semibold text-[#084072] uppercase tracking-wider">Quick Links</h3>
            <nav className="mt-6 flex flex-col gap-4 font-light">
              <NavLinks />
            </nav>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#084072] uppercase tracking-wider">Contact Us</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <a href="tel:5165081898" className="text-sm leading-6 text-gray-600 font-light hover:text-[#06b6d4] transition-colors">
                  (516) 508 1898
                </a>
              </li>
              <li>
                <p className="text-sm leading-6 text-gray-600 font-light">
                  Fax: (205) 751-9277
                </p>
              </li>
              <li>
                <p className="text-sm leading-6 text-gray-600 font-light">
                  By Appointment Only
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#084072] uppercase tracking-wider">Service Areas</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li className="text-sm leading-6 text-gray-600 font-light">Orlando & Winter Park</li>
              <li className="text-sm leading-6 text-gray-600 font-light">Lake Mary & Altamonte Springs</li>
              <li className="text-sm leading-6 text-gray-600 font-light">The Villages Corridor</li>
              <li className="text-sm leading-6 text-gray-600 font-light">Orange, Seminole, Lake & Sumter Counties</li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col items-center border-t border-gray-100 pt-8 pb-12 md:flex-row-reverse md:justify-between md:pt-6">
          <a
            href="https://sotodev.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-400 hover:text-gray-900 transition-colors"
          >
            Developed by <span className='text-sm font-semibold'>SotoDev</span>
          </a>
          <p className="mt-6 text-sm text-gray-500 font-light md:mt-0 flex items-center gap-2">
            &copy; {new Date().getFullYear()} Mobile Blood Pro. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
