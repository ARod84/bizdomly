import Layout from '../../components/layout/Layout';
import PostTemplate from '../../components/containers/templates/PostTemplate';
import { client } from '../../lib/apollo';
import { gql } from '@apollo/client';

export default function Course({ course }) {
  return (
    <Layout>
      <PostTemplate postData={course} />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const GET_COURSE = gql`
  query GetPostByUri($id: ID!) {
    course(id: $id, idType: URI) {
      title
      content
      excerpt
      id
      uri
      date
      databaseId
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
  `

  const response = await client.query({
    query: GET_COURSE,
    variables: {
      id: params.uri
    }
  })

  const course = response?.data?.course
  return {
    props: {
      course
    }
  }
}

export async function getStaticPaths(){
  const paths = []
  return {
      paths,
      fallback: 'blocking'
  }
}