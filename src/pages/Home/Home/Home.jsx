import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import ChefService from "../ChefService/ChefServices";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import RecommendMenu from "../RecommendMenu/RecommendMenu";
import Testimonials from "../Testimonials/Testimonials";
import DynamicTitle from "../../../components/DynamicTitle/DynamicTitle";

const Home = () => {
    return (
        <>
            <DynamicTitle>
                Home
            </DynamicTitle>
            <Banner />
            <Category />
            <ChefService />
            <PopularMenu />
            <CallUs />
            <RecommendMenu />
            <Featured />
            <Testimonials />
        </>
    );
};

export default Home;