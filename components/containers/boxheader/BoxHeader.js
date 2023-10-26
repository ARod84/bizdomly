import PriceBox from '../../elements/pricebox/PriceBox';
import styles from './BoxHeader.module.scss';

const BoxHeader = ({ feat }) => {

  return (
    <div className={styles.boxheader_wrapper}>
        {feat.map((f, index) => (
            (f.courseACF?.bundle === true && index === 0) && 
              <PriceBox content={f} key={f.id} />
            ||
            (f.courseACF?.bundle === true && index === 1) && 
              <PriceBox content={f} key={f.id} />
            ))}
    </div>
  )
}

export default BoxHeader;