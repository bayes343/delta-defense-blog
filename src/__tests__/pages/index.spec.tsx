import * as React from 'react';
import { shallow } from 'enzyme';
import Home from '../../pages/index';

describe('Index', () => {
  it('should render without throwing an error', async function () {
    const wrap = await shallow(<Home />);
    expect(wrap.find('h1').text()).toBe('Posts');
  });
});
