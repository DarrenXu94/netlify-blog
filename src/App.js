import React, { Component } from 'react';
import './css/custom-css-bootstrap-magic.css'
import { Grid } from 'react-bootstrap';
import Heading from './components/heading'
import Content from './components/content'
import Footer from './components/footer'

class App extends Component {
  render() {
    return (
      <div >
        <div >
          <Heading />
          <hr />
        </div>
        <Grid>
          <Content />
        </Grid>
        <Footer />

      </div>
    );
  }
}

export default App;
