import * as React from 'react';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { ContentType, InfiniteScroll, JsonPlaceholderRepository } from '../services/module';
import { PostCard } from '../components/module';

const initialLimit = 12;

export default function Home(props) {
  const [repository] = useState(props.repository || JsonPlaceholderRepository.Instance);
  const [infiniteScroll] = useState(props.infiniteScroll || InfiniteScroll.Instance);

  const [posts, setPosts] = useState([]);
  const [postsToShowCount, setPostsToShowCount] = useState(initialLimit);

  useEffect(() => {
    repository.GetAll(ContentType.Posts)
      .then((data) => {
        setPosts(data);
        infiniteScroll.Setup(initialLimit, data.length, setPostsToShowCount);
      });
  }, []);


  return (
    <div className="home-page">
      <Head>
        <title>Posts</title>
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
