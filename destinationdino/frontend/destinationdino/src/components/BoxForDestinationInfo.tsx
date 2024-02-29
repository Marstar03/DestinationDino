import React from 'react';

export interface BoxProps {
  title: string;
  content: string;
}

const BoxForDestinationInfo: React.FC<BoxProps> = ({ title, content }) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
};

export default BoxForDestinationInfo;
