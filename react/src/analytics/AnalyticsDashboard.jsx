import React, { useState } from 'react';
import DateRangeSelector from '../components/DateRangeSelector';
import ExcelUploadForm from './ExcelUploadForm';
import Pages from './Pages';


function AnalyticsDashboard() {


  return (
    <div>
      
      {/* <DateRangeSelector /> */}
      <ExcelUploadForm />
      <Pages />
    </div>
  );
}

export default AnalyticsDashboard;
