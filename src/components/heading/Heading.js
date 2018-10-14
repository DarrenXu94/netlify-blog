import React, { Component } from 'react';
import './heading.css'

import pages from '../../pages'
import { withRouter } from 'react-router-dom'

const renderLinks = history => (
    pages.map(page => 
        <div key={page} className="linkStyle" onClick={() => history.push(`/${page}`)}>
            <a>{page}</a>
        </div>
    )
);

const Heading = props => (
    <div className="headerStyle padTop" >
        <div className="marginAuto">
            <div onClick={()=>props.history.push(`/`)} id="heading" className="cropcircle"></div>
        </div>
        <div className="marginAuto padTop oleoFont"><h1>~ A blog by Darren ~</h1></div>
        <div className="marginAuto iconRowContainer" >
            <div className="iconRow gothicFont">
                {renderLinks(props.history)}
            </div>
        </div>

    </div>
)

export default withRouter(Heading);