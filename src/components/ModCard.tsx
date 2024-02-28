import React from 'react';

import "./styles/ModCard.css"

interface Props {
    name: string;
    image: string;
    link: string;
}

const ModCard: React.FC<Props> = ({ name, image, link }) => {
    return (
        <a href={link}>
            <div className="ModCard">
                <img src={image} alt={name} />
                <h2>{name}</h2>
            </div>
        </a>
    );
};

export default ModCard;