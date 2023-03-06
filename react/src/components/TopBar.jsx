import NavigationMenu from "./NavigationMenu";
import { Disclosure, Menu, Transition } from '@headlessui/react'
import RightSideNav from "./RightSideNav";
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

export default function TopBar() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 justify-between">
      <div className="flex">
        <div className="flex flex-shrink-0 items-center">
          <img
            className="block h-8 w-auto lg:hidden"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <img
            className="hidden h-8 w-auto lg:block"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
        </div>
        <NavigationMenu />
      </div>
        <RightSideNav />

    </div>
  </div>
  )
}
