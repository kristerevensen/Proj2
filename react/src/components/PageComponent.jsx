import React from 'react'
import TopNav from './TopNav'

export default function PageComponent({ title, buttons = '', buttonTitle= "", children }) {
    return (
        <>
            <div className="min-h-full">
                <TopNav />
                <header className="bg-white shadow-sm">
                    <div className="flex justify-between items-center mx-auto max-w-7xl py-4 px-4 sm:px-6 lg:px-8">
                        <h1 className="text-lg font-semibold leading-6 text-gray-900"> {title}</h1>
                        
                            
                       
                        {/* <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                            <a
                                href={buttons}
                                type="button"
                                className="block rounded-md bg-indigo-600 py-2 px-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                {buttonTitle}
                            </a>
                        </div> */}
                    </div>
                </header>
                <main>
                    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                        {children}
                    </div>
                </main>
            </div>
        </>
    )
}
