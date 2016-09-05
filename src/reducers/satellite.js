import { FETCH_SATELLITE } from '../actions/index';

export default function(state = [], action) {
	switch(action.type) {
		case FETCH_SATELLITE:
			return [ action.payload.data, ...state];
	}
	return state;
}