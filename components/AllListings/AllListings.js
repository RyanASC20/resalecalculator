import { useRouter } from 'next/router';
import Listing from '../Listing/Listing';
import Suggestions from '../Suggestions/Suggestions';

const createListing = (e, i) => {
    const title = e.title;
            const galleryURL = e.galleryURL[0];
            const viewItemURL = e.viewItemURL[0];
            const convertedCurrentPrice = e.sellingStatus[0].convertedCurrentPrice[0]['__value__'];
            let price;
            if (e.listingInfo[0].buyItNowAvailable[0] === 'true') price = e.listingInfo[0].buyItNowPrice[0]['__value__']
            else price = convertedCurrentPrice;
    
            const condition = e.condition ? e.condition[0].conditionDisplayName[0] : 'Unavailable';
    
    
            return [parseFloat(price), <Listing key={i} title={title} galleryURL={galleryURL} viewItemURL={viewItemURL} convertedCurrentPrice={price} condition={condition}/>];
}

const calcTarget = (mean, median) => Math.round(((median * 0.8) + (mean * 0.2)) * 100) /100;

const AllListings = (props) => {
    const router = useRouter();

    if (props.listings) {
        let prices = [];
        const listings = props.listings.map((e, i) => {
            const [p, l] = createListing(e, i);
            prices.push(p);
            return l;
        });
        const min = Math.min(...prices);
        const max = Math.max(...prices);
        const median = prices[Math.floor(prices.length/ 2)];
        const mean = Math.floor(prices.reduce((a, e) => a + e) / prices.length * 100) / 100;
        const targetPrice = calcTarget(mean, median);

        return (
            <div>
                <Suggestions query={ props.query } min={min} max={max} median={median} mean={mean} targetPrice={targetPrice}/>
                <h2>Ebay Listings Used:</h2>
                {listings}
            </div>
        );
    } else {
        router.push('/noResults');
        return null;
    }
}

export default AllListings;

