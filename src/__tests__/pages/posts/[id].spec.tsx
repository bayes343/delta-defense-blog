import * as React from 'react';
import { mount } from 'enzyme';
import PostDetail from '../../../pages/posts/[id]';

describe('PostDetail', () => {
  const useRouter = jest.spyOn(require('next/router'), 'useRouter');

  useRouter.mockImplementationOnce(() => ({
    query: { id: 'id' }
  }));

  it('should render without throwing an error', function () {
    const wrap = mount(<PostDetail />);
    expect(wrap.find('h1').text()).toEqual('id');
  });
});
