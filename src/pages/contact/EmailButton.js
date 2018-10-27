import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

class EmailButton extends Component {
    state = {
        showEmail: false
    }
    render() {
        let { showEmail } = this.state;
        return (
            <Button onClick={()=>this.setState({showEmail: !showEmail})} className="margin5" bsStyle="primary" bsSize="large">
                <FontAwesomeIcon icon={faEnvelope} />
                <b className="margin10">{showEmail ? "darrenxu1994@gmail.com" : "Email"}</b>
            </Button>
        );
    }
}

export default EmailButton;