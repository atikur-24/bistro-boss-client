import Cover from '../../Shared/Cover/Cover';
import OrderCover from '../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import useMenu from '../../../hooks/useMenu/useMenu';
import FoodCategory from '../FoodCategory/FoodCategory';
import { useParams } from 'react-router-dom';

const Order = () => {
    const categories = ['salads', 'pizza', 'soups', 'desserts', 'drinks']
    const { category } = useParams();
    const initialIndex = categories.indexOf(category)

    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();

    const desserts = menu.filter( item => item.category === 'dessert' );
    const pizzas = menu.filter( item => item.category === 'pizza' );
    const salads = menu.filter( item => item.category === 'salad' );
    const soups = menu.filter( item => item.category === 'soup' );
    const drinks = menu.filter( item => item.category === 'drinks' );


    return (
        <section>
            <Cover img={OrderCover} title="our order" content="Would you like to try this" />
            <div className='mx-12 lg:mx-28 my-32'>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUPS</Tab>
                    <Tab>DESSERTS</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>
                <TabPanel>
                    <FoodCategory items={salads} />
                </TabPanel>
                <TabPanel>
                    <FoodCategory items={pizzas} />
                </TabPanel>
                <TabPanel>
                    <FoodCategory items={soups} />
                </TabPanel>
                <TabPanel>
                    <FoodCategory items={desserts} />
                </TabPanel>
                <TabPanel>
                    <FoodCategory items={drinks} />
                </TabPanel>
            </Tabs>
            </div>
        </section>
    );
};

export default Order;