import SectionTitle from "../../../components/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import OutlineButton from "../../../components/OutlineButton";
import useMenu from "../../../hooks/useMenu/useMenu";
import Progress from "../../../components/Progress";

const PopularMenu = () => {
    const [menu, loading] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');

    return (
        <section className="mb-32">
            <SectionTitle heading="from our menu" subHeading="Popular Items"  />
            { loading && <Progress /> }
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-12">
                {
                    popular.map(item=> <MenuItems key={item._id} item={item} />)
                }
            </div>
            <div className="text-center">
                <OutlineButton>View Full Menu</OutlineButton>
            </div>
        </section>
    );
};

export default PopularMenu;