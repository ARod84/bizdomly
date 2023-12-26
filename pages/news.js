import Head from 'next/head';
import Layout from '../components/layout/Layout';
import Link from 'next/link';
import parse from 'html-react-parser';
import Image from 'next/image';
// Responsive resources
import { useMediaQuery } from 'react-responsive'
import { device } from '../utils/mediaqueries'
import { client } from '../lib/apollo';
import { gql } from '@apollo/client';
import styles from '../styles/Pages.module.scss';
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";

export async function getStaticProps() {
  const GET_ALL_POSTS = gql`
    query GetAllPosts {
      posts(first: 10) {
        nodes {
          content
          date
          excerpt
          title
          slug
          id
          uri
          featuredImage {
            node {
              sourceUrl,
              altText
            }
          }
          categories {
            nodes {
              name
            }
          }
        }
      }
    }
  `

  const responseAllPosts = await client.query({
    query: GET_ALL_POSTS
  })
  const allPosts = responseAllPosts?.data?.posts?.nodes

  return {
    props: {
      allPosts,
    }
  }
}

const news = ({ allPosts }) => {
  // Media queries and devices
  const isLaptop = useMediaQuery({ query: device.laptop })

  function excerpt(exc, ln) {
    let re = parse(exc.substring(0, ln))
    let rex = `${re?.props?.children}...`
    return <p>{rex}</p>
  }

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <FontAwesomeIcon 
        icon={faAngleUp} 
        onClick={onClick}
        className={styles.next}
      />
    );
  }
    
  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <FontAwesomeIcon 
        icon={faAngleDown} 
        onClick={onClick}
        className={styles.prev}
      />
    );
  }
    
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    vertical: true,
    verticalSwiping: true,
    centerMode: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
    ]
  };

  return (
    <>
    <Head>
        <title>Bizdomly Insights</title>
    </Head>
    <Layout>
        <section className={styles.page_wrapper}>
            {isLaptop &&
            <Slider {...settings} className={styles.bizslider}>
              {allPosts.map((ins, index) => (
                index < 6 && 
                  <Link key={`/news/${ins.uri}`}
                    className={styles.slide_content}
                    href={ins.uri}>
                    <Image 
                      src={`${ins.featuredImage ? ins.featuredImage.node.sourceUrl : '/images/mano-tengo-fe.jpg'}`}
                      width={200}
                      height={150}
                      alt={`${ins.featuredImage ? ins.featuredImage.node.altText : ''}`}
                      priority
                    />
                    <h3>{ins.title} {ins.categories.nodes[0] ? <span>{ins.categories.nodes[0].name}</span> : ''}</h3>
                  </Link>
              ))}
            </Slider>}
            <div className={styles.article_listing}>
                {allPosts.map((ins, index) => (
                  index === 0 && 
                  <Link  className={styles.main_article} key={ins.id} href={`/news/${ins.uri}`}>
                    <div className={styles.overlay}></div>
                    {isLaptop ? (
                      <Image
                        src={`${ins.featuredImage ? ins.featuredImage.node.sourceUrl : '/images/mano-tengo-fe.jpg'}`}
                        alt={`${ins.featuredImage ? ins.featuredImage.node.altText : ''}`}
                        fill={true}
                      /> 
                    ):( 
                      <Image
                        src={`${ins.featuredImage ? ins.featuredImage.node.sourceUrl : '/images/mano-tengo-fe.jpg'}`}
                        alt={`${ins.featuredImage ? ins.featuredImage.node.altText : ''}`}
                        width='620'
                        height='400'
                      /> 
                    )}
                    <h3>
                      {ins.title} {ins.categories.nodes[0] ? 
                        <span className={styles.cat_tag}>
                          {ins.categories.nodes[0].name}
                        </span> 
                      : 
                        ''}
                    </h3>
                    {isLaptop ?  excerpt(ins.excerpt, 250) : excerpt(ins.excerpt, 140)}
                  </Link>
                ))}
                {allPosts.map((ins, index) => (
                  index === 1 && 
                  <Link href={`/news/${ins.uri}`} className={styles.fst_article} key={ins.id}>
                    <div className={styles.overlay}></div>
                    {isLaptop ? (
                      <Image
                        src={`${ins.featuredImage ? ins.featuredImage.node.sourceUrl : '/images/mano-tengo-fe.jpg'}`}
                        fill={true}
                      />
                    ):(
                      <Image
                        src={`${ins.featuredImage ? ins.featuredImage.node.sourceUrl : '/images/mano-tengo-fe.jpg'}`}
                        width='200'
                        height='189'
                      />)}
                    <h3>
                      {ins.title} {ins.categories.nodes[0] ? 
                        <span className={styles.cat_tag}>
                          {ins.categories.nodes[0].name}
                        </span> 
                      : 
                        ''}
                    </h3>
                  </Link>
                ))}
                {allPosts.map((ins, index) => (
                  index === 2 && 
                  <Link href={`/news/${ins.uri}`} className={styles.scnd_article} key={ins.id}>
                    <div className={styles.overlay}></div>
                    {isLaptop ? (
                      <Image
                        src={`${ins.featuredImage ? ins.featuredImage.node.sourceUrl : '/images/mano-tengo-fe.jpg'}`}
                        fill={true}
                      />
                    ):(
                      <Image
                        src={`${ins.featuredImage ? ins.featuredImage.node.sourceUrl : '/images/mano-tengo-fe.jpg'}`}
                        width='200'
                        height='189'
                      />
                    )}
                    <h3>
                      {ins.title} {ins.categories.nodes[0] ? 
                        <span className={styles.cat_tag}>
                          {ins.categories.nodes[0].name}
                        </span> 
                      : 
                ''}
                    </h3>
                  </Link>
                ))}
                {allPosts.map((ins, index) => (
                  index === 3 && 
                  <Link href={`/news/${ins.uri}`} className={styles.thrd_article} key={ins.id}>
                    <div className={styles.overlay}></div>
                    {isLaptop ? (
                      <Image
                        src={`${ins.featuredImage ? ins.featuredImage.node.sourceUrl : '/images/mano-tengo-fe.jpg'}`}
                        fill={true}
                      />
                    ):(
                      <Image
                        src={`${ins.featuredImage ? ins.featuredImage.node.sourceUrl : '/images/mano-tengo-fe.jpg'}`}
                        width='200'
                        height='189'
                      />
                    )}
                    <h3>
                      {ins.title} {ins.categories.nodes[0] ? 
                        <span className={styles.cat_tag}>
                          {ins.categories.nodes[0].name}
                        </span> 
                      : 
                ''}
                    </h3>
                  </Link>
                ))}
                {allPosts.map((ins, index) => (
                  index === 4 && 
                  <Link href={`/news/${ins.uri}`} className={styles.frth_article} key={ins.id}>
                    <div className={styles.overlay}></div>
                    {isLaptop ? (
                      <Image
                        src={`${ins.featuredImage ? ins.featuredImage.node.sourceUrl : '/images/mano-tengo-fe.jpg'}`}
                        fill={true}
                      />
                    ):(
                      <Image
                        src={`${ins.featuredImage ? ins.featuredImage.node.sourceUrl : '/images/mano-tengo-fe.jpg'}`}
                        width='200'
                        height='189'
                      />
                    )}
                    <h3>
                      {ins.title} {ins.categories.nodes[0] ? 
                        <span className={styles.cat_tag}>
                          {ins.categories.nodes[0].name}
                        </span> 
                      : 
                      ''}
                    </h3>
                  </Link>
                ))}
                {allPosts.map((ins, index) => (
                  index === 5 && 
                  <Link href={`/news/${ins.uri}`} className={styles.fth_article} key={ins.id}>
                    <div className={styles.overlay}></div>
                    {isLaptop ? (
                    <Image
                      src={`${ins.featuredImage ? ins.featuredImage.node.sourceUrl : '/images/mano-tengo-fe.jpg'}`}
                      fill={true}
                    /> 
                    ):(
                    <Image
                      src={`${ins.featuredImage ? ins.featuredImage.node.sourceUrl : '/images/mano-tengo-fe.jpg'}`}
                      width='620'
                      height='189'
                    />
                    )}
                    <h3>
                      {ins.title} {ins.categories.nodes[0] ? 
                        <span className={styles.cat_tag}>
                          {ins.categories.nodes[0].name}
                        </span> 
                      : 
                    ''}
                    </h3>
                  </Link>
                ))}
            </div>
        </section>
    </Layout>
    </>
  )
}

export default news;