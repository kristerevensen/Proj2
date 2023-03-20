// ExcelUploadForm.js

import React, { useRef } from 'react';
import axios from 'axios';


const ExcelUploadForm = () => {
    const fileInputRef = useRef(null);

    const handleSubmit = async (event) => {
      event.preventDefault();
      const file = fileInputRef.current.files[0];
  
      if (!file) {
        alert('Please select a file to upload.');
        return;
      }
  
      const formData = new FormData();
      formData.append('file', file);
  
      try {
        const response = await axios.post('/api/upload-excel', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log(response.data);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className=" px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="excel-file">
            Select file
          </label>
          <input
            ref={fileInputRef}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="excel-file"
            type="file"
            accept=".xls,.xlsx"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Upload
          </button>
        </div>
      </div>
    </form>
  );
};

export default ExcelUploadForm;
