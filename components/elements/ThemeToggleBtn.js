import { useTheme } from '../../context/ThemeContext';
import styles from './TheToggleBtn.module.scss';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';

const ThemeToggleBtn = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button aria-label='toggle dark mode' className={styles.toggle_button}  onClick={toggleTheme}>
      {isDarkMode ? (
        <FontAwesomeIcon icon={faMoon} />
      ):(
        <FontAwesomeIcon icon={faSun} />
      )}
    </button>
  )
}

export default ThemeToggleBtn;