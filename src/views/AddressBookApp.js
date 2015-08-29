import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from './Home';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import * as AddressbookActions from '../actions/addressbook';

@connect(state => ({
  addressbook: state.search
}))
export default class AddressBookApp extends Component {
  render() {
    const { addressbook, actions } = this.props;
    return (
      <div>
        <Nav />
        <Home addressbook={addressbook} actions={actions} />
        <Footer />
      </div>
    );
  }
}
function mapState(state) {
  return {
    addressbook: state.addressbook
  };
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(AddressbookActions, dispatch)
  };
}
export default connect(mapState, mapDispatch)(AddressBookApp);