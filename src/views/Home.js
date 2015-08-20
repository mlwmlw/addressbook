import React, {Component} from 'react';
import Nav from './Nav';
import Result from '../components/Result';
import {Button} from 'react-semantify';
import {searchPeople} from '../actions/addressbook';
export default class Home extends Component {
  search(e) {
    //const { search } = this.props;
    //this.props.search(this.refs.keyword.getDOMNode().value);
    const keyword = this.refs.keyword.getDOMNode().value;
    this.props.actions.searchPeople({name: keyword});
    e.preventDefault();
  }
  render() {
    const { addressbook } = this.props;
  	return (
      <div>

        <div className="container">
          <div className="ui one column page grid">
            <div className="column">
              <h2 className="logo" />
              <form onSubmit={this.search.bind(this)}>
              <div className="ui action input searchbox">
                <input ref="keyword" placeholder="請直接輸入想搜尋的關鍵字" type="text"></input>
                <Button onClick={this.search.bind(this)} type="submit" color="black" >送 出</Button>
              </div>
              </form>
              <Result data={addressbook} />
              <div className="footer" />
            </div>
          </div>
          <footer />
        </div>
      </div>
    );
  }
}

