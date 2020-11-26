import { Mock } from 'tsmockit';
import * as React from 'react';
import { mount } from 'enzyme';
import Posts from '../../pages/index';
import { ContentType, IJsonPlaceholderRepository } from '../../services/module';
import { stubPosts } from '../StubData';

describe('Index', () => {
  const mockJsonPlaceholderRepository = new Mock<IJsonPlaceholderRepository>();
  mockJsonPlaceholderRepository.Setup(r => r.GetAll(ContentType.Posts), new Promise((resolve) => {
    resolve(stubPosts);
  }));

  it('should render without throwing an error', async function () {
    const wrap = await mount(<Posts repository={mockJsonPlaceholderRepository.Object} />);
    expect(wrap.find('h1').text()).toBe('Posts');
  });
});
