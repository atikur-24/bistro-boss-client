import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../hooks/useCart";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const [ cart ] = useCart();

    const handleLogout = () => {
        logout()
         .then(()=>{})
         .catch(error => console.error(error.message))
    }
    
    const navItems = <>
            <li><Link to='/'>home</Link></li>
            <li><Link to='/'>dashboard</Link></li>
            <li><Link to='/menu'>our menu</Link></li>
            <li><Link to='/order/salads'>our food</Link></li>
            <li>
                <Link className="btn gap-2" to='/dashboard/myCart'>
                        <FaShoppingCart />
                        <div className="badge badge-secondary">{cart?.length || 0}</div>
                </Link>
            </li>
            {user ? <button className="btn btn-ghost" onClick={handleLogout}>Logout</button> : <li><Link to='/login'>Login</Link></li>}
            { user && <div className="avatar">
                <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img title={user?.displayName} src={user?.photoURL} />
                </div>
            </div>}
    </>
    return (
        <div className="navbar z-10 bg-opacity-10 fixed bg-base-200 text-white max-w-screen-xl  px-12">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="uppercase menu menu-compact dropdown-content mt-3 p-2 w-52">
                    {navItems}
                </ul>
                </div>
                <div>
                    <p className="uppercase text-3xl tracking-wide font-bold">Bistro Boss</p>
                    <p className="text-2xl tracking-[6px] uppercase">restaurant</p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="uppercase menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;