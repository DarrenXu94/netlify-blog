import React, { Component } from 'react';
import SkillIcon from './SkillIcon'

const sampleArray = [
    {"name":"React", "src":"https://png.icons8.com/ios/192/000000/react-native-filled.png"},
    {"name":"Javascript", "src":"https://png.icons8.com/ios/192/000000/javascript-filled.png"}
]

class SkillsComponent extends Component {
    render() {
        return (
            <div>
                <h1 className="gothicFont" style={{marginBottom:"15px"}}>My Skills</h1>

                    <div style={{display:"flex"}}>
                        {sampleArray.map((item) => {
                            return(
                                <SkillIcon key={item.name} item={item}/>
                                )
                            })}
                    </div>
            </div>
        );
    }
}

export default SkillsComponent;