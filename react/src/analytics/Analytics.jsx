import { XMarkIcon } from "@heroicons/react/24/outline";
import { Outlet } from "react-router-dom";
import TopNav from "../components/TopNav";

  export default function Analytics() {
    return (
      <>
        <div className="min-h-full">
        <TopNav />

          <header className="bg-white shadow-sm">
            <div className="mx-auto max-w-7xl py-4 px-4 sm:px-6 lg:px-8">
              <h1 className="text-lg font-semibold leading-6 text-gray-900">Dashboard</h1>

            </div>
          </header>
          <main>
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
              <Outlet />
            </div>
          </main>
        </div>

      </>

    )
  }
