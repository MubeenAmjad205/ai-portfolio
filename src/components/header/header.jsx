'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoMenuOutline, IoCloseOutline, IoSunnyOutline, IoMoonOutline, IoChatbubbleEllipsesOutline } from 'react-icons/io5';

export default function Header({ darkMode, toggleDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isChatOpen, setIsChatOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
    { name: 'Chat', href: '#chat' },
  ];

  return (
    <header className={`sticky top-0 z-50 ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with Profile Image */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-purple-500">
              <Image
                src="/profile-small.png"
                alt="Your Name"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Mubeen Amjad
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
             <Link
                key={link.name}
                href={link.href}
                className={`hover:text-purple-500 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
              >
                {link.name}
             </Link>
            ))}
            <div className="flex items-center space-x-4 ml-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {darkMode ? (
                  <IoSunnyOutline className="h-6 w-6" />
                ) : (
                  <IoMoonOutline className="h-6 w-6" />
                )}
              </button>
              <button
                // onClick={() => setIsChatOpen(!isChatOpen)}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors relative"
              >
                <Link href="#chat" >
                <IoChatbubbleEllipsesOutline className="h-6 w-6" />
                {/* {!isChatOpen && ( */}
                  <span className="absolute top-0 right-0 p-1 bg-purple-500 rounded-full animate-pulse text-[0.5rem]"> NEW</span>
                {/* )} */}
                </Link>
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {isMenuOpen ? (
              <IoCloseOutline className="h-6 w-6" />
            ) : (
              <IoMenuOutline className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {navLinks.map((link) => (
             <Link
                key={link.name}
                href={link.href}
                className="block py-2 hover:text-purple-500"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
             </Link>
            ))}
            <div className="flex space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={toggleDarkMode}
                className="flex items-center space-x-2"
              >
                {darkMode ? (
                  <IoSunnyOutline className="h-6 w-6" />
                ) : (
                  <IoMoonOutline className="h-6 w-6" />
                )}
                <span>Toggle Theme</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}