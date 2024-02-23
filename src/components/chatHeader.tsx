import React from 'react'
import "../components/common.css"

const ChatHeader = () => {
    const contactList = JSON.parse(localStorage.getItem('contacts'))

    return (
        <div className='fixed top-0 full-width'>


            <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl hidden sm:block font-semibold whitespace-nowrap dark:text-white">Henry</span>
                        <div className='mobile-hide'>
                        <select className='block w-full px-4 py-2 mt-2 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:border-blue-500"'>
                            {contactList && contactList.map((item, index) => (
                                <option key={index} value={item.Name}>{item.Name}</option>
                            ))}
                        </select>
                        </div>

                    </a>
                    <button data-collapse-toggle="navbar-hamburger" type="button" className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        Exit
                    </button>
                </div>
            </nav>

        </div>
    )
}

export default ChatHeader