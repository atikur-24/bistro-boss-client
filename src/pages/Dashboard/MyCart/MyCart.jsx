import DynamicTitle from "../../../components/DynamicTitle/DynamicTitle";
import SectionTitle from "../../../components/SectionTitle";
import useCart from "../../../hooks/useCart";

const MyCart = () => {
    const [ cart ] = useCart();
    const totalPrice = cart.reduce( (sum, item) => item.price + sum, 0 )
    return (
        <div>
            <DynamicTitle>My Cart</DynamicTitle>
            <SectionTitle heading={"wanna add more"} subHeading={"My Cart"} />
            <div>
                <h3>Total Orders: {cart.length}</h3>
                <h3>Total Price: ${totalPrice}</h3>
            </div>
        </div>
    );
};

export default MyCart;