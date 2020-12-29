import Navbar from '../components/Navbar/Navbar';
import Directions from '../components/Directions/Directions';
import Searchbar from '../components/Searchbar/Searchbar';
import HeadTag from '../components/HeadTag/HeadTag';

const Index = () => {
    return (
        <div>
            <HeadTag title="Get Approximate Resale Target Price for Used Items - Cycle"/>
            <Navbar />
            <div className="content">
                <div className="left">
                    <Directions />
                    <Searchbar />
                </div>
                <img className="illustration" src='/undraw_wallet.svg' alt="Resale Calculator"></img>
            </div>
        </div>
    )
}

export default Index;