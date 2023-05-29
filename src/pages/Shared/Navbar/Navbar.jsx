import { Link } from "react-router-dom";

const Navbar = () => {
    const navItems = <>
            <li><Link to='/'>home</Link></li>
            <li><Link to='/'>contact  us</Link></li>
            <li><Link to='/'>dashboard</Link></li>
            <li><Link to='/menu'>our menu</Link></li>
            <li><Link to='/'>our shop</Link></li> 
    </>
    return (
        <div className="navbar z-10 bg-opacity-10 fixed bg-base-200 max-w-screen-xl text-white px-12">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="uppercase menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {navItems}
                </ul>
                </div>
                <div>
                    <p className="uppercase text-3xl tracking-wide font-bold">Bistro Boss</p>
                    <p className="text-2xl font-bold tracking-widest uppercase">restaurant</p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="uppercase menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Get started</a>
            </div>
        </div>
    );
};

export default Navbar;