import React from 'react';
import * as Markdown from 'react-markdown'

const AboutComponent = ({props}) => {
    return (
        <div>
            <h1 className="gothicFont">{props.title}</h1>
            <Markdown className="padTop gothicFont" source={props.description} />
        </div>
    );
};

export default AboutComponent;