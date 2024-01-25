"use client"
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const navigation = [
  { name: 'Survey', href: '/survey' },
  { name: 'Results', href: '/results' },
  { name: 'Resources', href: '/resources' },
]
const faqs = [
  {
    id: 1,
    question: "What are some basic tips for maintaining good physical health?",
    answer:
      "To maintain good physical health, prioritize regular exercise, consume a balanced diet rich in fruits and vegetables, stay hydrated, get adequate sleep, and avoid harmful habits such as smoking and excessive alcohol consumption.",
  },
  {
    id: 2,
    question: " What are some effective ways to improve mental well-being?",
    answer:
      "Focus on activities that bring joy and fulfillment, maintain social connections, engage in regular physical activity, get sufficient sleep, and consider mindfulness practices like meditation to enhance mental well-being.",
  },
  {
    id: 3,
    question: "How can I enhance my overall quality of life?",
    answer:
      "Improving your overall quality of life involves a holistic approach. Focus on maintaining a healthy balance between physical, mental, and social well-being. Prioritize self-care, cultivate positive relationships, and engage in activities that bring you joy and fulfillment.",
  }
]
  // More questions...
export default function Resources() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      {/*NAVBAR */}
    <header className="absolute inset-x-0 top-0 z-50">
          <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://static.vecteezy.com/system/resources/thumbnails/017/173/328/small/heart-wave-medical-flat-icons-png.png"
                  alt=""
                />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Log in <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </nav>
          <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>
        {/*FAQ */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">General Health And Resources</h2>
        <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600">
        For frequently asked questions and additional resources, please refer to our curated collection. For more extensive assistance, you can explore the {' '}
          <a href="https://www.nhs.uk/" className="font-semibold text-indigo-600 hover:text-indigo-500">
          NHS website
          </a>{' '}
          for comprehensive information and support.
        </p>
        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="text-base font-semibold leading-7 text-gray-900">{faq.question}</dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      {/* Physical Health Tab */}
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
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
              <p className="text-base font-semibold leading-7 text-indigo-600"></p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Physical Health</h1>
              <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Nutrition</h2>
              <p className="mt-6 text-xl leading-8 text-gray-700">
              The {' '} 
              <a href="https://www.nhs.uk/live-well/eat-well/food-guidelines-and-food-labels/the-eatwell-guide/" className="font-semibold text-indigo-600 hover:text-indigo-500">
             NHS Eatwell Guide
              </a>{' '}
              offers practical tips on creating a balanced diet. Learn about portion sizes, incorporating diverse fruits and vegetables, and the importance of staying hydrated for overall health.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
  <img
    style={{ maxWidth: '90%', height: 'auto' }}
    className="w-[20rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
    src="https://images.pexels.com/photos/5327864/pexels-photo-5327864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    alt=""
  />
</div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Excerise and Fitness</h2>
              <p className="mt-6 text-xl leading-8 text-gray-700">
              Explore the {' '}
              <a href="https://www.nhs.uk/conditions/nhs-fitness-studio/" className="font-semibold text-indigo-600 hover:text-indigo-500">
              NHS Fitness Studio
              </a>{' '}
              for a variety of workout routines. Get personalized tips on staying active, whether through quick home exercises or outdoor activities, making fitness an accessible part of your routine.
              </p>
              <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Hygiene and Personal Care</h2>
              <p className="mt-6 text-xl leading-8 text-gray-700">
              <a href="https://www.nhs.uk/live-well/eat-well/food-guidelines-and-food-labels/the-eatwell-guide/" className="font-semibold text-indigo-600 hover:text-indigo-500">
              NHS Live Well
              </a>{' '}
              gives practical tips for personal hygiene. Beyond basics, discover habits that prevent illnesses and contribute to an overall sense of well-being.              
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  )}