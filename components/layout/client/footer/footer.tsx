import React from "react";
import Link from "next/link"; // Use next/link if you are using Next.js

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Support</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/contact"
                  className=" hover:text-white transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className=" hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Community</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/careers"
                  className=" hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/gift-cards"
                  className=" hover:text-white transition-colors"
                >
                  Gift Cards
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Hosting</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/about"
                  className=" hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4">
              Airbnb Clone
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Explore unique places to stay, experiences, and host homes all
              around the world.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400">
          <p>&copy; 2026 Airbnb Clone, Inc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <span className=" cursor-pointer">Privacy</span>
            <span className=" cursor-pointer">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
