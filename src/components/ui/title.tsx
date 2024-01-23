import React from 'react';

const Title: React.FC<{ texto: string, style:string }> = ({ texto, style }) => {
    return <p className={`mb-3 p-0 ${style}`}>{texto}</p>;
};


export {Title}