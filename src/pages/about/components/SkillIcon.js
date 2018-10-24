import React from 'react';

const SkillIcon = ({item}) => {
    return (
        <div style={{textAlign:"center"}}>
            <img src={item.src} alt=""></img>
            <h3>{item.name}</h3>

        </div>
    );
};

export default SkillIcon;