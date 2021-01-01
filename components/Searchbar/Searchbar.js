import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import style from './Searchbar.module.scss';

const SearchBar = (props) => {
    const [query, setQuery] = useState('');
    const [isLoading, setLoading] = useState(false);
    const router = useRouter();


    const handleChange = e => {
        setQuery(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (query.length <= 1) router.push(`/noResults?query=${query}`);
        else {
            router.push(`/resale-value-calculator-search?query=${query}`);
        }
    }

    return (
        <div className={style.search}>
            <h1>Search for an item to see its resale value!</h1>
            <form name="search"  onSubmit={handleSubmit}>
                <input className={style.input} type="text" placeholder="Search:" onChange={handleChange}></input>
                <button className={style.button} type="submit">Submit</button>
                {isLoading && <div className={ style.loader }></div> }
            </form>
        </div>
    )
}

export default SearchBar;