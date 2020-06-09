import React, { Component } from 'react';
import './leftNavigation.css';

class LeftNavigation extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
    componentDidMount() {
    // const abb = fetch("./leftlist.json")
    //      .then(res => res.json())
    //      .then(data => console.log(data));
    }

    render() {
        return (
          <div className="leftSideNavigation">
            {this.props.LeftnavigationJson.map(leftnavigationUlList =>
              <ul className={leftnavigationUlList.class} key={leftnavigationUlList.ul} role={leftnavigationUlList.role}>
                <div>{leftnavigationUlList.ul}</div>
                {leftnavigationUlList.sub.map(leftnavigationLiList =>
                <li className={leftnavigationLiList.class} key={leftnavigationLiList.name} onClick={(event,name) => this.props.handleselect(event,leftnavigationLiList.name)}>
                   <a >{leftnavigationLiList.name} </a>
                </li>
                )}
              </ul>
            )}
         </div>
                
        );
      }
    }

export default LeftNavigation;
