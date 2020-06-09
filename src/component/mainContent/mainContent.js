import React, { Component } from 'react';
import './mainContent.css';
import inbox from '../../json/inbox.json';
import archived from '../../json/archived.json';
import spam from '../../json/spam.json';
import deleted from '../../json/deleted.json';
import sentItems from '../../json/sent.json';
import ButtonOnList from '../buttonOnList/buttonOnList';
import MaincontentDescriptive from '../mainContentDescriptive/mainContentDescriptive';


class Maincontent extends Component {
    constructor(props) {
      super(props);
      this.state = {
            desc: '',
            subject: '',
            chagedleftnavigation: false
      };
    }
    maincontentDesc = (id,content) => {
        const secondlevelnavigation = this.props.selectedLeftNavigation;
        if(this.props.selectedLeftNavigation !== secondlevelnavigation){
            this.setState({
                chagedleftnavigation: true
            });
        }
        this.setState({
            desc: content,
            subject: id
        });
    };
    deletedButton = () => {
        alert("i exist");
    }
    flaggedButton = () => {
        alert("i to exist");
    }
    render() {
        const secondlevelnavigation = this.props.selectedLeftNavigation;
        const allmailTogather= Object.assign(inbox, archived, spam, deleted, sentItems);
        console.log(allmailTogather);
        let listitems ='';
        if(secondlevelnavigation === 'sent'){
            listitems = sentItems.map(listofmails => <li><a onClick={(id,content,secondlevelnavigation) => this.maincontentDesc(listofmails.mId,listofmails.content,secondlevelnavigation)}>{listofmails.mId}</a><ButtonOnList deleted={this.deletedButton} flagged={this.flaggedButton}/></li>)
        }else if(secondlevelnavigation === 'spam'){
            //const deleteditems = '';
            //listitems = inbox.filter(function(el){
               // return el.deleted === true;
            //});
            listitems = spam.map(listofmails => <li><a onClick={(id,content,secondlevelnavigation) => this.maincontentDesc(listofmails.mId,listofmails.content,secondlevelnavigation)}>{listofmails.mId}</a><ButtonOnList deleted={this.deletedButton} flagged={this.flaggedButton} /></li>);
        }else if(secondlevelnavigation === 'Deleted Items'){
            listitems = deleted.map(listofmails => <li><a onClick={(id,content,secondlevelnavigation) => this.maincontentDesc(listofmails.mId,listofmails.content,secondlevelnavigation)}>{listofmails.mId}</a><ButtonOnList deleted={this.deletedButton} flagged={this.flaggedButton} /></li>);
        }else if(secondlevelnavigation === 'Archives'){
            listitems = archived.map(listofmails => <li><a onClick={(id,content,secondlevelnavigation) => this.maincontentDesc(listofmails.mId,listofmails.content,secondlevelnavigation)}>{listofmails.mId}</a><ButtonOnList deleted={this.deletedButton} flagged={this.flaggedButton} /></li>);
        }else{
            listitems = inbox.map(listofmails => <li><a onClick={(id,content,secondlevelnavigation) => this.maincontentDesc(listofmails.mId,listofmails.content,secondlevelnavigation)}>{listofmails.mId}</a><ButtonOnList deleted={this.deletedButton} flagged={this.flaggedButton} /></li>) 
        }
        return (
            <div className="row">
                <div className='col-3 mailshadingList'>
                    <div className="">{secondlevelnavigation}</div>
                    <ul className="">
                   
                    {listitems}
                    </ul>
                </div>
                <div className='col-9'>
                    <MaincontentDescriptive desc={this.state.desc} subject={this.state.subject}/>
                </div>
            </div>
            
        );
    }
}

export default Maincontent;
