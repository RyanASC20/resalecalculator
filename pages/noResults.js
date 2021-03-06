import HeadTag from '../components/HeadTag/HeadTag';
import Navbar from '../components/Navbar/Navbar';
import SearchBar from '../components/Searchbar/Searchbar';
import { useRouter } from 'next/router';

const noResults = () =>{
    const router = useRouter();
    return (
        <div>
            <HeadTag title="No results found!"/>
            <Navbar />
            <div className="content">
                <div>
                    <h1>Uh oh! An error occured!</h1>
                    <h2>"{ router.query.query }"</h2>
                    <p>Did not have any matching results. Please make sure you are typing in the desired product correctly!</p>
                    <SearchBar />
                </div>
                <img className="illustration" src="/undraw_cancel_u1it.svg" alt="Resale value calculator page not found"></img>
            </div>
        </div>
    )
}

export default noResults;