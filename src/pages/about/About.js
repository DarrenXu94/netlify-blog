import React, { Component } from 'react';
import AboutComponent from './components/AboutComponent'

import contentlyConfig from '../../config/contently'
import * as contentful from 'contentful'

const params = {content_type:"about"}

var client = contentful.createClient(contentlyConfig)

class About extends Component {
    state = {
        about: {}
    }
    componentWillMount(){
        client.getEntries(params).then(entries => {
            entries.items.forEach(entry => {
              if (entry.fields) {
                this.setState({about: entry.fields})
              }
            })
          })
    }
    render() {
        const {about} = this.state
        return (
            <div className="fixed container" >
                {about && <AboutComponent props={about}/>}
            </div>
        );
    }
}

export default About;