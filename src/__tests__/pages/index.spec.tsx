import * as React from 'react';
import { mount } from 'enzyme';
import Home from '../../pages/index';

describe('Index', () => {
  it('should render without throwing an error', function () {
    const wrap = mount(<Home />);
    expect(wrap.find('h1').text()).toBe('Delta Defense Blog');
  });
});
