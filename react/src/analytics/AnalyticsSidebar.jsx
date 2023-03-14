import React from 'react'
import { Disclosure } from '@headlessui/react'

import { Fragment, useState } from 'react'
import { Bars3CenterLeftIcon, Bars4Icon, ClockIcon, HomeIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  ChevronRightIcon,
  ChevronUpDownIcon,
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/20/solid'
import { NavLink } from 'react-router-dom'


const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  {
      name: 'Audience',
      current: false,
      children: [
          { name: 'Overview', to: '/audience/overview' },
          { name: 'Devices', to: '/audience/devices' },
          { name: 'Engagement', href: '#' },
          { name: 'Technology', href: '#' },
          { name: 'Custom Dimension', href: '#' },
          { name: 'Custom Variables', href: '#' },
      ],
  },
  {
      name: 'Acquisition',
      current: false,
      children: [
          { name: 'Overview', href: '#' },
          { name: 'Search Engines', href: '#' },
          { name: 'Referrals', href: '#' },
          { name: 'Campaigns', href: '#' },
          { name: 'Google Search Console', href: '#' },
      ],
  },
  {
      name: 'Behavior',
      current: false,
      children: [
          { name: 'Overview', href: '#' },
          { name: 'Pages', href: '#' },
          { name: 'Internal Search', href: '#' },
          { name: 'Outlinks', href: '#' },
          { name: 'Downloads', href: '#' },
          { name: 'Events', href: '#' },
          { name: 'Content Performance', href: '#' },
      ],
  },
  {
      name: 'Conversion',
      current: false,
      children: [
          { name: 'Overview', href: '#' },
          { name: 'Goals', href: '#' },
          { name: 'Ecommerce', href: '#' },
          { name: 'Funnels', href: '#' },
      ],
  },
  {
      name: 'Reports',
      current: false,
      children: [
          { name: 'Overview', href: '#' },
          { name: 'Custom Reports', href: '#' },

      ],
  },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function AnalyticsSidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <>

        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex flex-shrink-0 items-center px-4">
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=purple&shade=500"
                      alt="Your Company"
                    />
                  </div>
                  <div className="mt-5 h-0 flex-1 overflow-y-auto">
                    <nav className="px-2">
                      <div className="space-y-1">
                      <nav className="flex-1 space-y-1 bg-white px-2" aria-label="Sidebar">
                    {navigation.map((item) =>
                        !item.children ? (
                            <div key={item.name}>
                                <a
                                    to={item.to}
                                    className={ ({isActive}) => classNames(
                                        isActive
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                        'group flex w-full items-center rounded-md py-2 pl-7 pr-2 text-sm font-medium'
                                    )}
                                >
                                    {item.name}
                                </a>
                            </div>
                        ) : (
                            <Disclosure as="div" key={item.name} className="space-y-1">
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button
                                            className={({isActive}) => classNames(
                                                isActive
                                                    ? 'bg-gray-100 text-gray-900'
                                                    : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                                'group flex w-full items-center rounded-md py-2 pr-2 text-left text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500'
                                            )}
                                        >
                                            <svg
                                                className={({isActive}) => classNames(
                                                    open ? 'rotate-90 text-gray-400' : 'text-gray-300',
                                                    'mr-2 h-5 w-5 flex-shrink-0 transform transition-colors duration-150 ease-in-out group-hover:text-gray-400'
                                                )}
                                                viewBox="0 0 20 20"
                                                aria-hidden="true"
                                            >
                                                <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                                            </svg>
                                            {item.name}
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="space-y-1">
                                            {item.children.map((subItem) => (
                                                <Disclosure.Button
                                                    key={subItem.name}
                                                    as="a"
                                                    href={subItem.href}
                                                    className="group flex w-full items-center rounded-md py-2 pl-10 pr-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                                >
                                                    {subItem.name}
                                                </Disclosure.Button>
                                            ))}
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        )
                    )}
                </nav>
                      </div>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0" aria-hidden="true">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed h-full lg:flex lg:w-64 lg:flex-col lg:border-r lg:border-t lg:border-gray-200 lg:bg-gray-100 lg:pt-5 lg:pb-4">

          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className=" flex h-0 flex-1 flex-col overflow-y-auto pt-1">
            {/* User account dropdown */}
            <Menu as="div" className="relative inline-block px-3 text-left">
              <div>
                <Menu.Button className="group w-full rounded-md bg-gray-100 px-3.5 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                  <span className="flex w-full items-center justify-between">
                    <span className="flex min-w-0 items-center justify-between space-x-3">
                      <img
                        className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
                        src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                        alt=""
                      />
                      <span className="flex min-w-0 flex-1 flex-col">
                        <span className="truncate text-l font-medium text-gray-900">Selected Project</span>
                      </span>
                    </span>
                    <ChevronUpDownIcon
                      className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </span>
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 left-0 z-10 mx-3 mt-1 origin-top divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          View Project
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Settings
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Notifications
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Get desktop app
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Support
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Logout
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

            {/* Navigation */}
            <nav className="mt-6 px-3">
              <div className="space-y-1">
              <nav className="flex-1 space-y-1 px-2" aria-label="Sidebar">
                    {navigation.map((item) =>
                        !item.children ? (
                            <div key={item.name}>
                                <a
                                    href={item.href}
                                    className={classNames(
                                        item.current
                                            ? 'bg-gray-100 text-gray-900'
                                            : ' text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                        'group flex w-full items-center rounded-md py-2 pl-7 pr-2 text-sm font-medium'
                                    )}
                                >
                                    {item.name}
                                </a>
                            </div>
                        ) : (
                            <Disclosure as="div" key={item.name} className="space-y-1">
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button
                                            className={classNames(
                                                item.current
                                                    ? 'bg-gray-100 text-gray-900'
                                                    : ' text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                                'group flex w-full items-center rounded-md py-2 pr-2 text-left text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500'
                                            )}
                                        >
                                            <svg
                                                className={classNames(
                                                    open ? 'rotate-90 text-gray-400' : 'text-gray-300',
                                                    'mr-2 h-5 w-5 flex-shrink-0 transform transition-colors duration-150 ease-in-out group-hover:text-gray-400'
                                                )}
                                                viewBox="0 0 20 20"
                                                aria-hidden="true"
                                            >
                                                <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                                            </svg>
                                            {item.name}
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="space-y-1">
                                            {item.children.map((subItem) => (
                                                <Disclosure.Button
                                                    key={subItem.name}
                                                    as="a"
                                                    href={subItem.href}
                                                    className="group flex w-full items-center rounded-md py-2 pl-10 pr-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                                >
                                                    {subItem.name}
                                                </Disclosure.Button>
                                            ))}
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        )
                    )}
                </nav>
              </div>
            </nav>
          </div>
        </div>

    </>
  )
}
