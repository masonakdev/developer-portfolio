import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [theme, setTheme] = useState<'light' | 'dark'>('dark');

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
    };

    return (
        <div className="min-h-screen bg-background text-foreground transition-colors duration-300 overflow-x-hidden">
            <header className="fixed top-0 right-0 p-4 z-50">
                <div className="relative group">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleTheme}
                        className="rounded-full"
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? (
                            <Sun className="h-5 w-5" />
                        ) : (
                            <Moon className="h-5 w-5" />
                        )}
                    </Button>
                    <span className="absolute right-full top-1/2 -translate-y-1/2 mr-2 px-2 py-1 bg-popover text-popover-foreground text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border">
                        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                    </span>
                </div>
            </header>
            <main className="container mx-auto px-4 py-16 max-w-4xl">
                {children}
            </main>
        </div>
    );
};

export default Layout;
