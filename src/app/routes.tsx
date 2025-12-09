import { createBrowserRouter } from 'react-router-dom';
import { PageLayout } from '@/components/layout';
import { HomePage } from '@/features/home';

// Placeholder pages for now
function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-4">All Products</h1>
      <p className="text-text-secondary">Products page coming soon...</p>
    </div>
  );
}

function CategoriesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-4">All Categories</h1>
      <p className="text-text-secondary">Categories page coming soon...</p>
    </div>
  );
}

function CartPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-4">Your Cart</h1>
      <p className="text-text-secondary">Cart page coming soon...</p>
    </div>
  );
}

function RecipesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-4">Recipes</h1>
      <p className="text-text-secondary">Recipes page coming soon...</p>
    </div>
  );
}

function LoginPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-4">Login</h1>
      <p className="text-text-secondary">Login page coming soon...</p>
    </div>
  );
}

function NotFoundPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-24 text-center">
      <h1 className="text-6xl font-semibold text-primary mb-4">404</h1>
      <p className="text-xl text-text-secondary mb-8">Page not found</p>
      <a href="/" className="text-accent hover:underline">Go back home</a>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'products',
        element: <ProductsPage />,
      },
      {
        path: 'products/:slug',
        element: <ProductsPage />,
      },
      {
        path: 'categories',
        element: <CategoriesPage />,
      },
      {
        path: 'categories/:slug',
        element: <CategoriesPage />,
      },
      {
        path: 'cart',
        element: <CartPage />,
      },
      {
        path: 'checkout',
        element: <CartPage />,
      },
      {
        path: 'recipes',
        element: <RecipesPage />,
      },
      {
        path: 'recipes/:slug',
        element: <RecipesPage />,
      },
      {
        path: 'festivals/:slug',
        element: <ProductsPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'account',
        element: <LoginPage />,
      },
      {
        path: 'account/*',
        element: <LoginPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
