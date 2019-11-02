import React from 'react';
import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <React.Fragment>
      <div id='notfound'>
        <div class='notfound'>
          <div class='notfound-404'>
            <h1>404</h1>
          </div>
          <h2>The Page was not found</h2>

          <Link to='/'>
            <span class='arrow' />
            Return to Home page
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NotFound;
