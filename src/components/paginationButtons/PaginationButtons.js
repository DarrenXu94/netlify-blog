import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { withRouter } from 'react-router-dom'
import { POSTS_PER_PAGE } from '../../config/blogConfig'

class PaginationButtons extends Component {

    render() {
        return (
            <div style={{ textAlign: 'center', padding: '4% 20% 0 20%' }}>
                <Button style={{ margin: '5px' }} 
                    disabled={parseInt(this.props.currentPage) <= 0}
                    onClick={()=>this.props.history.push(`/programming/page/${parseInt(this.props.currentPage) - 1}`)}
                    >
                    <FontAwesomeIcon icon={faChevronLeft} />
                    <b style={{ marginLeft: '5px' }}>Prev</b>
                </Button>
                <Button style={{ margin: '5px' }}
                    disabled={(parseInt(this.props.currentPage)+1) * POSTS_PER_PAGE >= parseInt(this.props.pageCount)}
                    onClick={()=>this.props.history.push(`/programming/page/${parseInt(this.props.currentPage) + 1}`)}
                    >

                    <b style={{ marginRight: '5px' }}>Next</b>
                    <FontAwesomeIcon icon={faChevronRight} />

                </Button>
            </div>
        );
    }
}

export default withRouter(PaginationButtons);