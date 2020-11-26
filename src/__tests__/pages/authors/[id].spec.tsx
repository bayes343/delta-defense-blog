import { Mock } from 'tsmockit';
import * as React from 'react';
import { shallow } from 'enzyme';
import AuthorDetail from '../../../pages/authors/[id]';
import { ContentType, IJsonPlaceholderRepository } from '../../../services/module';
import { stubUsers } from '../../StubData';

describe('AuthorDetail', () => {
  const useRouter = jest.spyOn(require('next/router'), 'useRouter');
  const mockJsonPlaceholderRepository = new Mock<IJsonPlaceholderRepository>();

  beforeAll(() => {
    useRouter.mockImplementationOnce(() => ({
      query: { username: 'username' }
    }));

    mockJsonPlaceholderRepository.Setup(r => r.Get(ContentType.Users, '1'), new Promise((resolve) => {
      resolve(stubUsers[0]);
    }));
  });


  it('should render without throwing an error', function () {
    shallow(<AuthorDetail
      repository={mockJsonPlaceholderRepository.Object} />);
  });
});
