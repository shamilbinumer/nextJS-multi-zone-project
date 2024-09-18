export default {
    async rewrites() {
        return [
            {
                source: '/shop/:product_id*',
                destination: 'http://localhost:3001/:product_id*',
            },
            {
                source: '/blog',
                destination: 'http://localhost:3002', 
            },
            {
                source: '/shop',
                destination: 'http://localhost:3001', 
            }
        ];
    }
};
