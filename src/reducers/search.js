import { SEARCH } from '../actions/addressbook';

const book = [ {name: '喵喵', phone: '0912345678', fax: '02-1284-2134'}];
export default function counter(state = [], action) {
  switch (action.type) {
	  case SEARCH:
	  	if(state.length == 0) {
			state = book;
	  	}
	   	else {
	   		state = state.map( row => Object.assign({}, row, {name: action.keyword}) );
	   	}	   		
	   	return state;
	  default:
	    return state;
  }
}