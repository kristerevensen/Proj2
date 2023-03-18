import React, { useState } from 'react';
import DateRangeSelector from '../components/DateRangeSelector';
import GoogleAnalyticsReport from './GoogleAnalyticsReport';
import Pages from './Pages';


function AnalyticsDashboard() {


  return (
    <div>
      <h1>My Component</h1>
      <Pages />
      <DateRangeSelector />
      <GoogleAnalyticsReport />
    </div>
  );
}

export default AnalyticsDashboard;
