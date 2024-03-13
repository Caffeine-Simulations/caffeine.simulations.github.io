import HeaderImage from "../components/HeaderImage";
import NavBar from "../components/NavBar";
import ProgressCard from "../components/ProgressCard";

import "./styles/T38C.css";

function T38C() {
  return (
    <div>
      <HeaderImage imageUrl="src\assets\T-38C_Break.png" altText="T-38C Break away" />
      <NavBar />
      <div className="mod-overview">
        <h1>T-38C Talon for DCS</h1>
        <h2>Overview</h2>
        <div className="slideshow-container">
          <p>slideshow goes here</p>
        </div>

      </div>
      <div className="mod-progress">
        <h2>Progress</h2>
        <div className="progress-container">
          <ProgressCard title="3D Model" percentage={100} color="red" />
          <ProgressCard title="Texturing" percentage={100} color="red" />
          <ProgressCard title="Systems" percentage={100} color="red" />
          <ProgressCard title="Flight Model" percentage={100} color="red" />
        </div>
      </div>

    </div>
  );
}

export default T38C;
