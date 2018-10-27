import React from 'react';

const color = '#3f464d'
const dimensions = { width: '196', height: '196' }

const SkillIcon = ({ item }) => {
    let path
    let raw_path
    let type
    try {
        path = item.raw.split(`<path style=" " d="`)[1]
        raw_path = path.substring(0, path.lastIndexOf(`"`))
        type = 'svg'
    }
    catch (e) {
        type = 'img'
        path = item.raw.split(`<img src="`)[1]
        raw_path = path.slice(0, -2)
    }

    return (
        <div style={{ textAlign: "center" }}>
            {type === 'svg' &&
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width={dimensions.width} height={dimensions.height}
                    viewBox="0 0 50 50"
                    style={{ fill: `${color}` }}><g id={item.name}><path d={`${raw_path}`}></path></g></svg>
            }
            {type === 'img' &&
                <img alt="mongo" src={raw_path}></img>
            }
            <h3 style={{ color: `${color}` }}>{item.name}</h3>

        </div>
    );
};

export default SkillIcon;