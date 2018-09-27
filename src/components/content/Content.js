import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Programming from '../../pages/blogs/programming'
import Personal from '../../pages/blogs/personal'
import About from '../../pages/about'
import Contact from '../../pages/contact'
import './content.css'

const Content = () => {
    return (
        <Route
            render={({ location }) => (
                <div className="fixed">
                    <TransitionGroup>
                        <CSSTransition key={location.key} classNames="fadeTranslate" timeout={300}>
                            <Switch location={location}>
                                <Route exact path='/Personal' component={Personal} />
                                <Route exact path='/About' component={About} />
                                <Route exact path='/Contact' component={Contact} />
                                <Route exact path='/Programming' component={Programming} />
                                <Route component={Programming} />
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                </div>
            )}
        />
    );
};

export default Content;

