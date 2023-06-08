import { FaTrashAlt } from "react-icons/fa";
import DynamicTitle from "../../../components/DynamicTitle/DynamicTitle";
import SectionTitle from "../../../components/SectionTitle";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";

const MyCart = () => {
    const [ cart, refetch ] = useCart();
    const totalPrice = cart.reduce( (sum, item) => item.price + sum, 0 );
    
    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0) {
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                    }
                })
              
            }
          })
    } 
    return (
        <div className="w-full mt-10">
            <DynamicTitle>My Cart</DynamicTitle>
            <div className="w-full">
                <SectionTitle heading={"wanna add more"} subHeading={"My Cart"} />
            </div>
            <div className="flex justify-evenly items-center my-5">
                <h3 className="text-3xl font-bold">Total Orders: {cart.length}</h3>
                <h3 className="text-3xl font-bold">Total Price: ${totalPrice}</h3>
                <button className="btn btn-warning bg-[#D1A054]">Pay</button>
            </div>
            <div className="overflow-x-auto">
            <table className="table w-full">
                {/* head */}
                <thead>
                <tr>
                    <th></th>
                    <th>item image</th>
                    <th>item name</th>
                    <th>price</th>
                    <th>action</th>
                </tr>
                </thead>
                <tbody>
                {
                    cart.map( (item, idx) => <tr key={item._id}>
                    <td>{idx + 1}</td>
                    <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={item.image} alt="food" />
                            </div>
                            </div>
                        </div>
                    </td>
                    <td>{item.name}</td>
                    <td className="">${item.price}</td>
                    <td>
                        <button onClick={ () => handleDelete(item)} className="btn bg-[#B91C1C] btn-error text-white"> <FaTrashAlt /> </button>
                    </td>
                </tr>)
                }
                
                </tbody>
            </table>
</div>
        </div>
    );
};

export default MyCart;