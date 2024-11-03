import React from 'react';
// The only use of this component is to be able to let tailwind create those style while compiling (to force create those classes)
const RandomButtonClasses = () => {
    let classNames = 'bg-[#2563EB] bg-[#8B5CF6] bg-[#DB2777] bg-[#475569] bg-[#EA580C] text-slate-800';
    return (
        <div className={classNames}/>

    );
};

export default RandomButtonClasses;
