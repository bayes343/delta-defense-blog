import * as React from 'react';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ContentType, IJsonPlaceholderRepository, JsonPlaceholderRepository } from '../../services/module';
import { AppName } from '../../constants';
import { IUser } from '../../domain/module';
import { Classes } from '../../enums/module';
import { PostCard } from '../../components/module';

interface Props {
  repository: IJsonPlaceholderRepository
}

export default function AuthorDetail(props: Props) {
  const [repository] = useState(props.repository || JsonPlaceholderRepository.Instance());
  const [author, setAuthor] = useState(null);
  const [posts, setPosts] = useState([]);

  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    getAuthorDetailData();
  }, [router]);

  return (
    <div className="author-detail">
      {author && posts ?
        <>
          <Head>
            <title>{author.name} | {AppName}</title>
          </Head>

          <h1>{author.name} "{author.username}"</h1>

          <div className="hero-contact-wrapper">
            <section className="hero">
              <div className={Classes.ImageWrapper}>
                <img src={`https://randomuser.me/api/portraits/women/${author.id}.jpg`} alt={`Portrait of ${author.name}`}></img>
              </div>

              <p>Currently employed at <b>{author.company.name}</b>,
                the {author.company.catchPhrase} company, working to {author.company.bs}.</p>
            </section>

            <section className="contact-info">
              <h2>Contact Info</h2>

              <ul>
                <li><b>Website</b> <a href={`https://${author.website}`} target="blank">{author.website}</a></li>
                <li><b>Email</b> <a href={`mailto:${author.email}`}>{author.email}</a></li>
                <li><b>Phone</b> <a href={`tel:+${author.phone}`}>{author.phone}</a></li>
                <li><b>Address</b>
                  <a
                    href={`https://maps.google.com/mobile?q=${author.address.geo.lat},${author.address.geo.lng}`}
                    target="blank">
                    {`${author.address.street} ${author.address.suite} ${author.address.city} ${author.address.zipcode}`}
                  </a>
                </li>
              </ul>
            </section>
          </div>

          <section className="author-posts">
            <h2>More from this author</h2>

            <ul>
              {posts.map((post) => {
                return <li key={post.id}>
                  <PostCard post={post} />
                </li>;
              })}
            </ul>
          </section>
        </> : null}
    </div>
  );

  function getAuthorDetailData() {
    if (id) {
      repository.Get(ContentType.Users, id.toString()).then((authorData) => {
        setAuthor(authorData);

        repository.GetChildContent(ContentType.Users, authorData['id'], ContentType.Posts).then((postsData) => {
          setPosts(postsData);
        });
      });
    }
  }
}

export async function getStaticPaths() {
  const posts = await JsonPlaceholderRepository.Instance().GetAll<IUser>(ContentType.Users);

  const paths = posts.map((user) => ({
    params: { id: user.id.toString() }
  }));

  return { paths, fallback: false };
}

export async function getStaticProps() {
  return { props: { }, revalidate: 1 };
}
