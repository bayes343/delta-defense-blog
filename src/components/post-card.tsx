import * as React from 'react';
import { Component, ReactNode } from 'react';
import { Queryable } from 'tsbase';
import Link from 'next/link';
import { IPost } from '../domain/IPost';
import { blogImages, Classes } from '../enums/module';

interface Props { post: IPost }
interface State {}

export class PostCard extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  render(): ReactNode {
    const randomBlogImage = Queryable.From(blogImages).GetRandom();

    return <Link href={`/posts/${this.props.post.id}`}>
      <div className="post-card">
        <div className={Classes.ImageWrapper}>
          <img src={randomBlogImage} alt="Random blog image"></img>
        </div>
        <h2>{this.props.post.title}</h2>
      </div>
    </Link> ;
  }
}
