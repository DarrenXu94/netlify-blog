import React, { Component } from 'react';

const sampleArray = [
    {"name":"react", "src":"https://png.icons8.com/ios/192/000000/react-native-filled.png"}
]

class SkillsComponent extends Component {
    render() {
        return (
            <div>
                {sampleArray.map((item) => {
                    return(
                        <img key={item.name} src={item.src} alt=""></img>
                    )
                })}
            </div>
        );
    }
}

export default SkillsComponent;