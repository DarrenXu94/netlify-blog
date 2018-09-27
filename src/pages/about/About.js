import React, { Component } from 'react';
import AboutComponent from './components/AboutComponent'

import contentlyConfig from '../../config/contently'
import * as contentful from 'contentful'

const params = {content_type:"about"}

var client = contentful.createClient(contentlyConfig)

class About extends Component {
    state = {
        about: {},
        metadata: {}
    }
    componentWillMount(){
        client.getEntries(params).then(entries => {
            entries.items.forEach(entry => {
              if (entry.fields) {
                this.setState({about: entry.fields, metadata: entry.sys})
              }
            })
          })
    }
    render() {
        const {about, metadata} = this.state
        return (
            <div className="fixed container" >
                {about && <AboutComponent props={about} metadata={metadata}/>}
            </div>
        );
    }
}

export default About;