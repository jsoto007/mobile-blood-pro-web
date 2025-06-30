'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import { useInView } from 'framer-motion'

import { Container } from '@/components/Container'

const reviews = [
  {
    title: 'Super convenient and professional!',
    body: 'I scheduled a blood draw at home and the girl arrived right on time. She was friendly, professional, and made the whole process easy and painless.',
    author: 'Jessica T.',
    rating: 5,
  },
  {
    title: 'Excellent service for my elderly father',
    body: 'This service is a godsend for people with mobility issues',
    author: 'Daniel R.',
    rating: 5,
  },
  {
    title: 'Fast and reliable',
    body: 'I needed a last minute blood draw for work and was able to book an appointment within minutes. The mobile blood pro were efficient and very kind. Highly recommend!',
    author: 'Nina L.',
    rating: 5,
  },
  {
    title: 'Made me feel at ease',
    body: 'I was nervous about getting blood drawn at home, but the staff was warm and reassuring. Everything was sanitized, and they explained every step of the process.',
    author: 'Michael K.',
    rating: 5,
  },
  {
    title: 'Perfect for busy schedules',
    body: 'With a packed workday, I appreciated being able to do this from home. No waiting rooms, no hassle. Just great service and friendly faces.',
    author: 'Angela M.',
    rating: 5,
  },
  {
    title: 'Professional and caring',
    body: 'The phlebotomist was very knowledgeable and kind. She made sure I was comfortable and followed all safety protocols.',
    author: 'Luis S.',
    rating: 5,
  },
  {
    title: 'Great with kids!',
    body: 'I used this service for my daughter who’s afraid of needles. The phlebotomist was amazing with her and made the experience smooth and stress-free.',
    author: 'Tanya B.',
    rating: 5,
  },
  {
    title: 'Highly impressed',
    body: 'From booking to the visit, everything was seamless. The professionalism stood out and I felt very well cared for.',
    author: 'Raj P.',
    rating: 5,
  },
  {
    title: 'Friendly and on time',
    body: 'The team was friendly and punctual, which I really appreciated. The process took less than 20 minutes and was very convenient.',
    author: 'Brian W.',
    rating: 5,
  },
  {
    title: 'Would absolutely recommend',
    body: 'I’ve used this service twice now and both times were fantastic. The phlebotomists are polite, skilled, and efficient.',
    author: 'Maria G.',
    rating: 5,
  },
  {
    title: 'Peace of mind at home',
    body: 'As someone with anxiety about medical appointments, this was such a relief. The staff made me feel calm and well taken care of.',
    author: 'Hannah E.',
    rating: 5,
  },
  {
    title: 'Clean and safe',
    body: 'Everything was done with high hygiene standards and care. I felt very safe during the whole procedure.',
    author: 'Chris D.',
    rating: 5,
  },
  {
    title: 'Seamless and stress free',
    body: 'The whole process was smooth. I booked online, and the phlebotomist came right to my door. Very satisfied with the experience.',
    author: 'Leah N.',
    rating: 5,
  },
  {
    title: 'Saved me so much time',
    body: 'Instead of driving across town and waiting forever, I got my blood work done from home during my lunch break. Game changer!',
    author: 'Oscar F.',
    rating: 5,
  },
]

function StarIcon(props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function StarRating({ rating }) {
  return (
    <div className="flex">
      {[...Array(5).keys()].map((index) => (
        <StarIcon
          key={index}
          className={clsx(
            'h-5 w-5',
            rating > index ? 'fill-blue-200' : 'fill-gray-300',
          )}
        />
      ))}
    </div>
  )
}

function Review({ title, body, author, rating, className, ...props }) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s']
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ]
  }, [])

  return (
    <figure
      className={clsx(
        'animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-gray-900/5',
        className,
      )}
      style={{ animationDelay }}
      {...props}
    >
      <blockquote className="text-gray-900">
        <StarRating rating={rating} />
        <p className="mt-4 text-lg/6 font-semibold before:content-['“'] after:content-['”']">
          {title}
        </p>
        <p className="mt-3 text-base/7">{body}</p>
      </blockquote>
      <figcaption className="mt-3 text-sm text-gray-600 before:content-['–_']">
        {author}
      </figcaption>
    </figure>
  )
}

function splitArray(array, numParts) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts
    if (!result[index]) {
      result[index] = []
    }
    result[index].push(array[i])
  }
  return result
}

function ReviewColumn({ reviews, className, reviewClassName, msPerPixel = 0 }) {
  let columnRef = useRef(null)
  let [columnHeight, setColumnHeight] = useState(0)
  let duration = `${columnHeight * msPerPixel}ms`

  useEffect(() => {
    if (!columnRef.current) {
      return
    }

    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0)
    })

    resizeObserver.observe(columnRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={columnRef}
      className={clsx('animate-marquee space-y-8 py-4', className)}
      style={{ '--marquee-duration': duration }}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName?.(reviewIndex % reviews.length)}
          {...review}
        />
      ))}
    </div>
  )
}

function ReviewGrid() {
  let containerRef = useRef(null)
  let isInView = useInView(containerRef, { once: true, amount: 0.4 })
  let columns = splitArray(reviews, 3)
  let column1 = columns[0]
  let column2 = columns[1]
  let column3 = splitArray(columns[2], 2)

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-196 max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ReviewColumn
            reviews={[...column1, ...column3.flat(), ...column2]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= column1.length + column3[0].length &&
                  'md:hidden',
                reviewIndex >= column1.length && 'lg:hidden',
              )
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...column2, ...column3[1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= column2.length ? 'lg:hidden' : ''
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={column3.flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-gray-50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-gray-50" />
    </div>
  )
}

export function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="pt-20 pb-16 sm:pt-32 sm:pb-24"
    >
      <hr className='border-8 border-[#8EAFC3]/20' />
      <Container>
        <h2
          id="reviews-title"
          className="text-3xl font-medium tracking-tight text-gray-900 sm:text-center"
        >
          Everyone is choosing Mobile Blood Pro for their Phlebotomy
        </h2>
        <p className="mt-2 text-lg text-gray-600 sm:text-center">
        Thousands have experienced safer, faster, and more convenient blood draws at home.
        </p>
        <ReviewGrid />
      </Container>
    </section>
  )
}
