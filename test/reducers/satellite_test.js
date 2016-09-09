import { expect } from '../test_helper';
import satelliteReducer from '../../src/reducers/satellite';
import { FETCH_SATELLITE } from '../../src/actions/types';

describe('Satellite Reducer', () => {
	it('handles action with unknown type', () => {
		expect(satelliteReducer(undefined, {})).to.eql([]);
	});
	it('handles action of type FETCH_SATELLITE', () => {
		const id = 25544;
		const url = `https://api.wheretheiss.at/v1/satellites/${id}`;
		const action = { type: FETCH_SATELLITE, payload: url };
		console.log(url);
		expect(satelliteReducer(url, action)).to.be.an('array');
	});
});