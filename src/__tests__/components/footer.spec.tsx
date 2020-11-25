import * as React from 'react';
import { mount } from 'enzyme';
import { Footer } from '../../components/module';

describe('Footer', () => {
  it('should render without throwing an error', function () {
    const wrap = mount(<Footer />);
    expect(wrap.find('p').text()).toContain('Joseph Bayes (Joey)');
  });
});
