import 'whatwg-fetch';
import * as constants from '../constants'
const API = 'https://taiwan.popit.mysociety.org/api/v0.1';
export function search(keyword) {

	return {
		type: constants.SEARCH, keyword
	};
}
export function searchPeople(options) {
	const { name } = options;
	return dispatch => {
		fetch(`${API}/search/persons/?q=name:${name}`)
		.then(res => res.json())
		.then(res => dispatch({
			type: constants.FETCH_PEOPLE,
			people: res.result
		}));
	}
}