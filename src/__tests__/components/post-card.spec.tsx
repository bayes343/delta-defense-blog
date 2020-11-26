import * as React from 'react';
import { mount } from 'enzyme';
import { PostCard } from '../../components/module';
import { IPost } from '../../domain/module';
import { Strings } from 'tsbase';

describe('PostCard', () => {
  const post: IPost = { title: 'title', body: Strings.Empty, id: 1, userId: 1 };

  it('should render without throwing an error', function () {
    const wrap = mount(<PostCard post={post} />);
    expect(wrap.find('h2').text()).toContain(post.title);
  });
});
