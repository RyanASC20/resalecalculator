import { useRouter } from 'next/router';
import Listing from '../Listing/Listing';
import Suggestions from '../Suggestions/Suggestions';

const AllListings = (props) => {
    const router = useRouter();

    if (props.listings) {
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
    
            const condition = e.condition ? e.condition[0].conditionDisplayName[0] : 'Unavailable';
    
    
            return <Listing key={i} title={title} galleryURL={galleryURL} viewItemURL={viewItemURL} convertedCurrentPrice={price} condition={condition}/>
        });
        const min = Math.min(...prices);
        const max = Math.max(...prices);
        const median = prices[Math.floor(prices.length/ 2)];
        const mean = Math.floor(prices.reduce((a, e) => a + e) / prices.length * 100) / 100;
        const targetPrice = Math.floor((mean + median) * 100 / 2) / 100;

        return (
            <div>
                <Suggestions min={min} max={max} median={median} mean={mean} targetPrice={targetPrice}/>
                {listings}
            </div>
        );
    } else {
        router.push('/noResults');
        return null;
    }
}

export default AllListings;

