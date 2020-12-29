import style from './Listing.module.scss';

const Listing = ({title, galleryURL, viewItemURL, convertedCurrentPrice, condition}) => {
    return (
        <a href={viewItemURL} target="_blank" className={style.item}>
            <div className={style['img-container']}>
                <img src={galleryURL} alt={title}/>
            </div>
            <div className={style.details}>
                <h2>{title}</h2>
                <p className={style.price}>${convertedCurrentPrice}</p>
                <p>Condition: {condition}</p>
            </div>
        </a>
    )
}

export default Listing;