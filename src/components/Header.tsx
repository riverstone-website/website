import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/about" },
    { name: "FRP Planters", path: "/frp-planters" },
    { name: "About Fiberglass Planters", path: "/about-fiberglass" },
  ];

  return (
    <header className="bg-background border-b sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="text-xl md:text-2xl font-bold text-primary">
              Riverstone <span className="text-accent">Garden Decor</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  isActive(item.path)
                    ? "text-accent border-b-2 border-accent"
                    : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-sm font-medium gap-1">
                  More <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-popover">
                <DropdownMenuItem asChild>
                  <Link to="/warranty" className="cursor-pointer">Warranty & Care</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/faqs" className="cursor-pointer">FAQs</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/career" className="cursor-pointer">Career</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/gallery" className="cursor-pointer">Gallery</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/blog" className="cursor-pointer">Blog</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/client-stories" className="cursor-pointer">Client Stories</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/contact" className="cursor-pointer">Contact</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-2 text-sm font-medium ${
                  isActive(item.path) ? "text-accent" : "text-foreground"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/warranty"
              className="block py-2 text-sm font-medium text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Warranty & Care
            </Link>
            <Link
              to="/faqs"
              className="block py-2 text-sm font-medium text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQs
            </Link>
            <Link
              to="/career"
              className="block py-2 text-sm font-medium text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Career
            </Link>
            <Link
              to="/gallery"
              className="block py-2 text-sm font-medium text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              to="/blog"
              className="block py-2 text-sm font-medium text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/client-stories"
              className="block py-2 text-sm font-medium text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Client Stories
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-sm font-medium text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
