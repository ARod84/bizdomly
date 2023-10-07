import Date from '../../Date';
import styles from './PostTemplate.module.scss';
import Head from 'next/head';

const PostTemplate = ({ postData }) => {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className={styles.post_wrapper}>
        <h1 className={styles.headingXl}>{postData.title}</h1>
        <div className={styles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </>
  )
}

export default PostTemplate;