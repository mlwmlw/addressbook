import { SEARCH, FETCH_PEOPLE} from '../constants'
export default function search(state = [], action) {
  switch (action.type) {
	  case FETCH_PEOPLE:
	   	return action.people;
	  default:
	    return state;
  }
}