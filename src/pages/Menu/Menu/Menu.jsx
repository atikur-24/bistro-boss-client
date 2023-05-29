import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';

const Menu = () => {
    return (
        <>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title={"our menu"} content={'WOULD YOU LIKE TO TRY DISH'} />
        </>
    );
};

export default Menu;