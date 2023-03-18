// GoogleAnalyticsReport.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';

const CLIENT_ID = '999825890883-ukn0eugbddrvipgje8b85qe13d11hqoi.apps.googleusercontent.com';
const API_KEY = 'AIzaSyBjnEYv1SIhaviMu5aeYFnDHokOLdlXz6o';
const VIEW_ID = '119918656';

const GoogleAnalyticsReport = () => {
  useEffect(() => {
    fetchDataFromGoogleAnalytics();
  }, []);

  const fetchDataFromGoogleAnalytics = async () => {
    try {
      await gapi.load('client:auth2', initClient);
    } catch (error) {
      console.error('Error loading Google API client library:', error);
    }
  };

  const initClient = async () => {
    try {
      await gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        scope: 'https://www.googleapis.com/auth/analytics.readonly',
      });

      const auth2 = gapi.auth2.getAuthInstance();
      if (!auth2.isSignedIn.get()) {
        await auth2.signIn();
      }

      await gapi.client.load('analyticsreporting', 'v4');
      getWeeklyReportLastYear();
    } catch (error) {
      console.error('Error initializing Google API client:', error);
    }
  };

  const getWeeklyReportLastYear = async () => {
    const startDate = moment().subtract(1, 'years').startOf('year');
    const endDate = moment().subtract(1, 'years').endOf('year');
    const weeks = endDate.diff(startDate, 'weeks');

    for (let i = 0; i <= weeks; i++) {
      const startOfWeek = startDate.clone().add(i, 'weeks');
      const endOfWeek = startOfWeek.clone().endOf('week');

      const response = await gapi.client.analyticsreporting.reports.batchGet({
        reportRequests: [
          {
            viewId: VIEW_ID,
            dateRanges: [
              {
                startDate: startOfWeek.format('YYYY-MM-DD'),
                endDate: endOfWeek.format('YYYY-MM-DD'),
              },
            ],
            dimensions: [
              {
                name: 'ga:page',
              },
            ],
            metrics: [
              { expression: 'ga:pageviews' },
              { expression: 'ga:avgTimeOnPage' },
              { expression: 'ga:entrances' },
              { expression: 'ga:bounceRate' },
              { expression: 'ga:exitRate' },
              { expression: 'ga:pageValue' },
            ],
          },
        ],
      });

      if (response.result.reports[0].data.rows) {
        processData(response.result.reports[0].data.rows);
      }
    }
  };

  const processData = (rows) => {
    const reportData = rows.map((row) => {
      return {
        page: row.dimensions[0],
        pageviews: row.metrics[0].values[0],
        avg_time_on_page: row.metrics[0].values[1],
        entrances: row.metrics[0].values[2],
        bounce_rate: row.metrics[0].values[3],
        exit_rate: row.metrics[0].values[4],
        page_value: row.metrics[0].values[5],
      };
    });

    storeData(reportData);
  };

  const storeData = async (reportData) => {
    try {
      await axios.post('http://localhost:8000/api/page-reports', reportData);
    } catch (error) {
      console.error('Error sending data to Laravel API:', error);
    }
  };

  return (
    <div>
      <h2>Google Analytics Weekly Report</h2>
      <p>Data from last year's weekly reports will be fetched and stored in the database.</p>
    </div>
  );
};

export default GoogleAnalyticsReport;