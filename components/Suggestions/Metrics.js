import style from './Suggestions.module.scss';

const Metrics = ({targetPrice, numListings, mean, median, min, max, condition}) => {
    const targetClass=`${style.metric} ${style['target-sub']}`;
    return (
        <div className={ style.container }>
            <h3>Condition: { condition } ({ numListings })</h3>
            <div className={ style['metrics-container'] }>
                <div className={ targetClass }><span className={style.price}>{ targetPrice }</span>Target</div>
                <div className={ style.metric }><span className={style.price}>{ mean }</span>Average</div>
                <div className={ style.metric }><span className={style.price}>{ median }</span>Median</div>
                <div className={ style.metric }><span className={style.price}>{ min }</span>Lowest</div>
                <div className={ style.metric }><span className={style.price}>{ max }</span>Highest</div>
            </div>
        </div>
    )
}

export default Metrics;