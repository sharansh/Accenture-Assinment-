import React, { Component } from 'react';
import './mainContentDescriptive.css';

class MaincontentDescriptive extends Component {
    constructor(props) {
      super(props);
      this.state = {

      };
    }
    render() {
        return (
            <div className="mailbody">
                <h1>{this.props.subject}</h1>
                <div>{this.props.desc}</div>
            </div>
        );
    }
}

export default MaincontentDescriptive;