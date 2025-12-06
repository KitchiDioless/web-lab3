export const routes = [
    {
        path: '/',
        component: 'promo-page'
    },
    {
        path: '/catalog',
        component: 'catalog-page'
    },
    {
        path: '/blog',
        component: 'blog-page'
    },
    {
        path: '/about',
        component: 'about-page'
    },
    {
        path: '(.*)',
        component: 'promo-page'
    }
];

