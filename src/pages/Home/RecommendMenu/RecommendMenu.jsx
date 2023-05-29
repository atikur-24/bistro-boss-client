import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import FoodCard from "../../Shared/FoodCard/FoodCard";

const RecommendMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect( () => {
        fetch('menu.json')
         .then(res => res.json())
         .then(data => {
            const recommendItem = data.filter(item => item.category === 'salad')
            setMenu(recommendItem.slice(0, 3))
         })
    }, [])

    return (
        <section className="mb-32">
            <SectionTitle subHeading={"Should Try"} heading={"chef recommends"} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                {
                    menu.map(item => <FoodCard key={item._id} item={item} />)
                }
            </div>
        </section>
    );
};

export default RecommendMenu;