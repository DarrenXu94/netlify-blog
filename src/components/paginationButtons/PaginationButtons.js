import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

class PaginationButtons extends Component {

    render() {
        return (
            <div style={{ textAlign: 'center', padding: '4% 20% 0 20%' }}>
                <Button style={{ margin: '5px' }} 
                    disabled={parseInt(this.props.currentPage) <= 0}
                    >
                    <FontAwesomeIcon icon={faChevronLeft} />
                    <b style={{ marginLeft: '5px' }}>Prev</b>
                </Button>
                <Button style={{ margin: '5px' }}
                    disabled={(parseInt(this.props.currentPage)+1) * 5 >= parseInt(this.props.pageCount)}
                    >

                    <b style={{ marginRight: '5px' }}>Next</b>
                    <FontAwesomeIcon icon={faChevronRight} />

                </Button>
            </div>
        );
    }
}

export default PaginationButtons;