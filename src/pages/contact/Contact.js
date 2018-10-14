import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faMailchimp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


const Contact = () => {
    return (
        <div>
            <h3>Catch me on the following platforms</h3>
            <div className="flex" style={{justifyContent: 'space-evenly'}}>
            <Button className="margin5" bsStyle="primary" bsSize="large">
            <FontAwesomeIcon icon={faGithub} />
            <b className="margin10">Github</b>
            </Button>
            <Button className="margin5" bsStyle="primary" bsSize="large">
            <FontAwesomeIcon icon={faLinkedin} />
            <b className="margin10">LinkedIn</b>

            </Button>
            <Button className="margin5" bsStyle="primary" bsSize="large">
            <FontAwesomeIcon icon={faEnvelope} />
            <b className="margin10">Email</b>
            </Button>
            
            </div>

        </div>
    );
};

export default Contact;