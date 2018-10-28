import React, { Component } from 'react';
import AboutComponent from './components/AboutComponent'
import SkillsComponent from './components/SkillsComponent'

import { withContentful } from '../../contexts/ContentfulContext'
import Contact from '../contact/Contact'

class About extends Component {
    state = {
        about: {},
        metadata: {}
    }

    async componentDidMount(){
        const entry = (await this.props.contentful.getEntriesByType("about"))[0]
        this.setState({about: entry, metadata: entry.sys})

    }

    render() {
        const {about, metadata} = this.state
        return (
            <div className="container" >
                {about && <AboutComponent props={about} metadata={metadata}/>}
                <SkillsComponent />
                <Contact spacing={`start`}/>
            </div>
        );
    }
}

export default withContentful(About);