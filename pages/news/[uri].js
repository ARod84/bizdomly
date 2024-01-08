import Layout from '../../components/layout/Layout';
import PostTemplate from '../../components/containers/templates/PostTemplate';
import { serverClient } from '../../lib/apollo';
import { gql } from '@apollo/client';

export default function Post({ post }) {
  return (
    <Layout>
      <PostTemplate postData={post} />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const GET_POST = gql`
  query GetPostByUri($id: ID!) {
    post(id: $id, idType: URI) {
      title
      content
      excerpt
      databaseId
      uri
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
      author {
        node {
          avatar {
            url
          }
          firstName
          lastName
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

  const post = response?.data?.post
  return {
    props: {
      post
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