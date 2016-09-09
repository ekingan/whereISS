import { expect } from '../test_helper';
import { FETCH_SATELLITE, fetchData } from '../../src/actions';

describe('actions', () => {
	describe('FETCH_SATELLITE', () => {
		it('has the correct type', () => {
			const action = fetchData();
			expect(action.type).to.equal(FETCH_SATELLITE);
		});
		// it('has the correct payload', () => {
		// 	const action = fetchData('id');
		// 	expect(action.payload).to.equal('id'); 
		// });
	});
});