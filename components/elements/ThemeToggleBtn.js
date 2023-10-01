import { useTheme } from 'next-themes'
import styles from './TheToggleBtn.module.scss';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';

const ThemeToggleBtn = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {

    setTheme('dark')
  }

  return (
    <button 
      aria-label='toggle dark mode'
      className={`${styles.toggle_button} 
      ${theme ? styles.dark : styles.light}`} 
      onClick={toggleTheme}>
      {theme ? (
        <FontAwesomeIcon icon={faMoon} />
      ):(
        <FontAwesomeIcon icon={faSun} />
      )}
    </button>
  )
}

export default ThemeToggleBtn;