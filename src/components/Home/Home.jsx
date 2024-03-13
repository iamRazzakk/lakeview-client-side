import { Helmet } from "react-helmet-async";
import AboutTheBuilding from "./AboutTheBuilding";
import AppartmentLocation from "./AppartmentLocation";
import Cupon from "./Cupon";
import Header from "./Header";
import CountUpSection from "./CountUpSection";
import AboutTheCloudService from "./AboutTheCloudService";
import Project from "./Project";
import ApartmentsPlans from "./ApartmentsPlans";


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
            <CountUpSection></CountUpSection>
            <AboutTheCloudService></AboutTheCloudService>
            <Cupon></Cupon>
            <Project></Project>
            <ApartmentsPlans></ApartmentsPlans>
            <AppartmentLocation></AppartmentLocation>
        </div>
    );
};

export default Home;