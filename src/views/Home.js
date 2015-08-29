import React, {Component} from 'react';
import Result from '../components/Result';
import {Button} from 'react-semantify';
import {searchPeople} from '../actions/addressbook';
export default class Home extends Component {
  search(e) {
    const keyword = this.refs.keyword.getDOMNode().value;
    e.preventDefault();
    if(keyword.length == 0)
      return;      
    this.props.actions.loading();
    this.props.actions.searchPeople({name: keyword});
    
  }
  render() {
    const { addressbook } = this.props;
  	return (
      <div>
        <div className="full container">
          <div className="ui one column page grid">
            <div className="column">
              <h2 className="logo" />
            </div>
            
              <form className="column center aligned" onSubmit={this.search.bind(this)}>
                <div className="ui action input searchbox">
                  <input ref="keyword" placeholder="請直接輸入想搜尋的關鍵字" type="text"></input>
                  <Button onClick={this.search.bind(this)} type="submit" color="gray" >送 出</Button>
                </div>
              </form>
              <Result data={addressbook} />
            
          </div>
        </div>
      </div>
    );
  }
}

