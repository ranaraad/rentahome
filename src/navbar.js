import React, { useState } from "react";
import { Home, Search, PlusCircle, Mail, Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./components/ui/navigation-menu";
import { Button } from "./components/ui/button";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-violet-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Home className="h-8 w-8 text-violet-700" />
            <span className="ml-2 text-xl font-semibold text-gray-900">
              RanaHome
            </span>
          </div>

          {/* Hamburger menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              className="p-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-violet-700" />
              ) : (
                <Menu className="h-6 w-6 text-violet-700" />
              )}
            </Button>
          </div>

          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-4">
                <NavigationMenuItem>
                  <Link to="/" onClick={closeMenu}>
                    <Button variant="ghost" className="flex items-center">
                      <Home className="mr-2 h-4 w-4 text-violet-700" />
                      Home
                    </Button>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/search" onClick={closeMenu}>
                    <Button variant="ghost" className="flex items-center">
                      <Search className="mr-2 h-4 w-4 text-violet-700" />
                      Search
                    </Button>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/post-listing" onClick={closeMenu}>
                    <Button variant="ghost" className="flex items-center">
                      <PlusCircle className="mr-2 h-4 w-4 text-violet-700" />
                      Post Listing
                    </Button>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/about-contact" onClick={closeMenu}>
                    <Button variant="ghost" className="flex items-center">
                      <Mail className="mr-2 h-4 w-4 text-violet-700" />
                      Contact
                    </Button>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-violet-200"
                onClick={closeMenu}
              >
                <div className="flex items-center">
                  <Home className="mr-2 h-4 w-4 text-violet-700" />
                  Home
                </div>
              </Link>
              <Link
                to="/search"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-violet-200"
                onClick={closeMenu}
              >
                <div className="flex items-center">
                  <Search className="mr-2 h-4 w-4 text-violet-700" />
                  Search
                </div>
              </Link>
              <Link
                to="/post-listing"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-violet-200"
                onClick={closeMenu}
              >
                <div className="flex items-center">
                  <PlusCircle className="mr-2 h-4 w-4 text-violet-700" />
                  Post Listing
                </div>
              </Link>
              <Link
                to="/about-contact"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-violet-200"
                onClick={closeMenu}
              >
                <div className="flex items-center">
                  <Mail className="mr-2 h-4 w-4 text-violet-700" />
                  Contact
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
