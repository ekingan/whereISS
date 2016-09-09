import { renderComponent , expect } from '../test_helper';
import Location from '../../src/containers/location';

describe('Location' , () => {
  let component;

  beforeEach(() => {
  	const props = { id: 25544 };
    component = renderComponent(Location, null, props);
  });

  it('renders a th for each search', () => {
    expect(component.find('th')).to.exist;
  });
});
