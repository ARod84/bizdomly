import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes'
import styles from './TheToggleBtn.module.scss';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';

const ThemeToggleBtn = () => {
  const [mounted, setMounted] = useState();
  const { theme, resolvedTheme, setTheme } = useTheme('dark');

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button 
      aria-label='toggle dark mode'
      className={`${styles.toggle_button} 
      ${theme === 'dark' ? styles.dark : styles.light}`} 
      onClick={toggleTheme}>
      {theme === 'dark' ? (
        <FontAwesomeIcon icon={faSun} />
      ):(
        <FontAwesomeIcon icon={faMoon} />
      )}
    </button>
  )
}

export default ThemeToggleBtn;