import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import OutlineButton from "../../../components/OutlineButton";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect( () => {
        fetch('menu.json')
         .then(res => res.json())
         .then(data => {
            const popularItem = data.filter(item=> item.category === 'popular');
            setMenu(popularItem);
         })
    }, [])

    return (
        <section className="mb-32">
            <SectionTitle heading="from our menu" subHeading="Popular Items"  />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-12">
                {
                    menu.map(item=> <MenuItems key={item._id} item={item} />)
                }
            </div>
            <div className="text-center">
                <OutlineButton>View Full Menu</OutlineButton>
            </div>
        </section>
    );
};

export default PopularMenu;