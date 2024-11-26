import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/app-layout";
import LandingPage from "./pages/landing";
import { Sports } from "./pages/Sports";
import Tickets from "./pages/Tickets";
import AthleteList from "./pages/AllAthletes";
import Events from "./pages/Events";
import Recruitment from "./pages/Recruitment";
import RecruitmentForm from "./pages/RecruitmentForm";
import Shop from "./pages/Shop";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Teams from "./pages/Team";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/athletics-frontend",
        element: <LandingPage />,
      },
      {
        path: "/athletics-frontend/all-sports",
        element: <Sports />,
      },
      {
        path: "/athletics-frontend/tickets",
        element: <Tickets />,
      },
      {
        path: "/athletics-frontend/athlete-list",
        element: <AthleteList />,
      },
      {
        path: "/athletics-frontend/events",
        element: <Events />,
      },
      {
        path: "/athletics-frontend/recruit",
        element: <Recruitment />,
      },
      {
        path: "/athletics-frontend/recruit-form",
        element: <RecruitmentForm />,
      },
      {
        path: "/athletics-frontend/shop",
        element: <Shop />,
      },
      {
        path: "/athletics-frontend/dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "/athletics-frontend/teams",
        element: <Teams />,
      },

    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
