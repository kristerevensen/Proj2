
const navigation = [
  { name: 'Projects', to: '/projects', current: true },
  { name: 'Analytics', to: '/analytics', current: true },
  { name: 'Campaigns', to: '/campaigns', current: false },
  { name: 'Experiments', to: '/experiments', current: true },
  { name: 'Growth', to: '/growth', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function NavigationMenu() {
  return (
    <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
    {navigation.map((item) => (
      <a
        key={item.name}
        href={item.href}
        className={classNames(
          item.current
            ? 'border-indigo-500 text-gray-900'
            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
          'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium'
        )}
        aria-current={item.current ? 'page' : undefined}
      >
        {item.name}
      </a>
    ))}
  </div>
  )
}
