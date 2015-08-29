import { LOADING, FETCH_PEOPLE} from '../constants'
export default function search(state = {people: null}, action) {
  switch (action.type) {
	  case FETCH_PEOPLE:
	   	return {...state, 
	   		people: action.people, 
	   		total: action.total, 
	   		page: action.page
	   	};
	  case LOADING:
	  	return {...state, people: ''};
	  default:
	    return state;
  }
}