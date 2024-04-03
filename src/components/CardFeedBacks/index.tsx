import React from 'react';
import './CardFeedBacks.style.css';
import { BsChatHeartFill } from "react-icons/bs";

interface CardFeedBacksProps {
    nomeFeedBacks: string;
    spanFeedBacks: string;
}

const CardFeedBacks: React.FC<CardFeedBacksProps> = ({ nomeFeedBacks, spanFeedBacks, }) => {
    return (
        <>
                <div id='github-card'>
                    <div id='icone-github-card'><BsChatHeartFill /></div>
                    
                    <div id='texto-github-card'>
                        <h3>{nomeFeedBacks}</h3>
                        <span>{spanFeedBacks}</span>
                    </div>
                </div>
        </>
    );
}

export default CardFeedBacks;