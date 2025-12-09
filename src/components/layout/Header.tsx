import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, User, Heart, Search } from 'lucide-react';
import { cn } from '@/utils';
import { SearchBar } from '@/components/common';
import { useAppSelector, useAppDispatch } from '@/app/hooks';
import { selectCartItemCount, toggleCart } from '@/features/cart/cartSlice';
import { selectIsAuthenticated } from '@/features/account/authSlice';

const navLinks = [
  { name: 'Categories', href: '/categories' },
  { name: 'Recipes', href: '/recipes' },
  { name: 'Diwali Specials', href: '/festivals/diwali-specials', accent: true },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const dispatch = useAppDispatch();
  const cartItemCount = useAppSelector(selectCartItemCount);
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 -ml-2 text-primary"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-semibold tracking-tight text-primary">
              Saffron
            </span>
            <span className="w-2 h-2 rounded-full bg-accent" />
          </Link>

          {/* Desktop Search */}
          <div className="hidden lg:block flex-1 max-w-md mx-8">
            <SearchBar />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  'text-sm font-medium transition-colors',
                  link.accent
                    ? 'text-accent hover:text-accent-dark'
                    : location.pathname === link.href
                    ? 'text-primary'
                    : 'text-text-secondary hover:text-primary'
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Mobile Search Toggle */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="lg:hidden p-2 text-primary"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist */}
            <Link
              to="/account/wishlist"
              className="hidden sm:flex p-2 text-text-secondary hover:text-primary transition-colors"
            >
              <Heart className="w-5 h-5" />
            </Link>

            {/* Account */}
            <Link
              to={isAuthenticated ? '/account' : '/login'}
              className="p-2 text-text-secondary hover:text-primary transition-colors"
            >
              <User className="w-5 h-5" />
            </Link>

            {/* Cart */}
            <button
              onClick={() => dispatch(toggleCart())}
              className="relative p-2 text-text-secondary hover:text-primary transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              <AnimatePresence>
                {cartItemCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-accent text-white text-xs font-medium rounded-full flex items-center justify-center"
                  >
                    {cartItemCount > 9 ? '9+' : cartItemCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden pb-4 overflow-hidden"
            >
              <SearchBar />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border overflow-hidden"
          >
            <nav className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'block py-2 text-base font-medium transition-colors',
                    link.accent
                      ? 'text-accent'
                      : location.pathname === link.href
                      ? 'text-primary'
                      : 'text-text-secondary'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/account"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-text-secondary"
              >
                My Account
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
