import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HiChip, HiMenuAlt3, HiX } from "react-icons/hi";

const navItems = [
    { name: "Dashboard", to: "/" },
    { name: "Explore", to: "/explore" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
];

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            if (!mobile) setIsMobileMenuOpen(false);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav className="bg-zinc-900 text-white shadow-lg w-full px-6 transition-all duration-300">
            <div className="container mx-auto flex items-center justify-between flex-wrap min-h-20 py-4">
                {/* Logo */}
                <div className="flex items-center gap-2 text-accent font-semibold text-xl">
                    <HiChip className="h-8 w-8" />
                    <span>BotDash</span>
                </div>
                {isMobile && (
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-white md:hidden"
                        aria-label="Toggle navigation"
                    >
                        {isMobileMenuOpen ? (
                            <HiX className="h-7 w-7" />
                        ) : (
                            <HiMenuAlt3 className="h-7 w-7" />
                        )}
                    </button>
                )}

                {/* Nav Links */}
                <div
                    className={`
            transition-all duration-300 ease-in-out overflow-hidden w-full md:w-auto
            ${isMobile ? "flex flex-col gap-3 mt-4" : "flex gap-8 items-center"}
            ${isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"}
            md:opacity-100 md:max-h-none md:pointer-events-auto
            font-medium text-sm md:text-base text-gray-200
          `}
                >
                    {navItems.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-accent underline"
                                    : "hover:text-primary transition-colors duration-200"
                            }
                            onClick={() => isMobile && setIsMobileMenuOpen(false)}
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
