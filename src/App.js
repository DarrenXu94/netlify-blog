import React, { Component } from 'react';
import * as contentful from 'contentful'
import './css/custom-css-bootstrap-magic.css'
import { Grid } from 'react-bootstrap';
import Heading from './components/heading'

import contentlyConfig from './config/contently'

var client = contentful.createClient(contentlyConfig)
client.getEntries().then(entries => {
  entries.items.forEach(entry => {
    if (entry.fields) {
      console.log(entry.fields)
    }
  })
})
class App extends Component {
  render() {
    return (
      <div >
        <div >
          <Heading />

        </div>
        <Grid>

        More stuff
        </Grid>
      </div>
    );
  }
}

export default App;
