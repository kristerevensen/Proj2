import React from 'react'
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'
import CampaignStatsHeader from './CampaignStatsHeader'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const stats = [
  { name: 'Campaigns', stat: '71,897', previousStat: '70,946', change: '0%', changeType: 'increase' },
  { name: 'URLs', stat: '58.16%', previousStat: '56.14%', change: '2.02%', changeType: 'increase' },
  { name: 'Clicks', stat: '24.57%', previousStat: '28.62%', change: '4.05%', changeType: 'decrease' },
]
export default function CampaignStats() {
  return (
    <>
            <CampaignStatsHeader />
                {/* Campaign Stats */}
                <dl className="pl-2 pr-2 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden bg-white shadow md:grid-cols-3 md:divide-y-0 md:divide-x">
              {stats.map((item) => (
                <div key={item.name} className="px-4 py-5 sm:p-6">
                  <dt className="text-base font-normal text-gray-900">{item.name}</dt>
                  <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                    <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                      {item.stat}
                      <span className="ml-2 text-sm font-medium text-gray-500">from {item.previousStat}</span>
                    </div>

                    <div
                      className={classNames(
                        item.changeType === 'increase' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800',
                        'inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0'
                      )}
                    >
                      {item.changeType === 'increase' ? (
                        <ArrowUpIcon
                          className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500"
                          aria-hidden="true"
                        />
                      ) : (
                        <ArrowDownIcon
                          className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-red-500"
                          aria-hidden="true"
                        />
                      )}

                      <span className="sr-only"> {item.changeType === 'increase' ? 'Increased' : 'Decreased'} by </span>
                      {item.change}
                    </div>
                  </dd>
                </div>
              ))}
            </dl>
    </>
  )
}
