import * as React from 'react';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import {
  ContentType, IInfiniteScroll, IJsonPlaceholderRepository,
  InfiniteScroll, JsonPlaceholderRepository } from '../services/module';
import { PostCard } from '../components/module';
import { AppName, InitialContentLimit } from '../constants';

interface Props {
  repository: IJsonPlaceholderRepository,
  infiniteScroll: IInfiniteScroll
}

export default function Home(props: Props) {
  const [repository] = useState(props.repository || JsonPlaceholderRepository.Instance());
  const [infiniteScroll] = useState(props.infiniteScroll || InfiniteScroll.Instance());

  const [posts, setPosts] = useState([]);
  const [postsToShowCount, setPostsToShowCount] = useState(InitialContentLimit);

  useEffect(() => {
    repository.GetAll(ContentType.Posts)
      .then((data) => {
        setPosts(data);
        infiniteScroll.Subscribe(InitialContentLimit, data.length, setPostsToShowCount);
      });

    return () => {
      infiniteScroll.Unsubscribe();
    };
  }, []);


  return (
    <div className="home-page">
      <Head>
        <title>Posts | {AppName}</title>
      </Head>

      <h1>Posts</h1>

      <ul>
        {posts.slice(0, postsToShowCount).map((post) => {
          return <li key={post.title}>
            <PostCard post={post} />
          </li>;
        })}
      </ul>
    </div>
  );
}
