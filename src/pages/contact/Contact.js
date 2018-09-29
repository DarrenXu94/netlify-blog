import React from 'react';
import { Button } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
            <h3>Catch me on the following platforms</h3>

            <Button className="margin5" bsStyle="primary" bsSize="large">Github</Button>
            <Button className="margin5" bsStyle="primary" bsSize="large">LinkedIn</Button>
            <Button className="margin5" bsStyle="primary" bsSize="large">Email</Button>

        </div>
    );
};

export default Contact;