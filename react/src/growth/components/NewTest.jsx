import React, { useState } from 'react';

export default function ABTestingForm() {
    const [customPageType, setCustomPageType] = useState('');
    const [customCategory, setCustomCategory] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className="container mx-auto mt-10">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2">
              <label htmlFor="jiraId" className="block mb-1">
                Jira ID
              </label>
              <input
                type="text"
                name="jiraId"
                id="jiraId"
                className="w-full border border-gray-300 px-3 py-2 rounded"
                placeholder="Jira task ID"
              />
            </div>
            <div className="w-full md:w-1/2">
              <label htmlFor="testName" className="block mb-1">
                Test name
              </label>
              <input
                type="text"
                name="testName"
                id="testName"
                className="w-full border border-gray-300 px-3 py-2 rounded"
                placeholder="Test name"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
  <label htmlFor="type" className="block mb-1">
    Type
  </label>
  <select
    name="type"
    id="type"
    className="w-full border border-gray-300 px-3 py-2 rounded"
  >
    <option disabled>choose</option>
    <option>AB</option>
    <option>ABC</option>
    <option>MV</option>
  </select>
</div>
<div className="w-full md:w-1/2">
  <label htmlFor="pageType" className="block mb-1">
    Page type
  </label>
  <select
    name="pageType"
    id="pageType"
    className="w-full border border-gray-300 px-3 py-2 rounded"
    onChange={(e) => {
      if (e.target.value === 'Custom') {
        setCustomPageType('');
      }
    }}
  >
    <option disabled>choose</option>
    <option>PDP</option>
    <option>PLP</option>
    <option>Front</option>
    <option>Content</option>
    <option>Navigation</option>
    <option>Custom</option>
  </select>
  {customPageType !== '' && (
    <input
      type="text"
      name="customPageType"
      id="customPageType"
      className="w-full border border-gray-300 px-3 py-2 rounded mt-2"
      placeholder="Custom page type"
      value={customPageType}
      onChange={(e) => setCustomPageType(e.target.value)}
    />
  )}
</div>
<div className="w-full md:w-1/2">
  <label htmlFor="category" className="block mb-1">
    Category
  </label>
  <select
    name="category"
    id="category"
    className="w-full border border-gray-300 px-3 py-2 rounded"
    onChange={(e) => {
      if (e.target.value === 'Custom') {
        setCustomCategory('');
      }
    }}
  >
    <option disabled>choose</option>
    <option>Revenue</option>
    <option>Volume</option>
    <option>UX</option>
    <option>Custom</option>
  </select>
  {customCategory !== '' && (
    <input
      type="text"
      name="customCategory"
      id="customCategory"
      className="w-full border border-gray-300 px-3 py-2 rounded mt-2"
      placeholder="Custom category"
      value={customCategory}
      onChange={(e) => setCustomCategory(e.target.value)}
    />
  )}
</div>
<div className="w-full md:w-1/2">
  <label htmlFor="start" className="block mb-1">
    Start
  </label>
  <input
    type="date"
    name="start"
    id="start"
    className="w-full border border-gray-300 px-3 py-2 rounded"
  />
</div>
<div className="w-full md:w-1/2">
  <label htmlFor="end" className="block mb-1">
    End
  </label>
  <input
    type="date"
    name="end"
    id="end"
    className="w-full border border-gray-300 px-3 py-2 rounded"
  />
</div>
<div className="w-full">
  <label htmlFor="hypothesis" className="block mb-1">
    Hypothesis
  </label>
  <textarea
    name="hypothesis"
    id="hypothesis"
    className="w-full border border-gray-300 px-3 py-2 rounded"
  ></textarea>
</div>
<div className="w-full md:w-1/3">
  <label htmlFor="impact" className="block mb-1">
    Impact
  </label>
  <select
    name="impact"
    id="impact"
    className="w-full border border-gray-300 px-3 py-2 rounded"
  >
    {Array.from({ length: 10 }, (_, i) => (
      <option key={i + 1}>{i + 1}</option>
    ))}
  </select>
</div>
<div className="w-full md:w-1/3">
  <label htmlFor="confidence" className="block mb-1">
    Confidence
  </label>
  <select
    name="confidence"
    id="confidence"
    className="w-full border border-gray-300 px-3 py-2 rounded"
  >
    {Array.from({ length: 10 }, (_, i) => (
      <option key={i + 1}>{i + 1}</option>
    ))}
  </select>
</div>
<div className="w-full md:w-1/3">
  <label htmlFor="ease" className="block mb-1">
    Ease
  </label>
  <select
    name="ease"
    id="ease"
    className="w-full border border-gray-300 px-3 py-2 rounded"
  >
    {Array.from({ length: 10 }, (_, i) => (
      <option key={i + 1}>{i + 1}</option>
    ))}
  </select>
</div>
<div className="w-full md:w-1/2">
  <label htmlFor="primaryMetric" className="block mb-1">
    Primary Metric
  </label>
  <select
    name="primaryMetric"
    id="primaryMetric"
    className="w-full border border-gray-300 px-3 py-2 rounded"
  >
    {/* Add primary metric options here */}
    <option disabled>Select</option>
    <option>Example Metric 1</option>
    <option>Example Metric 2</option>
  </select>
</div>
<div className="w-full md:w-1/2">
  <label htmlFor="secondaryMetric" className="block mb-1">
    Secondary Metric
  </label>
  <select
    name="secondaryMetric"
    id="secondaryMetric"
    className="w-full border border-gray-300 px-3 py-2 rounded"
  >
    {/* Add secondary metric options here */}
    <option disabled>Select</option>
    <option>Example Metric 1</option>
    <option>Example Metric 2</option>
  </select>
</div>
<div className="w-full md:w-1/2">
  <label htmlFor="variation" className="block mb-1">
    Variation
  </label>
  <select
    name="variation"
    id="variation"
    className="w-full border border-gray-300 px-3 py-2 rounded"
  >
    <option>Original</option>
    <option>Variation A</option>
    <option>Variation B</option>
    <option>Variation C</option>
    <option>Variation D</option>
    <option>Variation E</option>
    <option>Variation F</option>
    <option>Variation G</option>
    <option>Variation H</option>
    <option>Variation I</option>
  </select>
</div>
<div className="w-full md:w-1/2">
  <label htmlFor="url" className="block mb-1">
    URL
  </label>
  <input
    type="text"
    name="url"
    id="url"
    className="w-full border border-gray-300 px-3 py-2 rounded"
    placeholder="URL"
  />
</div>
<div className="w-full">
  <label htmlFor="notes" className="block mb-1">
    Notes
  </label>
  <textarea
    name="notes"
    id="notes"
    className="w-full border border-gray-300 px-3 py-2 rounded"
  ></textarea>
</div>


          <div className="mt-6">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      
    );
}
