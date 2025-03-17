import React from 'react';
import { Github, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CheckmateHub</h3>
            <p className="text-gray-400">
              Your ultimate platform for chess enthusiasts. Play, learn, and connect with players worldwide.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-yellow-500">About Us</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-yellow-500">Contact</a></li>
              <li><a href="/privacy" className="text-gray-400 hover:text-yellow-500">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-500">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500">
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} CheckmateHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;