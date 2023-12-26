import InfoBox from '../../elements/infobox/InfoBox'
import InfoBoxMobile from '../../elements/infobox/InfoBoxMobile.js'
import styles from './BoxListing.module.scss'
// Responsive resources
import { useMediaQuery } from 'react-responsive'
import { device } from '../../../utils/mediaqueries.js'

const BoxListing = ({ content }) => {
  // Media queries and devices
  const isTablet = useMediaQuery({ query: device.tablet })

  return (
    <div className={styles.boxlisting_wrapper}>
        {content.map((cr) => (
          (cr.courseACF.bundle === null) &&
            (isTablet ? (
              <InfoBox content={cr} /> 
            ):( 
              <InfoBoxMobile content={cr} />
            ))
        ))}
    </div>
  )
}

export default BoxListing;