import { useState, useEffect  } from 'react';

export default function ChangeTheme() {
    const [colorScheme, setColorScheme] = useState('');

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        if(localStorage.getItem("theme") === null) {
            localStorage.setItem("theme", mediaQuery.matches ? 'dark' : 'light')
        }
        setColorScheme(localStorage.getItem("theme") as string);
    
        const handleColorSchemeChange = (e: any) => {
          setColorScheme(e.matches ? 'dark' : 'light');
    
        };
    
        mediaQuery.addEventListener('change', handleColorSchemeChange);
    
        return () => {
          mediaQuery.removeEventListener('change', handleColorSchemeChange);
        };
      }, []);
      const toggleColorScheme = () => {
        setColorScheme((prevScheme) => (prevScheme === 'light' ? 'dark' : 'light'));
        localStorage.setItem("theme", colorScheme == 'light'  ? 'dark' : 'light')
      };
      useEffect(() => {
        document.documentElement.setAttribute('data-theme', colorScheme);
      }, [colorScheme]);

      return {
        colorScheme,
        setColorScheme,
        toggleColorScheme
      }
}