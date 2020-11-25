import * as React from 'react';
import { mount } from 'enzyme';
import Authors from '../../pages/authors';

describe('Authors', () => {
  it('should render without throwing an error', function () {
    const wrap = mount(<Authors />);
    expect(wrap.find('h1').text()).toBe('Authors');
  });
});
