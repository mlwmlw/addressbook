export const SEARCH = 'SEARCH';
export function search(keyword) {
	return {
		type: SEARCH, keyword
	};
}
