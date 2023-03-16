import React, { useState } from 'react';
import DateRangeSelector from '../components/DateRangeSelector';
import Pages from './Pages';


function AnalyticsDashboard() {


  return (
    <div>
      <h1>My Component</h1>
      <Pages />
      <DateRangeSelector />
    </div>
  );
}

export default AnalyticsDashboard;
