import { LOADING, FETCH_PEOPLE} from '../constants'
export default function search(state = null, action) {
  switch (action.type) {
	  case FETCH_PEOPLE:
	   	return action.people;
	  case LOADING:
	  	return '';
	  default:
	    return state;
  }
}