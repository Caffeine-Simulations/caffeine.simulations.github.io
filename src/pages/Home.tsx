import "./styles/Home.css";

import HeaderImage from "../components/HeaderImage";
// import Logo from "../components/Logo";
import NavBar from "../components/NavBar";
import FindUsCard from "../components/FindUsCard";
import AboutUs from "../components/AboutUs";
// import DiscordWidget from "../components/DiscordWidget";

function Home() {
  return (
    <div className="Home">
      <HeaderImage
        imageUrl="src\assets\T-38C_Break.png"
        altText="T-38C Break away"
      />
      <NavBar />
      <div className="Home_Container">
        <div className="row">
          <div className="side">
            <AboutUs />
            <FindUsCard />
            {/* <DiscordWidget /> */}
          </div>
          <div className="main">
            <h2>TITLE HEADING</h2>
            <h5>Title description, Dec 7, 2017</h5>
            <div className="fakeimg" style={{ height: "200px" }}>Image</div>
            <p>Some text..</p>
            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            <h2>TITLE HEADING</h2>
            <h5>Title description, Sep 2, 2017</h5>
            <div className="fakeimg" style={{ height: "200px" }}>Image</div>
            <p>Some text..</p>
            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>
        </div>
      </div>
      <div className="footer">
        <h2>Footer</h2>
      </div>
    </div >

  );
}

export default Home;
