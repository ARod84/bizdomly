import InfoBox from '../../elements/infobox/InfoBox';
import styles from './BoxListing.module.scss';

const BoxListing = ({ content }) => {
  return (
    <div className={styles.boxlisting_wrapper}>
        {content.map((cr) => (
          (cr.courseACF.bundle === null) &&
            <InfoBox content={cr} />
        ))}
    </div>
  )
}

export default BoxListing;