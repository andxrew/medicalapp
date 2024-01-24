"use client"
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {  PhotoIcon, UserCircleIcon } from '@heroicons/react/20/solid'

const navigation = [
  { name: 'Survey', href: '/survey' },
  { name: 'Results', href: '/results' },
  { name: 'Resources', href: '/resources' },
]



export default function SurveyPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">

              <span className="sr-only">Life Savers</span>
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
        </Dialog>
      </header>
      <main>
      <form>
      <div className="mt -5  px-20">
        <div className="border-b border-gray-900/10 pb-12">

        <style jsx>{`
        .container {
          margin: 500px;
        }
        p {
          color: blue;
        }
      `}</style>

          <h2 className="text-base font-semibold mt-20 text-gray-900">Survey</h2>
          <p className="mt-17 text-sm leading-6 text-gray-600">
            This section will ask you about private and confendential data, rest assured we store none of it because your privacy matters.
            (we can store your email if you like, it helps us contact you and keep you updated)
          </p>


        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent Email address where you can receive mail and important health updates if you choose.</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="Ethnicity" className="block text-sm font-medium leading-6 text-gray-900">
                Ethnicity
              </label>
              <div className="mt-2">
                <select
                  id="Ethnicity"
                  name="Ethnicity"
                  autoComplete="Ethnicity-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="" selected="selected" disabled="disabled">-- select one --</option>
                  <optgroup label="White">
                    <option value="White English">English</option>
                    <option value="White Welsh">Welsh</option>
                    <option value="White Scottish">Scottish</option>
                    <option value="White Northern Irish">Northern Irish</option>
                    <option value="White Irish">Irish</option>
                    <option value="White Gypsy or Irish Traveller">Gypsy or Irish Traveller</option>
                    <option value="White Other">Any other White background</option>
                  </optgroup>
                  <optgroup label="Mixed or Multiple ethnic groups">
                    <option value="Mixed White and Black Caribbean">White and Black Caribbean</option>
                    <option value="Mixed White and Black African">White and Black African</option>
                    <option value="Mixed White Other">Any other Mixed or Multiple background</option>
                  </optgroup>
                  <optgroup label="Asian">
                    <option value="Asian Indian">Indian</option>
                    <option value="Asian Pakistani">Pakistani</option>
                    <option value="Asian Bangladeshi">Bangladeshi</option>
                    <option value="Asian Chinese">Chinese</option>
                    <option value="Asian Other">Any other Asian background</option>
                  </optgroup>
                  <optgroup label="Black">
                    <option value="Black African">African</option>
                    <option value="Black African American">African American</option>
                    <option value="Black Caribbean">Caribbean</option>
                    <option value="Black Other">Any other Black background</option>
                  </optgroup>
                  <optgroup label="Other ethnic groups">
                    <option value="Arab">Arab</option>
                    <option value="Hispanic">Hispanic</option>
                    <option value="Latino">Latino</option>
                    <option value="Native American">Native American</option>
                    <option value="Pacific Islander">Pacific Islander</option>
                    <option value="Other">Any other ethnic group</option>
                  </optgroup>
  
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="gender" className="block text-sm font-medium leading-7 text-gray-900">
                Gender
              </label>
              <div className="mt-2">
                <select
                  id="gender"
                  name="gender"
                  autoComplete="gender-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="" selected="selected" disabled="disabled">-- select one --</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="Excercise" className="block text-sm font-medium leading-7 text-gray-900">
                How many times do you excercise in a week?
              </label>
              <div className="mt-2">
                <select
                  id="excercise"
                  name="excercise"
                  autoComplete="excercise-freq"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="" selected="selected" disabled="disabled">-- select one --</option>
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5+</option>
                </select>
              </div>
            </div>


            <div className="sm:col-span-3">
              <label htmlFor="fastFood" className="block text-sm font-medium leading-7 text-gray-900">
                How many times do you eat fast food in a week?
              </label>
              <div className="mt-2">
                <select
                  id="fastFood"
                  name="fastFood"
                  autoComplete="fastFood-freq"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="" selected="selected" disabled="disabled">-- select one --</option>
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5+</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="number" className="block text-sm font-medium leading-6 text-gray-900">How old are you?</label>
              <div className="relative mt-2 rounded-md shadow-sm">
              <label htmlFor="number-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select a number:</label>
                
              <input type="number" id="number-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  min="18" max="120" placeholder="18" required></input>
                
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
                  </svg>
                </div>
              </div>

              
              
            </div>


            

          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Notifications</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            We'll always let you know about important changes, but you pick what else you want to hear about.
          </p>

          <div className="mt-10 space-y-10">
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">By Email</legend>
              <div className="mt-6 space-y-6">
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="ScreeningReminders"
                      name="Screening Reminders"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>

                  <div className="text-sm leading-6">
                    <label htmlFor="Screenings" className="font-medium text-gray-900">
                      Screenings or check ups
                    </label>
                    <p className="text-gray-500">Get notified for screenings and check ups</p>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="NewStudies"
                      name="New Studies"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="newStudies" className="font-medium text-gray-900">
                      New Studies and resarch
                    </label>
                    <p className="text-gray-500">Get notified when cutting edge health research is released.</p>
                  </div>
                </div>

              </div>
            </fieldset>
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">Push Notifications</legend>
              <p className="mt-1 text-sm leading-6 text-gray-600">These are delivered via SMS to your mobile phone.</p>
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
                    Everything
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-email"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
                    Same as email
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-nothing"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
                    No push notifications
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>

      <div className="flex items-center justify-center bg-white p-8">
    <div className="mx-auto w-full max-w-xs">
      


    </div>
  </div>

    </form>
      </main>
    </div>

        

  )}
