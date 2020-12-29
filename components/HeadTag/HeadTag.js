import Head from 'next/head';

const HeadTag = ({ title }) => {
    return (
        <Head>
            <title>Cycle Ebay Resale Value Calculator | { title }</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Calculator to determine the resale value of items and products to be sold, particularly on Ebay. Cycle Ebay Resale Value Calculator uses listings from Ebay to calculate an approximate target for the resale value of user-requested items."></meta>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&family=Source+Sans+Pro:wght@200;300;400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons"rel="stylesheet"></link>
            <link rel="icon" href="/undraw_wallet.svg"></link>
        </Head>
    );
}

export default HeadTag;