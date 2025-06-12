import React from 'react';
import Button from './Shared/Button';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const getLinkClassName = ({ isActive }) =>
        `relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full
         after:[background-color:#FF7A01] after:transform after:transition-transform after:duration-300
         after:scale-x-0 after:origin-left hover:after:scale-x-100 hover:after:origin-left
         ${isActive ? 'after:scale-x-100 text-[#FF7A01]' : ''}`;

    return (
        <div className="drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <nav className="w-9/12 mx-auto flex items-center justify-between py-4">
                    <div className="flex items-center gap-4">
                        {/* Hamburger for mobile */}
                        <div className="lg:hidden">
                            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block h-6 w-6 stroke-current"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </label>
                        </div>
                        <img
                            className="w-[130px] h-9"
                            src="https://html.vikinglab.agency/recrute/assets/img/logo/header-logo1.png"
                            alt="Company Logo"
                        />
                    </div>

                    {/* Top Nav for large screens */}
                    <div className="hidden lg:flex items-center gap-8 text-xl font-semibold figtree-font">
                        <NavLink to="/" className={getLinkClassName}>Home</NavLink>
                        <NavLink to="/job" className={getLinkClassName}>Job</NavLink>
                        <NavLink to="/service" className={getLinkClassName}>Service</NavLink>
                        <NavLink to="/blog" className={getLinkClassName}>Blog</NavLink>
                        <NavLink to="/project" className={getLinkClassName}>Projects</NavLink>
                        <NavLink to="/about" className={getLinkClassName}>AboutUs</NavLink>
                    </div>

                    <Button name={"Get A Quote"} />
                </nav>
            </div>

            {/* Sidebar drawer */}
            <div className="drawer-side lg:hidden figtree-font z-10">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content text-lg font-medium space-y-3">
                    <li className="text-2xl font-bold text-[#FF7A01] mb-4">Menu</li>

                    <li>
                        <NavLink to="/" className={getLinkClassName} onClick={() => document.getElementById('my-drawer-3').checked = false}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/job" className={getLinkClassName} onClick={() => document.getElementById('my-drawer-3').checked = false}>
                            Job
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/service" className={getLinkClassName} onClick={() => document.getElementById('my-drawer-3').checked = false}>
                            Service
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog" className={getLinkClassName} onClick={() => document.getElementById('my-drawer-3').checked = false}>
                            Blog
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/project" className={getLinkClassName} onClick={() => document.getElementById('my-drawer-3').checked = false}>
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={getLinkClassName} onClick={() => document.getElementById('my-drawer-3').checked = false}>
                            AboutUs
                        </NavLink>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default NavBar;
