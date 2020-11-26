import { Queryable } from 'tsbase/Collections/Queryable';
import * as React from 'react';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ContentType, IJsonPlaceholderRepository, JsonPlaceholderRepository } from '../../services/module';
import { AppName } from '../../constants';
import { blogImages, Classes } from '../../enums/module';

interface Props {
  repository: IJsonPlaceholderRepository
}

export default function PostDetail(props: Props) {
  const [repository] = useState(props.repository || JsonPlaceholderRepository.Instance);
  const [post, setPost] = useState(null);
  const [author, setAuthor] = useState(null);
  const [comments, setComments] = useState([]);

  const router = useRouter();
  const id = router.query.id;
  const randomBlogImage = Queryable.From(blogImages).GetRandom();

  useEffect(() => {
    getPostDetailData();
  }, [router]);

  return (
    <div className="post-detail">
      {post && author ?
        <>
          <Head>
            <title>{id} | {AppName}</title>
          </Head>

          <section className="hero">
            <div className={Classes.ImageWrapper}>
              <img src={randomBlogImage} alt="Random blog image"></img>
            </div>
            <h1>{post.title}</h1>
            <p>By:
              <Link href={`/authors/${author.username}`}>
                <a>
                  {author.name} | {author.address.city}
                </a>
              </Link></p>
          </section>

          <section className="content">
            <p>{post.body}</p>

            <h2>Comments</h2>
            <ul className="comment-list">
              {comments.map((comment) => {
                return <li key={comment.id}>
                  <blockquote>"{comment.body}"</blockquote>
                  <p>From: <a href={`mailto:${comment.email}`}>{comment.email}</a></p>
                </li>;
              })}
            </ul>
          </section>
        </> : null}
    </div>
  );

  function getPostDetailData() {
    if (id) {
      repository.Get(ContentType.Posts, id.toString()).then((postData) => {
        setPost(postData);

        repository.Get(ContentType.Users, postData['userId']).then((userData) => {
          setAuthor(userData);
        });

        repository.GetChildContent(ContentType.Posts, postData['id'], ContentType.Comments).then((commentsData) => {
          setComments(commentsData);
        });
      });
    }
  }
}
