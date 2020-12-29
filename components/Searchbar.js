import { useState } from 'react';
import { Router, useRouter } from 'next/router';
import style from './Searchbar.module.scss';

const SearchBar = (props) => {
    const [query, setQuery] = useState('');
    const router = useRouter();

    const handleChange = (e) => {
        setQuery(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // window.location = `/search?query=${query}`;
        router.push(`/search?query=${query}`);
    }

    return (
        <form className={style.form} onSubmit={handleSubmit}>
            <input className={style.input} type="text" placeholder="Search for an item here!" onChange={handleChange}></input>
            <button className={style.button} type="submit">Submit</button>
        </form>
    )
}

export default SearchBar;