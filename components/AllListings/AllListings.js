import { useRouter } from 'next/router';
import Listing from '../Listing/Listing';
import Suggestions from '../Suggestions/Suggestions';


const isCombo = (str) => {
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


    return [parseFloat(price), condition, <Listing key={i} title={title} galleryURL={galleryURL} viewItemURL={viewItemURL} convertedCurrentPrice={price} condition={condition}/>];
}



const AllListings = (props) => {

    const MAX_NUM_LISTINGS = 25
    const router = useRouter();

    if (props.listings) {
        let pricesByCondition = {}
        let combo = isCombo(props.query);
        const listings = props.listings.slice(0, MAX_NUM_LISTINGS).map((e, i) => {
            const [p, c, l] = createListing(e, i, combo);
            if (p != null) {
                if (pricesByCondition[c]) pricesByCondition[c].push(p);
                else pricesByCondition[c] = [p];
            }
            return l;
        });
        

        return (
            <div>
                <Suggestions query={ props.query } pricesByCondition={pricesByCondition}/>
                <h2>Ebay Listings Used:</h2>
                {listings}
            </div>
        );
    } else {
        router.push(`/noResults?query=${props.query}`);
        return null;
    }
}

export default AllListings;

