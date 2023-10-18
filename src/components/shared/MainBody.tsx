"use client";
import { store } from "@/redux/store";
import { IconListTree } from "@tabler/icons-react";
import React, { useState } from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { navbarContext } from "../../utils/reactContext";
import Footer from "./Footer";
import Navbar from "./Navbar";

const MainBody = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Provider store={store}>
      <navbarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
        <Navbar />
        <div className={`main__body ${isSidebarOpen && "body-collapse"}`}>
          {/* <!--close menu-->    */}
          <div onClick={toggleSidebar} className="closebts__two">
            <IconListTree />
          </div>
          {/* <!--close menu end-->    */}
          {children}
          <ToastContainer />
          <Footer />
        </div>
      </navbarContext.Provider>
    </Provider>
  );
};

export default MainBody;
