import { useRouter } from 'next/router';
import Listing from '../Listing/Listing';
import Suggestions from '../Suggestions/Suggestions';


const isCombo = (str) => {
    // let omit = ['combo', 'bundle', 'plus', 'with', 'and', '+']
    const omit = ['combo', 'bundle', '+'];
    let combo;
    for (const o of omit) {
        combo ||= str.toLowerCase().indexOf(o) != -1
    }
    return combo;
}


const createListing = (e, i, combo) => {


    const title = e.title[0];
    if (!combo && isCombo(title)) return[null, null];

    const galleryURL = e.galleryURL ? e.galleryURL[0]: 'Unavailable';
    const viewItemURL = e.viewItemURL ? e.viewItemURL[0] : 'Unavailable';
    const convertedCurrentPrice = e.sellingStatus[0].convertedCurrentPrice[0]['__value__'];
    let price;
    if (e.listingInfo[0].buyItNowAvailable[0] === 'true') price = e.listingInfo[0].buyItNowPrice[0]['__value__']
    else price = convertedCurrentPrice;

    const condition = e.condition ? e.condition[0].conditionDisplayName[0] : 'Unavailable';


    return [parseFloat(price), <Listing key={i} title={title} galleryURL={galleryURL} viewItemURL={viewItemURL} convertedCurrentPrice={price} condition={condition}/>];
}

const getGeneralData = (prices) => {
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    const median = prices.sort()[Math.floor(prices.length/ 2)];
    const mean = Math.floor(prices.reduce((a, e) => a + e) / prices.length * 100) / 100;
    const targetPrice = calcTarget(mean, median);
    return [min, max, median, mean, targetPrice];
}



const calcTarget = (mean, median) => Math.round(((median * 0.8) + (mean * 0.2)) * 100) /100;

const AllListings = (props) => {
    const router = useRouter();

    if (props.listings) {
        let allPrices = [];
        let combo = isCombo(props.query);
        const listings = props.listings.slice(0, 11).map((e, i) => {
            const [p, l] = createListing(e, i, combo);
            if (p != null) allPrices.push(p);
            return l;
        });
        
        const [min, max, median, mean, targetPrice] = getGeneralData(allPrices);

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

