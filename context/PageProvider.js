import { useState, useEffect } from 'react';
import { ThemeProvider, useTheme } from 'next-themes';

const PageProvider = ({ children }) => {
  const { resolvedTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState('dark');

useEffect(() => {
    resolvedTheme === 'light'
      ? setCurrentTheme('light')
      : setCurrentTheme('dark');
  }, [resolvedTheme]);
  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>;
};

export default PageProvider;
