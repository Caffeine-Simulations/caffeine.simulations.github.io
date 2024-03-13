import "./styles/FindUsCard.css"

const FindUsCard = () => {
    return (
        <div className="FindUsCard">
            <h1>Socials:</h1>
            <div className="FindUsCard_Container">
                <div className="FindUsCard_Tray">
                    <a href="https://discord.gg/JxcShF8QYy" target="_blank">
                        <div className="FindUsLink">
                            <div className="FindUsLink_Icon">
                                <img src="src\assets\icons\discord.png" alt="Discord" />
                            </div>
                            <div className="FindUsLink_Text">Join Our Discord</div>
                        </div>
                    </a>
                    <a href="https://www.youtube.com/@CaffeineSimulations" target="_blank">
                        <div className="FindUsLink">
                            <div className="FindUsLink_Icon">
                                <img src="src\assets\icons\youtube.png" alt="YouTube" />
                            </div>
                            <div className="FindUsLink_Text">Caffeine Simulations</div>
                        </div>
                    </a>
                    <a href="https://www.twitch.tv/hayds_93" target="_blank">
                        <div className="FindUsLink">
                            <div className="FindUsLink_Icon">
                                <img src="src\assets\icons\twitch.png" alt="Twitch" />
                            </div>
                            <div className="FindUsLink_Text">twitch.tv/hayds_93</div>
                        </div>
                    </a>


                </div>
            </div>
        </div>
    );
};

export default FindUsCard;