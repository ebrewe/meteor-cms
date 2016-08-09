import React, { Component } from 'react';

export default class AppContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      signedIn: true,
    }
  }

  render(){
    return (
      <div>
        {this.state.signedIn ?
          <div className="admin-bar">
            Welcome, admin.
          </div> : ''
        }
        {this.props.children}
      </div>
    );
  }
}
