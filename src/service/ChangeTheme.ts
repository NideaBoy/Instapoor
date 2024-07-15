import { useEffect  } from 'react';
import { useColoMenu } from '@/store/theme';
 
export default function ChangeTheme() {
    const {colorScheme, setColor, toggleColor}=useColoMenu()
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        if(localStorage.getItem("theme") === null) {
            localStorage.setItem("theme", mediaQuery.matches ? 'dark' : 'light')
        }
        setColor(localStorage.getItem("theme") as string);
    
        const handleColorSchemeChange = (e: any) => {
          setColor(e.matches ? 'dark' : 'light');
    
        };
    
        mediaQuery.addEventListener('change', handleColorSchemeChange);
    
        return () => {
          mediaQuery.removeEventListener('change', handleColorSchemeChange);
        };
      }, []);
      const toggleColorScheme = () => {
        toggleColor()
        localStorage.setItem("theme", colorScheme == 'light'  ? 'dark' : 'light')
      };
      useEffect(() => {
        document.documentElement.setAttribute('data-theme', colorScheme);
      }, [colorScheme]);

      return {
        colorScheme,
        toggleColorScheme
      }
}