import Navbar from '../components/Navbar/Navbar';
import Directions from '../components/Directions/Directions';
import Searchbar from '../components/Searchbar/Searchbar';
import HeadTag from '../components/HeadTag/HeadTag';

const Index = () => {
    return (
        <div>
            <HeadTag title="Home"/>
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