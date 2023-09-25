"use client";
import { useState } from "react";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log("click to toggle sidebar");
    console.log(isSidebarOpen);
  };

  return (
    <div className={`main__body ${isSidebarOpen && "body-collapse"}`}>
      {/* <!--close menu-->    */}
      <div onClick={toggleSidebar} className="closebts__two">
        <i className={`ti ti-list-tree`}></i>
      </div>
    </div>
  );
};

export default Home;
