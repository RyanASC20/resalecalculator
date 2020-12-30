import style from './Suggestions.module.scss';
import Metrics from './Metrics';

const calcTarget = (mean, median, min) => Math.round(((median * 0.7) + (mean * 0.3)) * 100) /100;


const allData = (pricesByCondition) => {
    let prices = [];
    for (const i of Object.values(pricesByCondition)) prices = [...prices, ...i];
    console.log(prices);
    return prices;
}

const createMetric = (condition, prices, i) => {
    
    const topListing = prices[0];
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    const median = prices.sort()[Math.floor(prices.length/ 2)];
    const mean = Math.floor(prices.reduce((a, e) => a + e) / prices.length * 100) / 100;
    const targetPrice = calcTarget(mean, median, min, topListing);
    return <Metrics key={ i } numListings={ prices.length }condition={ condition } targetPrice={ targetPrice } mean={ mean } median={ median } max={ max } min={ min } />
}


const metricsMap = (pricesByCondition) => {
    let allMetrics = Object.entries(pricesByCondition).map((e, i) => {
        return createMetric(e[0], e[1], i + 1);
    });
    let generalMetrics = createMetric('All', allData(pricesByCondition), 0);

    return [generalMetrics, ...allMetrics];
}


const Suggestions = ({query, pricesByCondition}) => {
    const allMetrics = metricsMap(pricesByCondition);
    return (
        <div>
            <h2>Showing results for "{query}":</h2>
            { allMetrics }
        </div>
    );
}

export default Suggestions;