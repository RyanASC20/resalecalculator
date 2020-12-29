import Navbar from '../components/Navbar';
import Directions from '../components/Directions';
import Searchbar from '../components/Searchbar';
import HeadTag from '../components/Head';

const Index = () => {
    return (
        <div>
            <HeadTag />
            <Navbar />
            <div className="content">
                <div>
                    <Directions />
                    <Searchbar />
                </div>
                <img className="illustration" src='/undraw_wallet.svg' alt="Resale Calculator"></img>
            </div>
        </div>
    )
}

export default Index;