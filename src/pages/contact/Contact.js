import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import EmailButton from './EmailButton'

const GitHub = `https://github.com/DarrenXu94`
const LinkedIn = `https://www.linkedin.com/in/darren-xu-profile/`

const Contact = ({spacing = 'space-evenly'}) => {
    return (
        <div>
            <h3>Catch me on the following platforms</h3>
            <div className="flex" style={{ justifyContent: spacing }}>
                <Button href={GitHub} className="margin5" bsStyle="primary" bsSize="large">
                    <FontAwesomeIcon icon={faGithub} />
                    <b className="margin10">Github</b>
                </Button>
                <Button href={LinkedIn} className="margin5" bsStyle="primary" bsSize="large">
                    <FontAwesomeIcon icon={faLinkedin} />
                    <b className="margin10">LinkedIn</b>
                </Button>
                <EmailButton />
            </div>

        </div>
    );
};

export default Contact;