import { Mock } from 'tsmockit';
import * as React from 'react';
import { mount } from 'enzyme';
import { act } from '@testing-library/react';
import { ContentType, IInfiniteScroll, IJsonPlaceholderRepository } from '../../services/module';
import Home from '../../pages/index';
import { stubPosts } from '../StubData';

describe('Index', () => {
  const mockJsonPlaceholderRepository = new Mock<IJsonPlaceholderRepository>();
  const mockInfiniteScroll = new Mock<IInfiniteScroll>();

  beforeAll(() => {
    mockJsonPlaceholderRepository.Setup(r => r.GetAll(ContentType.Posts), new Promise((resolve) => {
      resolve(stubPosts);
    }));

    mockInfiniteScroll.Setup(s => s.Setup(0, 0, () => null));
  });

  it('should render without throwing an error', async function () {
    await act(async () => {
      const wrap = await mount(<Home
        repository={mockJsonPlaceholderRepository.Object}
        infiniteScroll={mockInfiniteScroll.Object} />);
      expect(wrap.find('h1').text()).toBe('Posts');
    });
  });
});
