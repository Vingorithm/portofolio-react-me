import { Outlet } from "react-router-dom";

import Header from '../components/TopNavbar';
import Footer from '../components/ButtomNavbar';

const routes = [
  {
    path: "/",
    name: "HomePage",
  },
];

const MainLayout = () => {
  return (
    <div>
      <Header routes={routes} />
        <Outlet />
      <Footer />
    </div>
  );
};


export default MainLayout;
