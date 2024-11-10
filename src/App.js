import React from 'react';
import { Search, Home, PlusCircle, Info, Mail, Menu } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from './components/ui/navigation-menu';
import { Input } from './components/ui/input';
import { Button } from './components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './components/ui/sheet';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo and Brand */}
            <div className="flex items-center">
              <Home className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">RanaHome</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <NavigationMenu>
              <NavigationMenuList className="flex space-x-4">
                <NavigationMenuItem>
                  <Button variant="ghost" className="flex items-center">
                    <Home className="mr-2 h-4 w-4" />
                    Home
                  </Button>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Button variant="ghost" className="flex items-center">
                    <Search className="mr-2 h-4 w-4" />
                    Search
                  </Button>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Button variant="ghost" className="flex items-center">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Post Listing
                  </Button>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Button variant="ghost" className="flex items-center">
                    <Info className="mr-2 h-4 w-4" />
                    About
                  </Button>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Button variant="ghost" className="flex items-center">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact
                  </Button>
                </NavigationMenuItem>
              </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                    <SheetDescription>
                      Navigate through our platform
                    </SheetDescription>
                  </SheetHeader>
                  <div className="flex flex-col space-y-4 mt-4">
                    <Button variant="ghost" className="flex items-center justify-start">
                      <Home className="mr-2 h-4 w-4" />
                      Home
                    </Button>
                    <Button variant="ghost" className="flex items-center justify-start">
                      <Search className="mr-2 h-4 w-4" />
                      Search
                    </Button>
                    <Button variant="ghost" className="flex items-center justify-start">
                      <PlusCircle className="mr-2 h-4 w-4" />
                      Post Listing
                    </Button>
                    <Button variant="ghost" className="flex items-center justify-start">
                      <Info className="mr-2 h-4 w-4" />
                      About
                    </Button>
                    <Button variant="ghost" className="flex items-center justify-start">
                      <Mail className="mr-2 h-4 w-4" />
                      Contact
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to RanaHome
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Finding a safe and comfortable home shouldn't be a challenge. We connect displaced individuals with compassionate hosts offering temporary housing solutions.
          </p>
        </div>

        {/* Search Section */}
        <div className="max-w-2xl mx-auto">
          <div className="flex gap-2">
            <div className="flex-1">
              <Input 
                placeholder="Search for housing in your desired location..." 
                className="w-full"
              />
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;