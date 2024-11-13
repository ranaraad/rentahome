// NavBar.js
import React from "react";
import { Home, Search, PlusCircle, Mail } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./components/ui/navigation-menu";
import { Button } from "./components/ui/button";
import { Link } from "react-router-dom";

const NavBar = () => {
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
          <div >
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-4">
                <NavigationMenuItem>
                  <Link to="/">
                    <Button variant="ghost" className="flex items-center">
                      <Home className="mr-2 h-4 w-4 text-violet-700" />
                      Home
                    </Button>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/search">
                    <Button variant="ghost" className="flex items-center">
                      <Search className="mr-2 h-4 w-4 text-violet-700" />
                      Search
                    </Button>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/post-listing">
                    <Button variant="ghost" className="flex items-center">
                      <PlusCircle className="mr-2 h-4 w-4 text-violet-700" />
                      Post Listing
                    </Button>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="about-contact">
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
      </div>
    </nav>
  );
};

export default NavBar;
