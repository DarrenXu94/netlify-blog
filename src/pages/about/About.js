import React, { Component } from 'react';
import AboutComponent from './components/AboutComponent'

import { withContentful } from '../../contexts/ContentfulContext'


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
            </div>
        );
    }
}

export default withContentful(About);