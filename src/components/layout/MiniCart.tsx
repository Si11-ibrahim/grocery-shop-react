import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui';
import { QuantitySelector } from '@/components/common';
import { useAppSelector, useAppDispatch } from '@/app/hooks';
import {
  selectCartItems,
  selectCartTotal,
  selectIsCartOpen,
  closeCart,
  removeFromCart,
  updateQuantity,
} from '@/features/cart/cartSlice';
import { formatPrice } from '@/utils';

export function MiniCart() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectIsCartOpen);
  const items = useAppSelector(selectCartItems);
  const total = useAppSelector(selectCartTotal);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => dispatch(closeCart())}
            className="fixed inset-0 bg-primary/50 z-50"
          />

          {/* Cart Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-background z-50 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5" />
                <h2 className="font-semibold text-lg">Your Cart</h2>
                <span className="text-sm text-text-secondary">
                  ({items.length} items)
                </span>
              </div>
              <button
                onClick={() => dispatch(closeCart())}
                className="p-2 hover:bg-surface rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="w-16 h-16 text-border mb-4" />
                  <h3 className="font-medium text-lg mb-2">Your cart is empty</h3>
                  <p className="text-text-secondary text-sm mb-6">
                    Add some items to get started
                  </p>
                  <Button onClick={() => dispatch(closeCart())}>
                    Start Shopping
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.productId}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      className="flex gap-4 bg-surface rounded-lg p-3"
                    >
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm line-clamp-2 mb-1">
                          {item.product.name}
                        </h4>
                        <p className="text-xs text-text-secondary mb-2">
                          {item.product.unit}
                        </p>
                        <div className="flex items-center justify-between">
                          <QuantitySelector
                            quantity={item.quantity}
                            onIncrease={() =>
                              dispatch(
                                updateQuantity({
                                  productId: item.productId,
                                  quantity: item.quantity + 1,
                                })
                              )
                            }
                            onDecrease={() =>
                              dispatch(
                                updateQuantity({
                                  productId: item.productId,
                                  quantity: item.quantity - 1,
                                })
                              )
                            }
                            size="sm"
                          />
                          <span className="font-medium">
                            {formatPrice(item.product.price * item.quantity)}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => dispatch(removeFromCart(item.productId))}
                        className="self-start p-1.5 text-text-secondary hover:text-error transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-border p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-text-secondary">Subtotal</span>
                  <span className="font-semibold text-lg">{formatPrice(total)}</span>
                </div>
                <p className="text-xs text-text-secondary">
                  Shipping and taxes calculated at checkout
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <Link to="/cart" onClick={() => dispatch(closeCart())}>
                    <Button variant="outline" fullWidth>
                      View Cart
                    </Button>
                  </Link>
                  <Link to="/checkout" onClick={() => dispatch(closeCart())}>
                    <Button fullWidth>Checkout</Button>
                  </Link>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
