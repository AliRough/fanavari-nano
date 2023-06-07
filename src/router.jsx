import React from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Requests from "./pages/Requests/Requests";
import ExpertViewRequest from "./pages/Requests/ExpertViewRequest";
import ExpertviewAllRequest from "./pages/Requests/ExpertviewAllRequest";
import ExpertCheckRequest from "./pages/Requests/ExpertCheckRequest";
import Forgotpassword from "./pages/Login/Forgotpassword";
import Verification from "./pages/Register/Verification";
import Addexpert from "./pages/Expert/Addexpert";
import Panel from "./pages/Panel";
import ViewUsers from "./pages/User/ViewUsers";
import ViewExpert from "./pages/Expert/ViewExpert";
import ViewTickets from "./pages/Ticket/ViewTickets";
import AddTicket from "./pages/Ticket/AddTicket";
import Support from "./pages/support/Support";
import SiteGuide from "./pages/siteGuide/SiteGuide";
import Guarantee from "./pages/siteGuide/Guarantee";
import AddFacilities from "./pages/Facilities/AddFacilities";
import AllNotifs from "./pages/notif/AllNotifs";
import ViewRequest from "./pages/Requests/ViewRequest";
import OpenedRequests from "./pages/Requests/OpenedRequests";
import UploadDoc from "./pages/UploadDoc";
import Tashilat from "./pages/Tashilat/Tashilat";
import One from "./pages/tashilat/steps/One";
import Two from "./pages/tashilat/steps/Two";
import Three from "./pages/tashilat/steps/three";
import UserInfo from "./pages/User/UserInfo";
import LegalUserInfo from "./pages/User/LegalUserInfo";
import Four from "./pages/tashilat/steps/Four";
import Five from "./pages/tashilat/steps/Five";
import Confirm from "./pages/tashilat/steps/Confirm";
const routes = [
  {
    path: "/panel",
    element: <Panel />,
    children: [
      { path: "*", element: <Dashboard /> },
      { path: "", element: <Dashboard /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "requests", element: <Requests /> },
      { path: "Addexpert", element: <Addexpert /> },
      { path: "viewExpert", element: <ViewExpert /> },
      { path: "viewUsers", element: <ViewUsers /> },
      { path: "userInfo", element: <UserInfo /> },
      { path: "legaluserInfo", element: <LegalUserInfo /> },
      { path: "viewTickets", element: <ViewTickets /> },
      { path: "addTicket", element: <AddTicket /> },
      { path: "suport", element: <Support /> },
      { path: "siteGuide", element: <SiteGuide /> },
      { path: "guarantee", element: <Guarantee /> },
      { path: "addFacilities", element: <AddFacilities /> },
      {
        path: "tashilat",
        element: <Tashilat />,
        children: [
          { path: "1", element: <One /> },
          { path: "2", element: <Two /> },
          { path: "3", element: <Three /> },
          { path: "4", element: <Four /> },
          { path: "5", element: <Five /> },
          { path: "confirm", element: <Confirm /> },
        ],
      },
      { path: "allNotifs", element: <AllNotifs /> },
      { path: "viewRequest", element: <ViewRequest /> },
      { path: "openedRequests", element: <OpenedRequests /> },
      { path: "oploadDoc", element: <UploadDoc /> },
      { path: "expertViewRequest", element: <ExpertViewRequest /> },
      { path: "expertViewAllRequest", element: <ExpertviewAllRequest /> },
      { path: "expertCheckRequest", element: <ExpertCheckRequest /> },
    ],
  },

  { path: "/auth/login", element: <Login /> },
  { path: "/auth/register", element: <Register /> },
  { path: "/auth/Verification", element: <Verification /> },
  { path: "/auth/forgotpassword", element: <Forgotpassword /> },
];

export default routes;
