import { Mock } from 'tsmockit';
import * as React from 'react';
import { shallow } from 'enzyme';
import PostDetail from '../../../pages/posts/[id]';
import { ContentType, IJsonPlaceholderRepository } from '../../../services/module';
import { stubComments, stubPosts, stubUsers } from '../../StubData';

describe('PostDetail', () => {
  const postId = '1';
  const userId = '2';
  const useRouter = jest.spyOn(require('next/router'), 'useRouter');
  const mockJsonPlaceholderRepository = new Mock<IJsonPlaceholderRepository>();

  beforeAll(() => {
    useRouter.mockImplementationOnce(() => ({
      query: { id: 'id' }
    }));

    mockJsonPlaceholderRepository.Setup(r => r.Get(ContentType.Posts, postId), new Promise((resolve) => {
      resolve(stubPosts[0]);
    }));

    mockJsonPlaceholderRepository.Setup(r => r.Get(ContentType.Users, userId), new Promise((resolve) => {
      resolve(stubUsers[0]);
    }));

    mockJsonPlaceholderRepository.Setup(
      r => r.GetChildContent(ContentType.Posts, postId, ContentType.Comments), new Promise((resolve) => {
        resolve(stubComments);
      }));
  });


  it('should render without throwing an error', function () {
    shallow(<PostDetail
      repository={mockJsonPlaceholderRepository.Object} />);
  });
});
