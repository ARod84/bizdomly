import Layout from '../../components/layout/Layout';
import PostTemplate from '../../components/containers/templates/PostTemplate';
import { serverClient } from '../../lib/apollo';
import { gql } from '@apollo/client';

export default function Post({ insight }) {
  return (
    <Layout>
      <PostTemplate postData={insight} />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const GET_POST = gql`
  query GetPostByUri($id: ID!) {
    insight(id: $id, idType: URI) {
      title
      content
      excerpt
      id
      uri
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
  `

  const response = await serverClient.query({
    query: GET_POST,
    variables: {
      id: params.uri
    }
  })

  const insight = response?.data?.insight
  return {
    props: {
      insight
    }
  }
}

export async function getStaticPaths() {
  const paths = []
  return {
      paths,
      fallback: 'blocking'
  }
}