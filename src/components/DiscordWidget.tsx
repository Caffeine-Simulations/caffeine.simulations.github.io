
import React from 'react';

const DiscordWidget: React.FC = () => {
    return (
        <iframe
            src="https://discordapp.com/widget?id=1154491411425657016&theme=dark"
            width="350"
            height="500"
            // allowtransparency="true"
            // frameBorder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        ></iframe>
    );
};

export default DiscordWidget;


{/* <iframe src="https://discordapp.com/widget?id=1154491411425657016&theme=dark"
 width="350" 
 height="500" 
 allowtransparency="true" 
 frameborder="0" 
 sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts">

</iframe> */}