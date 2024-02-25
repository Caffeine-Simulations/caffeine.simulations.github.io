import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Mods from "./pages/Mods";
import Contact from "./pages/Contact";

function App() {
  return (
    <body className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<h1>About Us</h1>} />
          <Route path="mods" element={ <Mods /> } />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Router>
    </body>
  );
}

export default App;

// {/* <div className="App">
//   <div className="header">
//     <HeaderImage imageUrl="src\assets\T-38C_Break.png" altText="T-38C Break away" />
//     < NavBar brandName='Caffeine Simulations' imageSrcPath='src\assets\logo.png' navItems={["Home"]}/>
//     {/* <HeaderImage imageUrl="src\assets\3_eagles.png" altText="3 eagles" /> */}

//   </div>
//   <div className='row'>

//     <div className="ModCard_Container">
//       <div className="ModCard_Heading">
//         <h1>Mods</h1>
//       </div>
//       <div className='ModCard_Tray'>
//         < ModCard name="T-38C Talon" image="src\assets\sun_t-38.png" link="https://www.caffeinesimulations.com" />
//         < ModCard name="O-1E Birddog" image="src\assets\o1e.png" link="https://www.caffeinesimulations.com" />
//         < ModCard name="Caffeine Asset Pack" image="src\assets\sun_t-38.png" link="https://www.caffeinesimulations.com" />
//       </div>
//     </div>
//   </div>
//   <div className="row">
//     <div className="column side">Column</div>
//     <div className="column middle">Column</div>
//     <div className="column side"><DiscordWidget /></div>
//   </div>

//   <div className="footer">
//     <p>Footer</p>
//     <a href="https://www.youtube.com/@CaffeineSimulations">YouTube</a>
//   </div>
// </div> */}
