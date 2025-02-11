import type { ReactNode } from "react";

interface BaseComponentProps {
    className?: string;
    children?: ReactNode;
} 

export default function MainLayout({ children }: BaseComponentProps) {
    return (
        <div className="app">
            <main className="app-main">{children}</main>
            <footer className="app-footer">
                <p>© {new Date().getFullYear()} NP Group Challenge. All rights reserved.</p>
            </footer>
        </div>
    );
} 