import React, {Component} from 'react';
import {Button} from 'react-semantify';
//var Button = require('react-semantify').Button; 
export default class Nav extends Component {
  render() {
  	return (
		<div id="nav" className="ui fixed inverted main menu">
			<div className="container">
		            <div className="item menu"><a href="/" className="header brand">政府公開通訊錄</a></div>
		            <div className="right menu">
			            <a className="item">關於我們</a>
			            <a href="//g0v.tw" target="_blank" className="item">G0V 零時政府</a>
		            </div>
			</div>
		</div>
    );
  }
}