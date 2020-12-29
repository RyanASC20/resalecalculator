import Head from 'next/head';

const HeadTag = ({ title }) => {
    return (
        <Head>
            <title>Resale Calculator | { title }</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Calculator to determine the resale value of items and products. Resale Value Calculator uses listings from Ebay to determine the resale value of user-requested items."></meta>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Source+Sans+Pro:wght@200;300;400;700&display=swap" rel="stylesheet" />
        </Head>
    )
}

export default HeadTag;