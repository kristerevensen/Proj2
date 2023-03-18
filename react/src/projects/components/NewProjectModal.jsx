import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  LinkIcon,
  MapPinIcon,
  PencilIcon,
} from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'


Modal.setAppElement('#root');

const NewProjectModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    account_id: '',
    projectName: '',
    url: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);

    axios
      .post('http://127.0.0.1:8000/api/store_project', {
        account_id: formData.account_id,
        name: formData.projectName,
        url: formData.url,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log(response.data);
        closeModal();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <>
      <span className="sm:ml-3">
        <button
          type="button"
          onClick={openModal}
          className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <CheckIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
          Create New Project
        </button>
      </span>

      <div>

        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          className="m-auto mt-10 w-11/12 md:w-1/2 bg-white p-5 rounded shadow-lg outline-none"
        >
          <h2 className="text-2xl mb-4">Create New Project</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input type={'hidden'} name={'account_id'} value={1} />
              <label className="block mb-1" htmlFor="projectName">
                Project Name
              </label>
              <input
                type="text"
                name="projectName"
                id="projectName"
                className="w-full border border-gray-300 px-3 py-2 rounded"
                placeholder="Project Name"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1" htmlFor="url">
                URL
              </label>
              <input
                type="text"
                name="url"
                id="url"
                className="w-full border border-gray-300 px-3 py-2 rounded"
                placeholder="URL"
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-end">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Create
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </>
  );
};

export default NewProjectModal;
