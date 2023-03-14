import React, { useState } from 'react';



export default function CampaignList() {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  const campaigns = [
    { id: 1, name: 'Campaign 1', startDate: '2022-01-01', endDate: '2022-02-01', status: 'active' },
    { id: 2, name: 'Campaign 2', startDate: '2022-02-01', endDate: '2022-03-01', status: 'inactive' },
    { id: 3, name: 'Campaign 3', startDate: '2022-03-01', endDate: '2022-04-01', status: 'active' },
    { id: 4, name: 'Campaign 4', startDate: '2022-04-01', endDate: '2022-05-01', status: 'inactive' },
    { id: 5, name: 'Campaign 5', startDate: '2022-05-01', endDate: '2022-06-01', status: 'active' },
    { id: 6, name: 'Campaign 6', startDate: '2022-06-01', endDate: '2022-07-01', status: 'inactive' },
    { id: 7, name: 'Campaign 7', startDate: '2022-07-01', endDate: '2022-08-01', status: 'active' },
    { id: 8, name: 'Campaign 8', startDate: '2022-08-01', endDate: '2022-09-01', status: 'inactive' },
    { id: 9, name: 'Campaign 9', startDate: '2022-09-01', endDate: '2022-10-01', status: 'active' },
    { id: 10, name: 'Campaign 10', startDate: '2022-10-01', endDate: '2022-11-01', status: 'inactive' },
  ];



  const handleSelectAll = () => {
    if (!selectAll) {
      const newSelectedRows = campaigns.map((campaign) => campaign.id);
      setSelectedRows(newSelectedRows);
      setSelectAll(true);
    } else {
      setSelectedRows([]);
      setSelectAll(false);
    }
  };

  const handleSelectRow = (id) => {
    const selectedIndex = selectedRows.indexOf(id);
    let newSelectedRows = [];

    if (selectedIndex === -1) {
      newSelectedRows = [...selectedRows, id];
    } else {
      selectedRows.splice(selectedIndex, 1);
      newSelectedRows = selectedRows;
    }

    setSelectedRows(newSelectedRows);
  };

  const handleDeselectAll = () => {
    setSelectedRows([]);
    setSelectAll(false);
  };

  const handleDeselectRow = (id) => {
    setData((prevData) => {
      const index = prevData.findIndex((item) => item.id === id);
      if (index === -1) return prevData;
      const updatedItem = { ...prevData[index], selected: !prevData[index].selected };
      const updatedData = [...prevData];
      updatedData.splice(index, 1, updatedItem);
      return updatedData;
    });
  };


  return (
    <>
    <table className="w-full whitespace-nowrap  border-t-2">
      <thead>
        <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50">
          <th className="px-4 py-3">
            <div className="flex items-center mr-5">
              <input
                type="checkbox"
                className="mr-2 form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
                checked={selectAll}
                onChange={handleSelectAll}
              />
              Name
            </div>
          </th>
          <th className="px-4 py-3">Start Date</th>
          <th className="px-4 py-3">End Date</th>
          <th className="px-4 py-3">Status</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y">
        {campaigns.map((campaign) => (
          <tr
            key={campaign.id}
            className={`text-sm text-gray-500 ${
              selectedRows.includes(campaign.id) ? 'bg-gray-100' : ''
            }`}
            onClick={() => handleSelectRow(campaign.id)}
          >
            <td className="px-4 py-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2 form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
                  checked={selectedRows.includes(campaign.id)}
                  onChange={() => handleSelectRow(campaign.id)}
                />
                {campaign.name}
              </div>
            </td>
            <td className="px-4 py-3">{campaign.startDate}</td>
            <td className="px-4 py-3">{campaign.endDate}</td>
            <td className="px-4 py-3">
              {campaign.status === 'active' ? (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Active
                </span>
              ) : (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Inactive
                </span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  )
}

