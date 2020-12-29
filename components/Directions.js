import style from './Directions.module.scss';
const Directions = () => {
    return (
        <div className={style['directions-container']}>
            <h1 className={style["welcome-message"]}>Welcome to Resale Calculator!</h1>
            <h2 className={style["directions"]}>To start, search for an item. We use data from Ebay to calculate a suggested price that you should look for if you are buying, or a potential selling price if you are selling!</h2>
        </div>
    )
}

export default Directions;