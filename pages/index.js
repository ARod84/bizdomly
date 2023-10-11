'use client';

import Head from 'next/head';
import { client } from '../lib/apollo';
import { gql } from '@apollo/client';
import Layout, { siteTitle } from '../components/layout/Layout';
import HeroBox from '../components/containers/herobox/HeroBox';
import HeroListing from '../components/containers/herolisting/HeroListing';
import HeroCard from '../components/containers/herocard/HeroCard';
import CoursesListing from '../components/containers/courseslisting/CoursesListing';

export async function getStaticProps() {
  const GET_POSTS = gql`
    query Posts {
      posts(first: 10) {
        nodes {
          databaseId
          title
          excerpt
          date
          content
          slug
          uri
          author {
            node {
              avatar {
                url
              }
              nicename
              slug
              userId
              lastName
              firstName
            }
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  `
  const response = await client.query({
    query: GET_POSTS
  })
  const posts = response?.data?.posts?.nodes;

  return {
    props: {
      posts
    }
  }
}

export default function Home({ posts }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <HeroBox postsData={posts} />
      <HeroCard />
      <HeroListing postsData={posts} />
      <CoursesListing />
    </Layout>
  );
}
