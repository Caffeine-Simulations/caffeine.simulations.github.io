import DiscordWidget from "../components/DiscordWidget";
import HeaderImage from "../components/HeaderImage";
import NavBar from "../components/NavBar";


function Contact() {
  return (
    <div>
      <HeaderImage imageUrl="src\assets\T-38C_Break.png" altText="T-38C Break away" />
      <NavBar />
      <h1>Contact Us</h1>
      <p>Feel free to reach out to us on Discord or by email.</p>
      <DiscordWidget />
    </div>
  );
}

export default Contact;