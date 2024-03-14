import React from "react";
import "./App.scss";
import LeftSidebar from "@/components/LeftSidebar/LeftSidebar";
import TopSection from "@/components/TopSection/TopSection";
import CenterSection from "@/components/CenterSection/CenterSection";

function App() {
  return (
    <div className="container">
      <div className="sidebar">
        <LeftSidebar />
      </div>

      <div className="content">
        <TopSection className="topbar" />
        <CenterSection className="centersection" />
      </div>
    </div>
  );
}

export default App;
