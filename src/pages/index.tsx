import * as React from 'react';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { ContentType, JsonPlaceholderRepository } from '../services/module';

export default function Posts(props) {
  const [repository] = useState(props.repository || JsonPlaceholderRepository.Instance);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    repository.GetAll(ContentType.Posts)
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <Head>
        <title>Posts</title>
      </Head>

      <h1>Posts</h1>

      <ul className="post-list">
        {posts.map((post) => {
          return <li key={post.title}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
}
