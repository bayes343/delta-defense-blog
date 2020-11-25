import * as React from 'react';
import { mount } from 'enzyme';
import Custom404 from '../../pages/404';

describe('Index', () => {
  it('should render without throwing an error', function () {
    const wrap = mount(<Custom404 />);
    expect(wrap.find('h1').text()).toBe('404 - Page Not Found');
  });
});
