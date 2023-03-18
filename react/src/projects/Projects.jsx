import React from 'react'
import { Outlet } from 'react-router-dom'
import TopNav from '../components/TopNav'
import ListProjects from './components/ListProjects'
import NewProjectModal from './components/NewProjectModal'

export default function Projects() {
  return (
    <>
      <div className="min-h-full">
        <TopNav />

        <header className="bg-white shadow-sm">
          <div className="mx-auto max-w-7xl py-4 px-4 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between">
              <h1 className="text-lg font-semibold leading-6 text-gray-900">Dashboard</h1>
            <div className="mt-5 flex lg:mt-0 lg:ml-4">
              
            <NewProjectModal />
            </div>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <ListProjects />
            
          </div>
        </main>
      </div>
    </>
  )
}
