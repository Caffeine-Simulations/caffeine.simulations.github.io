import React from 'react';
import './styles/ProgressCard.css';

interface ProgressCardProps {
    title: string;
    percentage: number;
    color: string;
}

// document.documentElement.style.setProperty(`--${percentage}`, value + suffix); //suffix may be px or ''

const ProgressCard: React.FC<ProgressCardProps> = ({ title, percentage, color }) => {
    return (
        <div className="progress-card">
            {/* <div className="progress-bar">
            </div> */}
            <div style={{ backgroundColor: color }}>
                <h2>{title}</h2>
                <p>{percentage}%</p>
            </div>
        </div>
    );
};

export default ProgressCard;