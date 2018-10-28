import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { CopyToClipboard } from 'react-copy-to-clipboard';

class EmailButton extends Component {
    state = {
        showEmail: false,
        copied: false
    }
    render() {
        let { showEmail, copied } = this.state;
        return (
            <div style={{display:"flex", flexDirection: "column"}}>

                <Button onClick={() => this.setState({ showEmail: !showEmail })} className="margin5" bsStyle="primary" bsSize="large">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <b className="margin10">{showEmail ? "darrenxu1994@gmail.com" : "Email"}</b>
                </Button>
                {showEmail &&
                    <CopyToClipboard text={`darrenxu1994@gmail.com`}
                        onCopy={() => this.setState({ copied: true })}>
                        <Button>{copied ? "Copied" : "Copy to clipboard"}</Button>
                    </CopyToClipboard>
                }
                

            </div>
        );
    }
}

export default EmailButton;