import React, { Component } from 'react';
import './LandingPage.css'
import Header from '../../component/header/header';
import LeftNavigation from '../../component/leftNavigation/leftNavigation';
import MainContent from '../../component/mainContent/mainContent';
import LeftnavigationJson from '../../json/leftlist.json';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedItem: ""
    };
  }

  clickedListItem = (event,name) =>{
        event.preventDefault();
        this.setState({
             clickedItem : name
         });
};    

  render() {
  return (
    <div className="container-fluid customMailBox">
        <div className="row">
            <Header />
        </div>
        <div className="row">
            <div className="col-2 custompadding">
                <LeftNavigation handleselect={this.clickedListItem} LeftnavigationJson={LeftnavigationJson}/>
            </div>
            <div className="col-10 custompadding">
                <MainContent selectedLeftNavigation={this.state.clickedItem} LeftnavigationJson={LeftnavigationJson}/>
            </div>
        </div>
    </div>
  );
}
}

export default LandingPage;
