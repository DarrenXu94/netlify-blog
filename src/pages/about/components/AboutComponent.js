import React from 'react';
import * as Markdown from 'react-markdown'
import Moment from 'react-moment';

const AboutComponent = ({props, metadata}) => {
    return (
        <div>
            <h1 className="gothicFont">{props.title}</h1>
            <sup>Updated at <Moment date={new Date(metadata.updatedAt)} format="YYYY/MM/DD"/></sup>
            <Markdown className="padTop gothicFont" source={props.description} />
        </div>
    );
};

export default AboutComponent;