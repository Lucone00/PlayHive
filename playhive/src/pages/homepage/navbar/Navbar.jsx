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
  { name: <IconHome className="h-6 w-6"  aria-hidden="true"/>, href: '#', current: false, description: "Home"},
  { name: <IconGroup className="h-6 w-6" aria-hidden="true"/>, href: '#', current: false, description: "Groups" },
  { name: <IconMessage className="h-6 w-6" aria-hidden="true"/>, href: '#', current: false, description: "Messages" },
  { name: <BellIcon className="h-6 w-6" aria-hidden="true" />, href: '#', current: false, description: "Notifiche" },
  { name: <IconUser className="h-6 w-6" aria-hidden="true"/>, href: '#', current: false, description: "Profile" }
]

const elements =[
  {name: "News"},
  {name: "You May Known"}
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
            <div className="relative flex h-16 items-center">
            <div className="flex items-center mx-3 sm:hidden">
                 {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-between w-auto">
                <h1 className="sm:flex items-center text-red-500 text-2xl hidden">PlayHive</h1>
                <div className="sm:ml-6 ">
                  <div className="flex space-x-1 sm:space-x-8">
                    {navigation.map((item, id) => (
                      <a
                        key={id}
                        href={item.href}
                        onClick={() => handleClickNav(id)}
                        className={classNames(
                          selectedMenu[id].current ? 'text-red-500 border border-gray-800 border-b-red-500' : 'text-gray-300 hover:bg-slate-800 hover:text-white border-none',
                          'px-3 py-2 text-sm font-medium'
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
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {elements.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
       )}
    </Disclosure>
  )
}
