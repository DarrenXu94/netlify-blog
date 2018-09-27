import React from 'react';
import './heading.css'
import pages from '../../pages'
import { Button } from 'react-bootstrap';

const Heading = () => {
    return (
        <div className="headerStyle" >
            <div className="marginAuto">
                <div id="heading" className="cropcircle"></div>
            </div>
            <div className="marginAuto padTop oleoFont"><h1>A blog by Darren</h1></div>
            <div className="marginAuto iconRowContainer" >
                <div className="iconRow gothicFont">
                    {pages.map(page=><div key={page}><a href=''>{page}</a></div>)}
                </div>
            </div>
        </div>
    );
};

export default Heading;