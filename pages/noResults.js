import Head from 'next/head';
import HeadTag from '../components/HeadTag/HeadTag';
import Navbar from '../components/Navbar/Navbar';

const noResults = () =>{
    return (
        <div>
            <HeadTag title="No results found!"/>
            <Navbar />
            <div className="content">
                <div>
                    <h1>Uh oh! An error occured!</h1>
                    <p>No results matched your search. Please make sure you are typing in the desired product correctly!</p>
                </div>
                <img src="/undraw_page_not_found_su7k.svg" alt="Resale value calculator page not found"></img>
            </div>
        </div>
    )
}

export default noResults;