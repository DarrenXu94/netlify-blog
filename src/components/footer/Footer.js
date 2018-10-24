import React from 'react';
import { withRouter } from 'react-router-dom'
import './footer.css'

const Footer = ({history}) => {
    return (
        <div className="footerHeight bg-primary alignCenter flex">
            <div className="container flex spaceBetween">
                <div className="text-secondary paddingLeft30">Darren Xu &copy; 2018 </div>
                <div><a className="text-secondary" href="https://icons8.com">Icon pack by Icons8</a></div>
                
                <div onClick={()=>history.push('/contact')} className="text-secondary paddingRight30">
                <a className="cursorPointer">
                    Contact
                </a>
                </div>
            </div>
        </div>
    );
};

export default withRouter(Footer);