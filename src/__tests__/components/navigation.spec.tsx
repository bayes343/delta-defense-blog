import * as React from 'react';
import { mount } from 'enzyme';
import { Navigation } from '../../components/module';

describe('Navigation', () => {
  it('should render without throwing an error', function () {
    const wrap = mount(<Navigation />);
    const navigationList = wrap.find('ul').text();

    expect(navigationList).toContain('Home');
    expect(navigationList).toContain('Authors');
  });
});
