import { ReactNode } from "react";

interface BaseComponentProps {
    className?: string;
    children?: ReactNode;
} 

export function Layout({ children }: BaseComponentProps) {
    return (
        <div className="app">
            <main className="app-main">{children}</main>
            <footer className="app-footer">
                <p>© {new Date().getFullYear()} NP Group Challenge. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
} 