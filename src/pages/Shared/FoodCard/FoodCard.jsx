import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../hooks/useCart";

const FoodCard = ({ item }) => {
    const { image, name, recipe, price, _id } = item;
    const { user } = useContext(AuthContext);
    const [, refetch ]  = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = () => {
        if(user) {
            const cartItem = { foodMenuId: _id, name, image, price, email: user.email } 
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
             .then(res => res.json())
             .then(data => {
                 if(data.insertedId) {
                    refetch(); // refetch cart to update the number of items in the cart
                    toast("Added new item");
                }
             })
        }
        else {
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now'
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state: {from: location}})
                }
              }) 
        }
    }

    return (
        <div className="card card-compact bg-base-200">
            <img src={image} alt="recipe" />
            <p className="bg-slate-900 text-white absolute right-0 mr-6 mt-6 py-2 px-4">${price} </p>
            <div className="card-body items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button onClick={ handleAddToCart } className="btn btn-outline hover:text-[#BB8506] bg-gray-200 border-0 border-b-4 border-[#BB8506] text-[#BB8506]">add to cart</button>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default FoodCard;