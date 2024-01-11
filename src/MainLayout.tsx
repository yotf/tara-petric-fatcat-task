import PageGenerator from './components/PageGenerator';
import { LayoutSection } from './types';

const layoutSpec: LayoutSection[] = [
    {
        type: 'layoutSection',
        props: { className: 'bg-gray-100 bg-red' },
        components: [
            {
                type: 'componentHero',
                props: {
                    title: 'Welcome to the Jungle',
                    image: '/media/hero.png',
                },
            },
        ],
    },
    {
        type: 'layoutSection',
        props: { className: 'bg-gray-200 mt-10 flex flex-col gap-10 ' },
        components: [
            {
                type: 'componentItemsShowcase',
                props: {
                    items: [
                        { title: 'Product 1', description: 'Lorem Ipsum' },
                        { title: 'Product 2', description: 'Dolor Sit' },
                        {
                            title: 'Product 3',
                            description: 'Amit Consectetur',
                        },
                        {
                            title: 'Product 4',
                            description: 'Adipiscing Elit',
                        },
                    ],
                },
            },
            {
                type: 'componentTrustBar',
                props: {
                    images: [
                        '/media/cats/cat_1.png',
                        '/media/cats/cat_2.png',
                        '/media/cats/cat_3.png',
                        '/media/cats/cat_4.png',
                        '/media/cats/cat_5.png',
                        '/media/cats/cat_6.png',
                        '/media/cats/cat_7.png',
                        '/media/cats/cat_8.png',
                        '/media/cats/cat_9.png',
                        '/media/cats/cat_10.png',
                    ],
                },
            },
        ],
    },
];

const Layout = () => {
    return (
        <>
            <PageGenerator layoutSpec={layoutSpec} />
        </>
    );
};

export default Layout;
