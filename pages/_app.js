import '../styles/global.scss';
import NextNprogress from 'nextjs-progressbar'; 


function MyApp({ Component, pageProps }) {
    return (
        <div>
            <NextNprogress
                color="#78AD61"
                startPosition={0.3}
                stopDelayMs={0}
                height="4"
            />
            <Component {...pageProps} />
        </div>
    )
}

export default MyApp
