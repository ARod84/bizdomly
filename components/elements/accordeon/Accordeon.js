import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import styles from './Accordeon.module.scss'
import parse from 'html-react-parser'

const Accordeon = ({content}) => {
  const [openItem, setOpenItem] = useState(null);
  const [mounted, setMounted] = useState();
  const {theme} = useTheme();

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const handleClick = (itemId) => {
    if (openItem === itemId) {
      setOpenItem(null)
    } else {
      setOpenItem(itemId)
    }
  }

  const items = [
    { id: 1, title: content?.module1, content: content?.module1Content },
    { id: 2, title: content?.module2, content: content?.module2Content },
    { id: 3, title: content?.module3, content: content?.module3Content },
    { id: 4, title: content?.module4, content: content?.module4Content },
    { id: 5, title: content?.module5, content: content?.module5Content },
  ]


  return (
    <ul className={`${styles.accordeon_modules__items} ${theme === 'dark' ? styles.dark : styles.light}`}>
      {items.map((item) => (
        <li className={styles.accordeon_modules__item} key={item.id}>
          <div
            onClick={() => handleClick(item.id)}>
            <h3>{item.title ? item.title : ''}</h3>
            {openItem === item.id && 
            <div className={styles.accordeon_modules__itemContent}>
              { item.content ? parse(item.content) : 'N/A'}
            </div>}
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Accordeon