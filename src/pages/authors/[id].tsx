import * as React from 'react';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { AppName } from '../../constants';
import { ContentType, IJsonPlaceholderRepository, JsonPlaceholderRepository } from '../../services/module';
import { Images } from '../../enums/Images';
import { IUser } from '../../domain/module';

interface Props {
  repository: IJsonPlaceholderRepository
}

export default function AuthorDetail(props: Props) {
  const [repository] = useState(props.repository || JsonPlaceholderRepository.Instance);
  const [author, setAuthor] = useState(null);

  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    if (id) {
      repository.Get(ContentType.Users, id.toString())
        .then((authorData) => setAuthor(authorData));
    }
  }, [router]);

  return (
    <div className="author-detail">
      {author ?
        <>
          <Head>
            <title>{author.name} | {AppName}</title>
          </Head>

          <h1>{author.name}</h1>

          <h2>Contact Info</h2>
          <p>"{author.username}" | <a href={`mailto:${author.email}`}>{author.email}</a></p>

          <section>
            <h3>Address
              <a
                href={`https://maps.google.com/mobile?q=${author.address.geo.lat},${author.address.geo.lng}`}
                target="blank">
                <img src={Images.MapPin} alt="Map pin"></img>
              </a>
            </h3>
            <table>
              <tr>
                <td>Street</td>
                <td>{author.address.street}</td>
              </tr>
              <tr>
                <td>Suite</td>
                <td>{author.address.suite}</td>
              </tr>
              <tr>
                <td>City</td>
                <td>{author.address.city}</td>
              </tr>
              <tr>
                <td>Zipcode</td>
                <td>{author.address.zipcode}</td>
              </tr>
            </table>
          </section>
        </> : null}
    </div>
  );
}

export async function getStaticPaths() {
  const posts = await JsonPlaceholderRepository.Instance.GetAll<IUser>(ContentType.Users);

  const paths = posts.map((user) => ({
    params: { id: user.id.toString() }
  }));

  return { paths, fallback: false };
}

export async function getStaticProps() {
  return { props: { }, revalidate: 1 };
}
