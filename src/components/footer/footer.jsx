'use client';

import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import { 
  IoLogoGithub,
  IoLogoLinkedin,
  IoGlobeOutline,
  IoMailOutline,
  IoLogoWhatsapp,
} from 'react-icons/io5';

export default function Footer({ darkMode }) {
  const socialLinks = [
    { name: 'Whatsapp', href: 'https://wa.link/eiqe67', icon: IoLogoWhatsapp },
    { name: 'GitHub', href: 'https://github.com/MubeenAmjad205', icon: IoLogoGithub },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/mubeen-amjad-b404b0300/', icon: IoLogoLinkedin },
    // { name: 'Website', href: '#', icon: IoGlobeOutline },
    { name: 'Email', href: 'mailto:mianmubeen205@gmail.com', icon: IoMailOutline },
  ];

  return (
    <footer className={`${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Profile Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-purple-500">
                <img
                  src="/profile-small.png"
                  alt="Your Name"
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold">Mubeen Amjad</h3>
                <p className="text-sm text-gray-500">MERN Stack & GEN-AI Developer</p>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              Crafting digital experiences with passion and precision
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><Link href="#projects" className="hover:text-purple-500 transition-colors">Projects</Link></li>
              <li><Link href="#skills" className="hover:text-purple-500 transition-colors">Skills</Link></li>
              <li><Link href="#chat" className="hover:text-purple-500 transition-colors">Chat</Link></li>
              <li><Link href="#contact" className="hover:text-purple-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="p-2 rounded-full hover:bg-purple-100 dark:hover:bg-gray-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <form className="space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              if (e.target[0].value === '') {
                return toast.error('Please enter your email!');
              }
              toast.success('You have subscribed to the newsletter!');
              e.target.reset();
            }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent"
              />
              <button className="w-full bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Mubeen Amjad. All rights reserved.<br />
            Built with ❤️ using Next.js, Tailwind CSS & Langchain 
          </p>
        </div>
      </div>
      <ToastContainer />
    </footer>
  );
}