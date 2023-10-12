import Image from 'next/image';
import styles from './Author.module.scss';

const Author = ({ author }) => {
  return (
    <div className={styles.author_wrapper}>
        <div className={styles.author_text}>
            <p>{`${author?.node.firstName} ${author?.node.lastName}`}</p>
            <small>Targaryen chad, problem maker and dragon rider</small>
        </div>
        <Image 
          src='/images/mano-tengo-fe.jpg' 
          width='50' 
          height='50'
          alt={`picture of ${author?.node.firstName} ${author?.node.lastName}`}
          className={styles.avatar} 
        />
    </div>
  )
}

export default Author;