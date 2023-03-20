import { createBrowserRouter } from "react-router-dom";
import Analytics from "./analytics/Analytics";
import AnalyticsDashboard from "./analytics/AnalyticsDashboard";
import Pages from "./analytics/Pages";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import CampaignsNew from "./campaigns/CampaignsNew";
import CampaignLinkClicks from "./campaigns/clicks/Index";
import Dashboard from "./campaigns/components/Dashboard";
import CampaignGroups from "./campaigns/groups/Index";
import Campaigns from "./campaigns/Campaigns";
import CampaignLinks from "./campaigns/links/Index";
import Experiments from "./experiments/Experiments";
import ExperimentsDashboard from "./experiments/ExperimentsDashboard";
import Growth from "./growth/Growth";
import GrowthDashboard from "./growth/GrowthDashboard";
import Projects from "./projects/Projects";
import ProjectsDashboard from "./projects/ProjectsDashboard";
import Audience from "./analytics/audience/Audience";
import AudienceOverview from "./analytics/audience/AudienceOverview";
import AudienceDevices from "./analytics/audience/AudienceDevices";
import GuestLayout from "./components/GuestLayout";
import DefaultLayout from "./components/DefaultLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "login",
        element: <Login />
      },
      {
        path: "signup",
        element: <Signup />
      },
    ]
  },
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/experiments",
        element: <Experiments />,
        children: [
          {
            path: "",
            element: <ExperimentsDashboard />,
          },
    
        ]
      },
      {
        path: "/analytics",
        element: <Analytics />,
        children: [
          {
            path: "",
            element: <AnalyticsDashboard />
          },
          {
            path: "pages",
            element: <Pages />
          },
          {
            path: "audience",
            element: <Audience />,
            children: [
              {
                path: "overview",
                element: <AudienceOverview />
              },
              {
                path: "devices",
                element: <AudienceDevices />
              }
            ]
          }
        ]
      },
      {
        path: "/campaigns",
        element: <Campaigns />,
        children: [
          {
            path: "",
            element: <Dashboard />
          },
          {
            path: "new",
            element: <CampaignsNew />
          },
          {
            path: "groups",
            element: <CampaignGroups />
          },
          {
            path: "links",
            element: <CampaignLinks />
          },
          {
            path: "clicks",
            element: <CampaignLinkClicks />
          }
        ]
      },
      {
        path: "/growth",
        element: <Growth />,
        children: [
          {
            path: "",
            element: <GrowthDashboard />
          }
        ]
      },
      {
        path: "/projects",
        element: <Projects />,
        children: [
          {
            path: "",
            element: <ProjectsDashboard />
          }
        ]
      },
    
    ]
  },
 
])

export default router;
