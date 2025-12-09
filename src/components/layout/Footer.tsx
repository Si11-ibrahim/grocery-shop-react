import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  shop: [
    { name: 'All Categories', href: '/categories' },
    { name: 'Deals & Offers', href: '/deals' },
    { name: 'New Arrivals', href: '/products?sort=newest' },
    { name: 'Bestsellers', href: '/products?tag=bestseller' },
  ],
  recipes: [
    { name: 'All Recipes', href: '/recipes' },
    { name: 'Quick Meals', href: '/recipes?tag=quick' },
    { name: 'Festival Special', href: '/recipes?tag=festive' },
    { name: 'Healthy Options', href: '/recipes?tag=healthy' },
  ],
  support: [
    { name: 'Contact Us', href: '/contact' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Shipping Info', href: '/shipping' },
    { name: 'Returns Policy', href: '/returns' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
};

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Facebook', icon: Facebook, href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link to="/" className="inline-flex items-center gap-2 mb-4">
              <span className="text-2xl font-semibold">Saffron</span>
              <span className="w-2 h-2 rounded-full bg-accent" />
            </Link>
            <p className="text-white/70 text-sm mb-6 max-w-sm">
              Pure Indian Essentials. Premium quality groceries delivered fresh to your doorstep.
            </p>

            {/* Contact */}
            <div className="space-y-2 text-sm text-white/70">
              <a href="tel:+911234567890" className="flex items-center gap-2 hover:text-white">
                <Phone className="w-4 h-4" />
                +91 12345 67890
              </a>
              <a href="mailto:hello@saffron.com" className="flex items-center gap-2 hover:text-white">
                <Mail className="w-4 h-4" />
                hello@saffron.com
              </a>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Mumbai, India
              </p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-medium mb-4">Shop</h4>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Recipes</h4>
            <ul className="space-y-2">
              {footerLinks.recipes.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/60">
              &copy; {new Date().getFullYear()} Saffron. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/60 hover:text-white transition-colors"
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
