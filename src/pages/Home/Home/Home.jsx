import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import ChefService from "../ChefService/ChefServices";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
    return (
        <>
            <Banner />
            <Category />
            <ChefService />
            <PopularMenu />
            <CallUs />
        </>
    );
};

export default Home;