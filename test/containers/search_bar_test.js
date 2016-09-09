import { renderComponent , expect } from '../test_helper';
import Location from '../../src/containers/search_bar';

describe('Search' , () => {
  let component;

  beforeEach(() => {
  	const props = { id: 25544 };
    component = renderComponent(Location, null, props);
  });

  beforeEach(() => {
			component.find('input').simulate('change', 'id');
		});

		it('shows text in input field', () => {
			expect(component.find('input')).to.have.value('id');
		});
		it('clears text when submitted', () => {
			component.simulate('submit');
			expect(component.find('input')).to.have.value('');
		});
	
});
