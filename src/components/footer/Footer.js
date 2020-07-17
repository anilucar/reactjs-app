import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <>
        {this.props.children}

        <div className="page-footer font-small blue">
          <div className="footer-copyright text-center py-3">© 2018 Copyright:
            <Link to="/about"><span> MDBootstrap.com</span> </Link>
          </div>
        </div>
      </>
    )
  }
}
export default Footer;
