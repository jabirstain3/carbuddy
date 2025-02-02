
import { useEffect, useState } from 'react';

const getSystemTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

const ThemeProvider: React.FC = () => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme || 'system'; 
    });

    useEffect(() => {
        const root = document.documentElement;

        if (theme === 'system') {
            const systemTheme = getSystemTheme();
            root.classList.toggle('dark', systemTheme === 'dark');
        } 
        else {
            root.classList.toggle('dark', theme === 'dark');
        }

        if (theme !== 'system') {
            localStorage.setItem('theme', theme);
        }
    }, [theme]);

    return (
        <div className="dropdown dropdown-bottom dropdown-end p-0 rounded-full">
            <div tabIndex={0} role='button' className="btn p-3 bg-basel dark:bg-based  border rounded-full border-based dark:border-basel hover:bg-scnd dark:hover:bg-scnd ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 hidden text-basel dark:inline text-base">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg>  
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 dark:hidden">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>

            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-acn rounded-box z-[1] w-36 p-2 shadow">
                <li onClick={() => setTheme('light')}><a className="hover:bg-scnd hover:text-based active:text-scnd">Light</a></li>
                <li onClick={() => setTheme('dark')}><a  className="hover:bg-scnd hover:text-based active:text-scnd">Dark</a></li>
                <li onClick={() => setTheme('system')}><a className="hover:bg-scnd hover:text-based active:text-scnd">System</a></li>
            </ul>
        </div>
    );
}

export default ThemeProvider;
