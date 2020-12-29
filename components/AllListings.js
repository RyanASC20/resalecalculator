import { useEffect, useState } from 'react';
import Listing from './Listing';
import Suggestions from './Suggestions';

const AllListings = (props) => {

    let prices = [];
    const listings = props.listings.map((e, i) => {
        const title = e.title;
        const galleryURL = e.galleryURL[0];
        const viewItemURL = e.viewItemURL[0];
        const convertedCurrentPrice = e.sellingStatus[0].convertedCurrentPrice[0]['__value__'];
        let price;
        if (e.listingInfo[0].buyItNowAvailable[0] === 'true') price = e.listingInfo[0].buyItNowPrice[0]['__value__']
        else price = convertedCurrentPrice;
        prices.push(parseFloat(price));

        const condition = e.condition[0].conditionDisplayName[0];


        return <Listing key={i} title={title} galleryURL={galleryURL} viewItemURL={viewItemURL} convertedCurrentPrice={price} condition={condition}/>
    });

    const min = Math.min(...prices);
    const max = Math.max(...prices);
    const median = prices[prices.length/ 2];
    const mean = Math.floor(prices.reduce((a, e) => a + e) / prices.length * 100) / 100;
    const targetPrice = Math.floor((mean + median) * 100 / 2) / 100;


    return (
        <div>
            <Suggestions min={min} max={max} median={median} mean={mean} targetPrice={targetPrice}/>
            {listings}
        </div>
    )
}

export default AllListings;

