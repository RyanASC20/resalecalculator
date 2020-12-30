import Head from 'next/head';

const HeadTag = ({ title }) => {
    return (
        <Head>
            <title>{ title } | Free Ebay Resale Value Calculator | Cycle</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="The Cycle resale value calculator instantly reports the value of the item you want to sell on Ebay based on prices of other Ebay for-sale listings."></meta>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&family=Source+Sans+Pro:wght@200;300;400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons"rel="stylesheet"></link>
            <link rel="icon" href="/undraw_wallet.svg"></link>
        </Head>
    );
}

export default HeadTag;