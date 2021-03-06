import { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import AllListings from '../components/AllListings/AllListings';
import SearchBar from '../components/Searchbar/Searchbar';
import HeadTag from '../components/HeadTag/HeadTag';




const Search = ({ data, currentQuery }) => {

    try {
        return (
            <div>
                <HeadTag title={ currentQuery }/>
                <Navbar />
                <div className="content">
                    <div>
                        <SearchBar />
                        <AllListings query={ currentQuery } listings={ data.findItemsByKeywordsResponse[0].searchResult[0].item }/>
                    </div>
                </div>
            </div>
        )
    } catch(err) {
        console.log(err);
        return null;
    }
    
}


export async function getServerSideProps({query}) {
    const currentQuery = query.query;
    const res = await fetch(`https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=${process.env.EBAY_APP_ID}&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=${currentQuery}`, 
    );
    const data = await res.json()
    return { props: { data, currentQuery } }
}


export default Search;


