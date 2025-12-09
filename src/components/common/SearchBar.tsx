import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { cn } from '@/utils';
import { searchProducts } from '@/data';

interface SearchBarProps {
  variant?: 'default' | 'hero';
  className?: string;
}

export function SearchBar({ variant = 'default', className }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<ReturnType<typeof searchProducts>>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (query.length > 1) {
      const searchResults = searchProducts(query);
      setResults(searchResults.slice(0, 5));
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/products?search=${encodeURIComponent(query)}`);
      setIsOpen(false);
      setQuery('');
    }
  };

  const handleResultClick = (slug: string) => {
    navigate(`/products/${slug}`);
    setIsOpen(false);
    setQuery('');
  };

  return (
    <div className={cn('relative', className)}>
      <form onSubmit={handleSubmit}>
        <div
          className={cn(
            'relative flex items-center',
            variant === 'hero' ? 'bg-background rounded-full shadow-lg' : ''
          )}
        >
          <Search
            className={cn(
              'absolute left-4 text-text-secondary',
              variant === 'hero' ? 'w-5 h-5' : 'w-4 h-4'
            )}
          />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for groceries..."
            className={cn(
              'w-full bg-transparent border-none outline-none',
              'placeholder:text-text-secondary',
              variant === 'hero'
                ? 'pl-12 pr-12 py-4 text-lg'
                : 'pl-10 pr-10 py-2.5 text-base bg-surface rounded-lg'
            )}
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                inputRef.current?.focus();
              }}
              className="absolute right-4 text-text-secondary hover:text-primary"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </form>

      {/* Search Results Dropdown */}
      <AnimatePresence>
        {isOpen && results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-background rounded-xl shadow-xl border border-border overflow-hidden z-50"
          >
            {results.map((product) => (
              <button
                key={product.id}
                onClick={() => handleResultClick(product.slug)}
                className="w-full flex items-center gap-3 p-3 hover:bg-surface transition-colors text-left"
              >
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-12 h-12 object-cover rounded-lg"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-primary truncate">
                    {product.name}
                  </p>
                  <p className="text-sm text-text-secondary">{product.unit}</p>
                </div>
              </button>
            ))}
            <button
              onClick={handleSubmit}
              className="w-full p-3 text-center text-accent font-medium hover:bg-surface transition-colors border-t border-border"
            >
              View all results for "{query}"
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
