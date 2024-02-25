import "./styles/Home.css";

import HeaderImage from "../components/HeaderImage";
import Logo from "../components/Logo";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <div>
      <HeaderImage
        imageUrl="src\assets\T-38C_Break.png"
        altText="T-38C Break away"
      />
      <NavBar />
      <h1>Welcome to Caffeine Simulations</h1>
      <div className="Welcome_Banner">
        <HeaderImage
          imageUrl="src\assets\3_eagles.png"
          altText="T-38C Break away"
        />
        <Logo />
      </div>
    </div>
  );
}

export default Home;
