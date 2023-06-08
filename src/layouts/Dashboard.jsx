import { NavLink, Outlet } from "react-router-dom";
import { FaBars, FaBook, FaCalendarAlt, FaEnvelope, FaHome, FaList, FaShoppingBag, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';

const Dashboard = () => {

  // TODO: load data from the server to have dynamic isAdmin based on database
  const isAdmin = true;

  return (
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center">
          {/* Page content here */}
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
          <Outlet />
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-[#D1A054] text-base-content uppercase">
            {/* Sidebar content here */}
            {
              isAdmin ? 
            <>
            <li><NavLink to='/dashboard/adminHome'><FaHome /> Admin Home</NavLink></li>
            <li><NavLink to='/dashboard/addItems'><FaUtensils /> Add items</NavLink></li>
            <li><NavLink to='/dashboard/manageItems'><FaList /> Manage items</NavLink></li>
            <li><NavLink to='/dashboard/manageBooking'><FaBook /> Manage booking</NavLink></li>
            <li><NavLink to='/dashboard/allUsers'><FaUsers /> All users</NavLink></li>
            </> : 
              
            <>
            <li><NavLink to='/dashboard/userHome'><FaHome /> User Home</NavLink></li>
            <li><NavLink to='/dashboard/reservation'><FaCalendarAlt /> Reservation</NavLink></li>
            <li><NavLink to='/dashboard/payment'><FaWallet /> Payment history</NavLink></li>
            <li><NavLink to='/dashboard/myCart'><FaShoppingCart /> My cart</NavLink></li>
            </>
            }
            <div className="divider"></div>       
            <li><NavLink to='/' ><FaHome /> Home</NavLink></li>
            <li><NavLink to='/dashboard/menu'><FaBars /> Menu</NavLink></li>
            <li><NavLink to='/dashboard/shop'><FaShoppingBag /> Shop</NavLink></li>
            <li><NavLink to='/dashboard/contact'><FaEnvelope /> Contact</NavLink></li>
          </ul>
        </div>
      </div>
  );
};

export default Dashboard;