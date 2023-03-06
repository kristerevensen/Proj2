import { createBrowserRouter } from "react-router-dom";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import CampaignsNew from "./campaigns/CampaignsNew";
import CampaignLinkClicks from "./campaigns/clicks/Index";
import Dashboard from "./campaigns/components/Dashboard";
import CampaignGroups from "./campaigns/groups/Index";
import Campaigns from "./campaigns/Index";
import CampaignLinks from "./campaigns/links/Index";
import Growth from "./growth/Index";

const router = createBrowserRouter([

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
    element: <Growth />
  },
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  },
])

export default router;
