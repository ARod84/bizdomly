import styles from './BoxListing.module.scss';

const BoxListing = ({ content }) => {
  return (
    <div className={styles.boxlisting_wrapper}>
        {content.map((cr) => (
          (cr.courseACF.bundle === null) &&
            <article className={styles.listing_box} key={cr.id}>
              {cr.title}
            </article>
        ))}
    </div>
  )
}

export default BoxListing;