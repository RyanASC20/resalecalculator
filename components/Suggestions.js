import style from './Suggestions.module.scss';

const Suggestions = ({ min, max, mean, median, targetPrice }) => {
    
    return (
        <div className={style.container}>
            <div>
                <p>Average price: <span className={style.price}>${ mean }</span></p>
                <p>Median Price: <span className={style.price}>${ median }</span></p>
                <p>Lowest Offer: <span className={style.price}>${ min }</span></p>
                <p>Highest Offer: <span className={style.price}>${ max }</span></p>
                <p><h2>TARGET SELLING PRICE:</h2><span className={style.price}>${ targetPrice }</span></p>
            </div>
            <img src="/undraw_Online_information_re_erks.svg" alt="resale value calculator details"></img>
        </div>
    )
}

export default Suggestions;