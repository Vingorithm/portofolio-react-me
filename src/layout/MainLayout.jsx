import React from "react";
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
    <div className="main-layout">
      <Header routes={routes} />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
      
      <style jsx>{`
        .main-layout {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        
        .main-content {
          flex: 1;
        }
      `}</style>
    </div>
  );
};

export default MainLayout;