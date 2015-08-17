import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from './Home';
import Nav from './Nav';
import * as AddressbookActions from '../actions/addressbook';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Home search={this.props.search} addressbook={this.props.addressbook} />
      </div>
    );
  }
}
function select(state) {
  return {
    addressbook: state.search
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(AddressbookActions, dispatch);
}
export default connect(select, mapDispatchToProps)(App);