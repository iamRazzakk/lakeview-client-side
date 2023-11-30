import { Helmet } from "react-helmet-async";
import AboutTheBuilding from "./AboutTheBuilding";
import AppartmentLocation from "./AppartmentLocation";
import Cupon from "./Cupon";
import Header from "./Header";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Small Lakeview Cottage || Home
                </title>
            </Helmet>
            <Header></Header>
            <AboutTheBuilding></AboutTheBuilding>
            <Cupon></Cupon>
            <AppartmentLocation></AppartmentLocation>
        </div>
    );
};

export default Home;