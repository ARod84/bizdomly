import Layout from '../../components/layout/Layout';
import LandingTemplate from '../../components/containers/templates/LandingTemplate';
import { client } from '../../lib/apollo';
import { gql } from '@apollo/client';
import AppHeader from '../../components/containers/header/AppHeader';
import AppFooter from '../../components/containers/footer/AppFooter';

export default function Course({ course }) {
  return (
    <>
    <AppHeader />
    <LandingTemplate postData={course} />
    <AppFooter />
    </>
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
        courseModules {
          module1
          module2
          module3
          module4
          module5
          module6
          module7
          module8
          module1Content
          module2Content
          module4Content
          module3Content
          module5Content
          module6Content
          module7Content
          module8Content
        }
      }
    }
  }
  `

  const response = await client.query({
    query: GET_COURSE,
    variables: {
      id: params.slug
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