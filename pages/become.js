import BoxHeader from '../components/containers/boxheader/BoxHeader';
import BoxListing from '../components/containers/boxlisting/BoxListing';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import { gql } from '@apollo/client';
import { client } from '../lib/apollo';

export async function getStaticProps() {
  
  const GET_ALL_COURSES = gql`
    query GetAllCourses {
      courses(first: 10) {
        nodes {
          content
          date
          excerpt
          title
          slug
          uri
          id
          databaseId
          featuredImage {
            node {
              sourceUrl
            }
          }
          courseACF {
            bundle
            description
            feature1
            feature2
            feature3
            feature4
            feature5
            price
            discount
            shortDescription
          }
        }
      }
    }
  `

  const coursesResponse = await client.query({
    query: GET_ALL_COURSES
  })

  const courses = coursesResponse?.data?.courses?.nodes;

  return {
    props: {
      courses
    }
  }
}

const become = ({ courses }) => {
  return (
    <>
    <Head>
        <title>Become a Business Owner</title>
    </Head>
    <Layout>
      <BoxHeader feat={courses} />
      <BoxListing content={courses}/>
    </Layout>
    </>
  )
}

export default become;