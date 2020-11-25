import * as React from 'react';
import { mount } from 'enzyme';
import { Navigation } from '../../components/module';

describe('Navigation', () => {
  it('should render without throwing an error', function () {
    const wrap = mount(<Navigation />);
    expect(wrap.find('p').text()).toContain('Delta Defense Blog');
  });
});
