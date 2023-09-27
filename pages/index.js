'use client';

import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout/Layout';
import { getSortedPostsData } from '../lib/posts';
import HeroBox from '../components/containers/herobox/HeroBox';
import HeroListing from '../components/containers/herolisting/HeroListing';
import HeroCard from '../components/containers/herocard/HeroCard';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <HeroBox postsData={allPostsData} />
      <HeroCard />
      <HeroListing postsData={allPostsData} />
    </Layout>
  );
}
