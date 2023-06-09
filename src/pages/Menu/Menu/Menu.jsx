import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';
import SectionTitle from '../../../components/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import DynamicTitle from '../../../components/DynamicTitle/DynamicTitle';
import useMenu from '../../../hooks/useMenu';

const Menu = () => {
    const [ menu, loading ] = useMenu();
    const offers = menu.filter( item => item.category === 'offered' );
    const desserts = menu.filter( item => item.category === 'dessert' );
    const pizzas = menu.filter( item => item.category === 'pizza' );
    const salads = menu.filter( item => item.category === 'salad' );
    const soups = menu.filter( item => item.category === 'soup' );

    // content of food item
    const dessertContent = 'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    const pizzaContent = 'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    const saladContent = 'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    const soupContent = 'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'

    return (
        <section className='space-y-12 mb-12'>
            <DynamicTitle>
                Menu
            </DynamicTitle>
            <div>
                <Cover img={menuImg} title={"our menu"} content={'WOULD YOU LIKE TO TRY DISH'} />
            </div>
            <div className=' mx-12 lg:mx-28'>
                <SectionTitle heading="today's offer" subHeading="Don't miss" />
                <MenuCategory loading={loading} items={offers} />
            </div>
            <div className=' mx-12 lg:mx-28'>
                <MenuCategory loading={loading} items={desserts} img={dessertImg} title="desserts" content={dessertContent} />
            </div>
            <div className=' mx-12 lg:mx-28'>
                <MenuCategory loading={loading} items={pizzas} img={pizzaImg} title="pizza" content={pizzaContent} />
            </div>
            <div className=' mx-12 lg:mx-28'>
                <MenuCategory loading={loading} items={salads} img={saladImg} title="salads" content={saladContent} />
            </div>
            <div className=' mx-12 lg:mx-28'>
                <MenuCategory loading={loading} items={soups} img={soupImg} title="soups" content={soupContent} />
            </div>
        </section>
    );
};

export default Menu;