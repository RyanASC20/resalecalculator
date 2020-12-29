import style from './Suggestions.module.scss';

const Suggestions = ({ query, min, max, mean, median, targetPrice }) => {
    
    const targetClass=`${style.metric} ${style['target-sub']}`;
    return (
        <div className={style.container}>
            <h2>Results for "{query}":</h2>
            <div className={style['metrics-container']}>
                <div className={targetClass}><span className={style.price}>{ targetPrice }</span>Target</div>
                <div className={style.metric}><span className={style.price}>{ mean }</span>Average</div>
                <div className={style.metric}><span className={style.price}>{ median }</span>Median</div>
                <div className={style.metric}><span className={style.price}>{ min }</span>Lowest</div>
                <div className={style.metric}><span className={style.price}>{ max }</span>Highest</div>
            </div>
        </div>
    )
}

export default Suggestions;