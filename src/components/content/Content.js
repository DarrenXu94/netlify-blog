import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

import Programming from '../../pages/blogs/programming'
import About from '../../pages/about'
import Contact from '../../pages/contact'
import Blog from '../../components/blog'

const Content = () => {
    return (
        <div className="flex justifyCenter minHeight400">
            <Switch >
                <Route exact path='/About' component={About} />
                <Route exact path='/Contact' component={Contact} />
                <Route exact path='/Programming' component={Programming} />
                <Route exact path='/programming/page/:start' component={Programming} />

                <Route exact path='/Blog/:id' component={Blog} />

                <Redirect to="/Programming"/>
            </Switch>
        </div>
    );
};

export default Content;

