import styles from './Quote.module.scss';
import { Limelight } from 'next/font/google';

const limelight = Limelight( { 
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap', 
});

const Quote = () => {
  return (
    <div className={styles.quote_wrapper}>
        <p className={`${styles.quote} ${limelight.className}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Quisque massa massa, sodales pellentesque sem quis, finibus congue massa. 
          Nullam id mollis ligula. Integer et pellentesque eros. Maecenas congue in 
          ipsum condimentum faucibus. Ut nec.</p>
    </div>
  )
}

export default Quote