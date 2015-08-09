import React, {Component} from 'react';
import {Button} from 'react-semantify';
//var Button = require('react-semantify').Button; 
export default class Nav extends Component {
  render() {
  	return (
		<div id="nav">
		    <div className="fixed ui top inverted menu ng-scope">
		        <div className="container">
		            <div className="item menu"><a href="/#/addressbook/" className="header brand">政府公開通訊錄</a></div>
		            <div className="content right menu"><a className="item">關於我們</a><a className="item">G0V 零時政府</a></div>
		        </div>
		    </div>
		</div>
    );
  }
}