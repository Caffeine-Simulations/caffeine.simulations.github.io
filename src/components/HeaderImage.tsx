import React from 'react';
import './HeaderImage.css';

interface HeaderProps {
    imageUrl: string;
    altText: string;
}

const HeaderImage: React.FC<HeaderProps> = ({ imageUrl, altText }) => {
    return (
        <header className="HeaderImage">
            <img src={imageUrl} alt={altText} />
        </header>
    );
};

export default HeaderImage;