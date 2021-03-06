import style from './Directions.module.scss';
const Directions = () => {
    return (
        <div className={style['directions-container']}>
            <h1 className={style["welcome-message"]}>Welcome to the Cycle Resale Value Calculator!</h1>
            <h2 className={style["directions"]}>
                This calculator will give a rough approximate of a searched item's resale value.
                Listings straight from Ebay are used to calculate a suggested price that you should aim to pay if you are buying
                or a potential selling price if you are selling!
                The target resale price is an estimated desirable pricepoint where your item is likely to be purchased. It is calculated using
                the top 10 Ebay listings of items matching the keywords that were searched for.
                Disclaimer: Displayed target prices should not be solely relied on to determine prices and should be used as a <b>reference</b>.
            </h2>
        </div>
    )
}

export default Directions;