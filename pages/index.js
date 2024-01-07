'use client';

import Head from 'next/head';
import { serverClient } from '../lib/apollo';
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

  const GET_INSIGHTS = gql`
  query GetInsights {
    insights(where: {featured: true}) {
      nodes {
        title
        excerpt
        uri
        featuredImage {
          node {
            sourceUrl
          }
        }
        insightsACF {
          tagline
          featured
        }
      }
    }
  }
  `
  const GET_ALL_INSIGHTS = gql`
    query GetAllInsights {
      insights(first: 3) {
        nodes {
          content
          date
          excerpt
          title
          id
          uri
          insightsACF {
            featured
            tagline
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

  const GET_ALL_COURSES = gql`
    query GetAllCourses {
      courses(first: 3) {
        nodes {
          content
          date
          excerpt
          title
          uri
          id
          featuredImage {
            node {
              sourceUrl
            }
          }
          courseACF {
            description
            shortDescription
          }
        }
      }
    }
  `

  const responseIn = await serverClient.query({
    query: GET_INSIGHTS
  })
  const insights = responseIn?.data?.insights?.nodes

  const responseAllIn = await serverClient.query({
    query: GET_ALL_INSIGHTS
  })
  const allInsights = responseAllIn?.data?.insights?.nodes

  const response = await serverClient.query({
    query: GET_POSTS
  })
  const posts = response?.data?.posts?.nodes;

  const coursesResponse = await serverClient.query({
    query: GET_ALL_COURSES
  })
  const courses = coursesResponse?.data?.courses?.nodes;

  return {
    props: {
      posts,
      insights,
      allInsights,
      courses
    }
  }
}

export default function Home({ 
  posts, 
  insights,
  allInsights,
  courses
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <HeroBox insights={insights} />
      <HeroCard allInsights={allInsights} />
      <HeroListing postsData={posts} />
      <CoursesListing courses={courses} />
    </Layout>
  );
}
