import React, { Component } from 'react';
import SkillIcon from './SkillIcon'
import { withContentful } from '../../../contexts/ContentfulContext'

class SkillsComponent extends Component {
    state = {
        skills: []
    }
    componentDidMount = async () => {
        const skills = await this.props.contentful.getSkills()
        let fieldsArray = skills.map((skill)=>skill.fields)
        console.log(fieldsArray)
        this.setState({skills: fieldsArray})
    }
    
    render() {
        let {skills} = this.state
        return (
            <div>
                <h1 className="gothicFont" style={{marginBottom:"15px"}}>My Skills</h1>

                    <div style={{display:"flex"}}>
                        {skills.map((item) => {
                            return(
                                <SkillIcon key={item.name} item={item}/>
                                )
                            })}
                    </div>
                    
            </div>
        );
    }
}

export default withContentful(SkillsComponent);