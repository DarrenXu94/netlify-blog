import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Programming from '../../pages/blogs/programming'
import Personal from '../../pages/blogs/personal'
import About from '../../pages/about'
import Contact from '../../pages/contact'

const Content = () => {
    return (
        <Switch>
          <Route exact path='/' component={Programming}/>
          <Route exact path='/Personal' component={Personal}/>
          <Route exact path='/About' component={About}/>
          <Route exact path='/Contact' component={Contact}/>
          <Route exact path='/Programming' component={Programming}/>

        </Switch>
    );
};

export default Content;