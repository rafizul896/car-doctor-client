import { Link, NavLink } from "react-router-dom";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { BiSearchAlt2 } from "react-icons/bi";
import { useState } from "react";

const Navbar = () => {
    const [user,setUser] = useState()

    const handleLogOut = () => {
        // logOut()
    }

    const links = <>
        <NavLink>Home</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Services</NavLink>
        <NavLink>Contact</NavLink>
        {
            user?.email ? <>
                <NavLink to='/bookings'>My Bookings</NavLink>
                <button onClick={handleLogOut} className="text-center">LogOut</button>
            </>
                :
                <NavLink to='/login'>Login</NavLink>
        }
    </>

    return (
        <div className="navbar items-center bg-base-100 px-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="pr-1 md:pr-3 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 md:h-10 md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-center text-lg py-3">
                        {links}
                    </ul>
                </div>
                <Link to="/" className="text-xl">
                    <img className="w-[60px] md:w-[80px] lg:w-[100px]" src="https://i.imghippo.com/files/j8cOb1714536713.svg" alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal font-medium text-lg gap-6">
                    {links}
                </ul>
            </div>
            <div className="md:navbar-end flex gap-2 md:gap-5">
                <LiaShoppingBagSolid className="text-2xl" />
                <BiSearchAlt2 className="text-2xl" />
                <button className="text-[#FF3811] hover:text-white hover:bg-[#FF3811] px-2 md:px-4 py-2 border-2 border-[#FF3811] rounded-md md:text-lg font-normal">Appointment</button>
            </div>
        </div>
    );
};

export default Navbar;