import React from "react";
import { NavLink } from "react-router-dom";
import { HiChip, HiLogin } from "react-icons/hi";

const navItems = [
    { name: "Dashboard", to: "/" },
    { name: "Search", to: "/search" },
    { name: "Explore", to: "/explore" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
];

const Navbar = () => {
    return (
        <nav className="bg-secondary text-text shadow-md w-full px-6">
            <div className="container mx-auto flex items-center justify-between flex-wrap md:flex-nowrap py-4 md:py-0">
                <div className="text-primary md:order-1">
                    <HiChip className="h-10 w-10" />
                </div>

                <div className="order-3 w-full md:w-auto md:order-2 mt-4 md:mt-0">
                    <ul className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 font-semibold">
                        {navItems.map((item) => (
                            <li key={item.to} className="md:px-4 md:py-2">
                                <NavLink
                                    to={item.to}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-accent underline"
                                            : "hover:text-primary transition-colors"
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Login Button */}
                <div className="order-2 md:order-3">
                    <button className="px-4 py-2 bg-primary hover:bg-accent text-background rounded-xl flex items-center gap-2 transition-all">
                        <HiLogin className="h-5 w-5" />
                        <span>Login</span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
