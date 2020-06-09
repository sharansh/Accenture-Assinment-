import React, { Component } from 'react';
import './buttonOnList.css';

class ButtonOnList extends Component {
    constructor(props) {
      super(props);
      this.state = {

      };
    }
   
    render() {
        return (
            <>
                <button className="pull-right deletebutton" onClick={this.props.deleted}>Del</button><button className="pull-right flagbutton" onClick={this.props.flagged}>flg</button>
            </>
        );
    }
}

export default ButtonOnList;