import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NotFoundPage extends Component {
  render(){
    return (
      <div>
         <h1>404</h1>
         <p>Sorry, the page you're looking for has VaaaAAAniIIshhed!<br />
         <strong>MuAH HAHAHAHAHA!</strong></p>
         <p>Sorry... <Link to="/">Return to the homepage?</Link></p>
      </div>
    );
  }
}
