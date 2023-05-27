import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import ChefService from "../ChefService/ChefServices";
import PopularMenu from "../PopularMenu/PopularMenu";
import RecommendMenu from "../RecommendMenu/RecommendMenu";

const Home = () => {
    return (
        <>
            <Banner />
            <Category />
            <ChefService />
            <PopularMenu />
            <CallUs />
            <RecommendMenu />
        </>
    );
};

export default Home;