import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from './Home';
import Nav from './Nav';
import * as AddressbookActions from '../actions/addressbook';

@connect(state => ({
  addressbook: state.search
}))
export default class AddressBookApp extends Component {
  render() {
    const { addressbook, dispatch } = this.props;
    return (
      <div>
        <Nav />
        <Home addressbook={addressbook} {...bindActionCreators(AddressbookActions, dispatch)} />
      </div>
    );
  }
}
