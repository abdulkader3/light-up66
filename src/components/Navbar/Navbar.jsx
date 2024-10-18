import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { FaToggleOff } from "react-icons/fa6";

export const Navbar = () => {
  return (
    <>
      <nav className="bg-[#E5E9F6] py-[25px] ">
        <div className="container flex items-center justify-between ">
            <div className="w-[955px] ">
                <ul className=" flex items-center justify-between ">
                    <li><NavLink to="/" className={({ isActive }) =>isActive ? "text-[17px] font-work font-semibold text-[#E12127] leading-7 tracking-[.15%] " : "text-[17px] font-work font-semibold text-[#000D39] leading-7 tracking-[.15%]"}>Home+</NavLink></li>
                    <li><NavLink to="/fashion" className={({ isActive }) =>isActive ? "text-[17px] font-work font-semibold text-[#E12127] leading-7 tracking-[.15%] " : "text-[17px] font-work font-semibold text-[#000D39] leading-7 tracking-[.15%]"}>Fashion</NavLink></li>
                    <li><NavLink to="/travel" className={({ isActive }) =>isActive ? "text-[17px] font-work font-semibold text-[#E12127] leading-7 tracking-[.15%] " : "text-[17px] font-work font-semibold text-[#000D39] leading-7 tracking-[.15%]"}>Travel</NavLink></li>
                    <li><NavLink to="/technology" className={({ isActive }) =>isActive ? "text-[17px] font-work font-semibold text-[#E12127] leading-7 tracking-[.15%] " : "text-[17px] font-work font-semibold text-[#000D39] leading-7 tracking-[.15%]"}>Technology</NavLink></li>
                    <li><NavLink to="/lifestyle" className={({ isActive }) =>isActive ? "text-[17px] font-work font-semibold text-[#E12127] leading-7 tracking-[.15%] " : "text-[17px] font-work font-semibold text-[#000D39] leading-7 tracking-[.15%]"}>Lifestyle</NavLink></li>
                    <li><NavLink to="/features" className={({ isActive }) =>isActive ? "text-[17px] font-work font-semibold text-[#E12127] leading-7 tracking-[.15%] " : "text-[17px] font-work font-semibold text-[#000D39] leading-7 tracking-[.15%]"}>Features</NavLink></li>
                    <li><NavLink to="/education" className={({ isActive }) =>isActive ? "text-[17px] font-work font-semibold text-[#E12127] leading-7 tracking-[.15%] " : "text-[17px] font-work font-semibold text-[#000D39] leading-7 tracking-[.15%]"}>Education</NavLink></li>
                    <li><NavLink to="/pages" className={({ isActive }) =>isActive ? "text-[17px] font-work font-semibold text-[#E12127] leading-7 tracking-[.15%] " : "text-[17px] font-work font-semibold text-[#000D39] leading-7 tracking-[.15%]"}>Pages+</NavLink></li>
                    <li><NavLink to="/sports" className={({ isActive }) =>isActive ? "text-[17px] font-work font-semibold text-[#E12127] leading-7 tracking-[.15%] " : "text-[17px] font-work font-semibold text-[#000D39] leading-7 tracking-[.15%]"}>Sports</NavLink></li>
                </ul>
            </div>
            <div className=" flex items-center ">
                <div className="h-[30px] w-[30px]  "> <IoSearch  size={30}/></div>
                <div className="h-[30px] w-[30px] ml-5 mr-[26px] "> <FaBars size={30} /></div>
                <div className="h-[30px] w-[30px]  "> <FaToggleOff size={30} /></div>
            </div>
        </div>
      </nav>
    </>
  )
}
