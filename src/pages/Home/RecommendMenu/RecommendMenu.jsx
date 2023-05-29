import SectionTitle from "../../../components/SectionTitle";
import FoodCard from "../../Shared/FoodCard/FoodCard";
import useMenu from "../../../hooks/useMenu/useMenu";
import Progress from "../../../components/Progress";

const RecommendMenu = () => {
    const [menu, loading] = useMenu();
    const recommendItem = menu.filter(item => item.category === 'salad');

    return (
        <section className="mb-32">
            <SectionTitle subHeading={"Should Try"} heading={"chef recommends"} />
                { loading && <Progress /> }
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                {
                    recommendItem.slice(0, 3).map(item => <FoodCard key={item._id} item={item} />)
                }
            </div>
        </section>
    );
};

export default RecommendMenu;