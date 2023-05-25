import { Disclosure } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import IconHome from './IconHome'
import IconGroup from './IconGroup'
import IconMessage from './IconMessage'
import IconUser from './IconUser'
import SearchInput from './SearchInput'

//variabile di stato per tenere traccia di elementi cliccati
//funzione che restituisce l'icona in base all'indice del map e fornisce il fill se l'indice esaminato è quello cliccato

const navigation = [
  { name: <IconHome className="h-6 w-6"  aria-hidden="true"/>, href: '#', current: true },
  { name: <IconGroup className="h-6 w-6" aria-hidden="true"/>, href: '#', current: false },
  { name: <IconMessage className="h-6 w-6" aria-hidden="true"/>, href: '#', current: false },
  { name: <BellIcon className="h-6 w-6" aria-hidden="true" />, href: '#', current: false },
  { name: <IconUser className="h-6 w-6" aria-hidden="true"/>, href: '#', current: false }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {

  const [selectedMenu, setSelectedMenu] = useState(navigation);

  function handleClickNav(id) {
    const newSelectedMenu = [...selectedMenu];
    console.log(newSelectedMenu[id], id)
    if(newSelectedMenu[id]) { 
      newSelectedMenu[id].current = true
    }
    setSelectedMenu(newSelectedMenu)
  }


  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-between w-auto">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item, id) => (
                      <a
                        key={id}
                        href={item.href}
                        onClick={() => handleClickNav(id)}
                        className={classNames(
                          selectedMenu[id].current ? 'text-red-500' : 'text-gray-300 hover:bg-slate-800 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <SearchInput/>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}
