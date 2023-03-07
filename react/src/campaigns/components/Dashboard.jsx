import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Bars4Icon, ClockIcon, HomeIcon, XMarkIcon } from '@heroicons/react/24/outline'
import {
  ChevronRightIcon,
  EllipsisVerticalIcon,
} from '@heroicons/react/20/solid'
import CampaignStats from './CampaignStats'
import ProjectList from './CampaignList'
import CampaignList from './CampaignList'

const navigation = [
  { name: 'Dashboard', href: '/campaigns', icon: HomeIcon, current: true },
  { name: 'Links', href: '/campaigns/links', icon: Bars4Icon, current: false },
  { name: 'Recent', href: '#', icon: ClockIcon, current: false },
]
const teams = [
  { name: 'Engineering', href: '#', bgColorClass: 'bg-indigo-500' },
  { name: 'Human Resources', href: '#', bgColorClass: 'bg-green-500' },
  { name: 'Customer Success', href: '#', bgColorClass: 'bg-yellow-500' },
]
const campaigns = [
  {
    id: 1,
    title: 'Facebook Campaign',
    clicks: '2937',
    urls: 'Engineering',
    created: 'March 17, 2020',
    started: 'April 17, 2023',
    end: 'December 31, 2025',
    spend: '12,000',
  },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dashboard() {

  return (
    <>

      {/* Page title & actions */}
      <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="min-w-0 flex-1">
          <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">Campaigns</h1>
        </div>
        <div className="mt-4 flex sm:mt-0 sm:ml-4">
          <button
            type="button"
            className="sm:order-0 order-1 ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:ml-0"
          >
            Share
          </button>
          <button
            type="button"
            className="order-0 inline-flex items-center rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 sm:order-1 sm:ml-3"
          >
            Create
          </button>
        </div>
      </div>

      <CampaignStats />
      <CampaignList campaigns={campaigns} />

    </>
  )
}
