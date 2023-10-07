import Layout from '../../components/layout/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import PostTemplate from '../../components/containers/templates/PostTemplate';

export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const postData = await getPostData(params.id);

    return {
        props: {
          postData,
        },
    };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {

  return (
    <Layout>
      <PostTemplate postData={postData} />
    </Layout>
  );
}