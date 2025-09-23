import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Business Wish - Tailwind CSS UI Components & Developer Tools',
        short_name: 'Business Wish',
        description: 'Free, high-quality Tailwind CSS UI components and 17+ developer tools for web developers. Copy-paste ready components with dark mode support.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        orientation: 'portrait-primary',
        categories: ['productivity', 'developer', 'utilities'],
        lang: 'en',
        dir: 'ltr',
        icons: [
            {
                src: '/logo.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'maskable'
            },
            {
                src: '/logo.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any'
            },
            {
                src: '/logo.webp',
                sizes: '192x192',
                type: 'image/webp',
                purpose: 'any'
            }
        ],
        screenshots: [
            {
                src: '/home.png',
                sizes: '1200x630',
                type: 'image/png'
            },
            {
                src: '/components-page.png',
                sizes: '1200x630',
                type: 'image/png'
            }
        ],
        shortcuts: [
            {
                name: 'Components',
                short_name: 'Components',
                description: 'Browse UI components',
                url: '/docs/components',
                icons: [{ src: '/logo.png', sizes: '96x96' }]
            },
            {
                name: 'Developer Tools',
                short_name: 'Tools',
                description: 'Access developer utilities',
                url: '/tools',
                icons: [{ src: '/logo.png', sizes: '96x96' }]
            },
            {
                name: 'Documentation',
                short_name: 'Docs',
                description: 'Read documentation',
                url: '/docs',
                icons: [{ src: '/logo.png', sizes: '96x96' }]
            }
        ]
    }
}