import HeaderImage from "../components/HeaderImage";
import NavBar from "../components/NavBar";
import ModCard from "../components/ModCard";

function Home() {
  return (
    <div>
      <HeaderImage
        imageUrl="src\assets\T-38C_Break.png"
        altText="T-38C Break away"
      />
      <NavBar />
      <div className="ModCard_Container">
        <div className="ModCard_Heading">
          <h1>Mods</h1>
        </div>
        <div className="ModCard_Tray">
          <ModCard
            name="T-38C Talon"
            image="src\assets\sun_t-38.png"
            link="https://www.caffeinesimulations.com"
          />
          <ModCard
            name="O-1E Birddog"
            image="src\assets\o1e.png"
            link="https://www.caffeinesimulations.com"
          />
          <ModCard
            name="Caffeine Asset Pack"
            image="src\assets\sun_t-38.png"
            link="https://www.caffeinesimulations.com"
          />
        </div>
      </div>
      <div className="ModCard_Container">
        <div className="ModCard_Heading">
          <h1>Older Released Mods</h1>
        </div>
        <div className="ModCard_Tray">
          <ModCard
            name="T-38C Talon"
            image="src\assets\sun_t-38.png"
            link="https://www.caffeinesimulations.com"
          />
          <ModCard
            name="O-1E Birddog"
            image="src\assets\o1e.png"
            link="https://www.caffeinesimulations.com"
          />
          <ModCard
            name="Caffeine Asset Pack"
            image="src\assets\sun_t-38.png"
            link="https://www.caffeinesimulations.com"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
