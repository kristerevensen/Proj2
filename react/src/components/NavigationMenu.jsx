import { NavLink } from "react-router-dom"


const navigation = [
  { name: 'Projects', to: '/projects'},
  { name: 'Analytics', to: '/analytics' },
  { name: 'Campaigns', to: '/campaigns' },
  { name: 'Experiments', to: '/experiments' },
  { name: 'Growth', to: '/growth' },
]
const isActive = navigation;

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function NavigationMenu() {
  return (
    <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
    {navigation.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className={ ({ isActive }) => classNames(
          isActive
            ? 'border-indigo-500 text-gray-900'
            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
          'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium'
        )}
        aria-current={isActive ? 'page' : undefined}
      >
        {item.name}
      </NavLink>
    ))}
  </div>
  )
}
