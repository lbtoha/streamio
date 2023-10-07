"use client";
import React, { useState } from "react";
import { navbarContext } from "../../utils/reactContext";
import Footer from "./Footer";
import Navbar from "./Navbar";

const MainBody = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <navbarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      <Navbar />
      <div className={`main__body ${isSidebarOpen && "body-collapse"}`}>
        {/* <!--close menu-->    */}
        <div onClick={toggleSidebar} className="closebts__two">
          <i className={`ti ti-list-tree`}></i>
        </div>
        {/* <!--close menu end-->    */}
        {children}
        <Footer />
      </div>
    </navbarContext.Provider>
  );
};

export default MainBody;
