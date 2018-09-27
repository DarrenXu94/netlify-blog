import React, { Component } from 'react';
import './heading.css'
import pages from '../../pages'
import { withRouter } from 'react-router-dom'

class Heading extends Component {
    render() {
        return (
        <div className="headerStyle padTop" >
            <div className="marginAuto">
                <div id="heading" className="cropcircle"></div>
            </div>
            <div className="marginAuto padTop oleoFont"><h1>A blog by Darren</h1></div>
            <div className="marginAuto iconRowContainer" >
                <div className="iconRow gothicFont">
                    {pages.map(page=><div key={page}><a onClick={()=>this.props.history.push(`/${page}`)}>{page}</a></div>)}
                </div>
            </div>

        </div>
        );
    }
}

export default withRouter(Heading);