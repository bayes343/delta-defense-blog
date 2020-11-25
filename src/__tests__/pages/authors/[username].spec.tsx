import * as React from 'react';
import { mount } from 'enzyme';
import AuthorDetail from '../../../pages/authors/[username]';

describe('AuthorDetail', () => {
  const useRouter = jest.spyOn(require('next/router'), 'useRouter');

  useRouter.mockImplementationOnce(() => ({
    query: { username: 'username' }
  }));

  it('should render without throwing an error', function () {
    const wrap = mount(<AuthorDetail />);
    expect(wrap.find('h1').text()).toEqual('username');
  });
});
