export const APP_CONFIG = {
    name: 'Meu App React',
    version: '1.0.0',
    api: {
        baseUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000',
        timeout: 5000,
    },
} as const; 