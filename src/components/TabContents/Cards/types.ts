export interface BaseCardProps {
    title: string;
    description: string;
    longDescription: string;
    tags: string[];
    lastUpdated: string;
    used: number;
    contentType: string;
    pagesNumber: number;
    onClick?: () => void;
} 