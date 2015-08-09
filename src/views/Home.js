import React, {Component} from 'react';
import Nav from './Nav';
import Result from '../components/Result';
import {Button} from 'react-semantify';
export default class Home extends Component {
  render() {
  	const result = [
      {name: '喵喵', phone: '0912345678', fax: '02-1284-2134'}
    ];
  	return (
      <div>
        <Nav />
        <div className="container">
          <div className="ui one column page grid">
            <div className="column">
              <h2 className="logo" />
              <div className="ui action input searchbox">
                <input placeholder="請直接輸入想搜尋的關鍵字" type="text"></input>
                <Button color="black" >送 出</Button>
              </div>
              <Result data={result} />
              <div className="footer" />
            </div>
          </div>
          <footer />
        </div>
      </div>
    );
  }
}
////
