import { useState } from "react";

function NewCampaignSlideOver() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // handle form submission here
    setIsOpen(false);
  }

  return (
    <>
      {/* Button to open slide-over */}
      <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={handleOpen}>
        Create New Campaign
      </button>

      {/* Slide-over */}
      <div className={`fixed inset-0 overflow-hidden z-50 ${isOpen ? "block" : "hidden"}`}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={handleClose}></div>
          <section className="absolute inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16 outline-none">
            <div className="w-screen max-w-md">
              <form onSubmit={handleSubmit} className="h-full divide-y divide-gray-200 flex flex-col bg-white shadow-xl">
                <div className="flex-1 h-0 overflow-y-auto">
                  {/* Form fields go here */}
                </div>
                <div className="flex-shrink-0 px-4 py-4 flex justify-end">
                  <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                    Create Campaign
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
