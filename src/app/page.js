// app/page.jsx
'use client';

import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import { CiCircleCheck } from "react-icons/ci";
import { HiArrowPath } from "react-icons/hi2";
import { FiXCircle } from "react-icons/fi";
import {
  IoCode,
  IoMail,
  IoLogoReact,
  IoLogoNodejs,
  IoLogoDocker
} from 'react-icons/io5';
import { SiLangchain, SiFastapi, SiGraphql } from "react-icons/si";
import { RiJavascriptLine } from "react-icons/ri";
import {
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoMongodb,
  BiLogoBootstrap,
} from "react-icons/bi";


import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';


// Mock data
const MOCK_PROJECTS = [
  {
    id: 1,
    title: 'Shop Ease (e-commerce store)',
    description: 'An e-commerce store which represents the my skills and experience in the field of web development',
    tags: ['Next.js', 'JWT', 'Tailwind', 'MongoDB'],
    image: '/shop-ease.png'
  },
  {
    id: 2,
    title: 'Task Manager',
    description: 'A Task manager app which represents the my skills and experience in the field of web development',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: '/task-manager.png'
  },
  {
    id: 3,
    title: 'AI Health Care Assistant',
    description: 'An AI Health Care Assistant which represents the my skills and experience in the field of AI',
    tags: ['Python', 'Langchain', 'Next.js'],
    image: '/health-care.png'
  },
  {
    id: 4,
    title: 'Basic Quiz App',
    description: 'A basic quiz app which represents the my skills and experience in DOM manipulation',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: '/quiz-app.png'
  },
];

const skills = [
  { name: 'Next.js', icon: IoCode, color: 'text-gray-700 dark:text-white' },
  { name: 'React', icon: IoLogoReact, color: 'text-blue-500' },
  { name: 'Tailwind', icon: BiLogoTailwindCss, color: 'text-cyan-500' },
  { name: 'Node.js', icon: IoLogoNodejs, color: 'text-green-500' },
  { name: 'TypeScript', icon: BiLogoTypescript, color: 'text-blue-600' },
  { name: 'MongoDB', icon: BiLogoMongodb, color: 'text-orange-500' },
  { name: 'Langchain', icon: SiLangchain, color: 'text-balck' },
  { name: 'Bootstarp', icon: BiLogoBootstrap, color: 'text-blue-800' },
  { name: 'FastApi', icon: SiFastapi, color: 'text-balck' },
  { name: 'Graphql', icon: SiGraphql, color: 'text-blue-500' },
  { name: 'javaScript', icon: RiJavascriptLine, color: 'text-yellow' },
  { name: 'Docker', icon: IoLogoDocker, color: 'text-black' },
];

export default function HomePage() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);
  const [formStatus, setFormStatus] = useState({ success: false, message: '' });
  const[ threadId, setThreadId] = useState('')
  const [messages, setMessages] = useState([]);
  const[msgLoading, setMsgLoading] = useState(false)

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const onSubmit = async (data) => {
    setFormStatus({ success: false, message: 'Sending...' });
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setFormStatus({ success: true, message: 'Message sent successfully!' });
      reset();
    } catch (error) {
      setFormStatus({ success: false, message: 'Error sending message' });
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-12 px-6 md:py-32">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
            >
              Transforming Ideas into Digital Reality
            </motion.h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
              MERN-Stack developer specializing in modern web applications and AI integration
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="#projects" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full transition-all shadow-lg hover:shadow-purple-200">
                View Work
              </Link>
              <Link href="#contact" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-gray-800 px-8 py-3 rounded-full transition-all shadow-lg hover:shadow-purple-200">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section id="about" className="py-16 px-6 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-purple-100 dark:border-gray-700">
              <Image
                width={650}
                height={500}
                src="/profile1.png"
                alt="Mubeen Amjad"
                className="object-cover"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Hi, I'm Mubeen Amjad 👋
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                A passionate MERN-stack developer with 5+ years of experience in creating
                modern web applications. I specialize in React, Next.js, Langchian, fastapi, langraph and cloud
                technologies, focusing on building scalable and user-friendly solutions.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="#contact"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full transition-colors shadow-md"
                >
                  Get In Touch
                </Link>
                <button
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-gray-800 px-6 py-3 rounded-full transition-colors shadow-md"
onClick={async() => {
  try{
    const response= await axios.get('/api/resume')
    if(response.data.success){
      console.log(response.data.response);
      
    }
  }catch(error){
    console.log(error)
    toast.error('Error downloading resume')

 }}}
>
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Section */}

      {/* <section id="chat" className="py-16 px-6 bg-white dark:bg-gray-800">
  <div className="container mx-auto max-w-4xl">
    <div className="bg-gray-50 dark:bg-gray-700 rounded-xl shadow-lg p-8">
      <h2 className="text-3xl font-bold mb-8 text-center">
        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          AI Portfolio Assistant
        </span>
      </h2>
      <div className="space-y-6">
        <p className="text-center text-gray-600 dark:text-gray-300">
          Ask me anything about my experience, skills, or projects!
        </p>
        <div className="h-64 overflow-y-auto p-4 bg-white dark:bg-gray-600 rounded-lg">
        
          <div className="flex flex-col-reverse h-full"> 
            {messages.length === 0 && (
              <div className="text-center text-gray-500">
                Start a conversation by typing below...
              </div>
            )}
            {messages.map((message, index) => (
              <div 
                key={index}
                className={`flex ${message.isAI ? 'justify-start' : 'justify-end'} mb-3`}
              >
                <div className={`max-w-[70%] rounded-lg p-3 ${
                  message.isAI 
                    ? 'bg-purple-100 dark:bg-gray-500 text-gray-800 dark:text-white'
                    : 'bg-purple-600 text-white'
                }`}>
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs mt-1 opacity-70">
                    {message.isAI ? 'AI Assistant' : 'You'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <form 
            className="flex flex-col md:flex-row gap-4" 
            onSubmit={async (e) => {
              e.preventDefault();
              const input = e.target[0];
              if(input.value === '') {
                toast.error('Please enter a message');
                return;
              }
              
              try {
                setMessages(prev => [
                  { text: input.value, isAI: false },
                  ...prev 
                ]);
                setMsgLoading(true)
                
                const response = await axios.post('/api/chat2', {
                  message: input.value,
                  threadId: threadId
                });
                e.target.reset()
                
                if(response.data.success) {
                  setMsgLoading(false)
                  console.log(response.data.response);
                  
                  setMessages(prev => [
                    { text: response.data.response, isAI: true },
                    ...prev
                  ]);
                  setThreadId(response.data.threadId);
                }
                
                e.target.reset()
              } catch(error) {
                setMsgLoading(false)
                e.target.reset()
                console.error(error);
                toast.error('Error sending message');
              }
            }}
          >
            <input
              type="text"
              disabled={msgLoading}
              placeholder="Type your question..."
              className="flex-1 p-3 border-2 border-purple-200 dark:border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 bg-transparent"
            />
            <button 
              disabled={msgLoading}
              type="submit" 
              className={`bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors shadow-md ${msgLoading?'cursor-not-allowed':null} `}
            >
              {msgLoading?'Sending...':'Send'}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section> */}

<section id="chat" className="py-16 px-6 bg-white dark:bg-gray-800">
  <div className="container mx-auto max-w-4xl">
    <div className="bg-gray-50 dark:bg-gray-700 rounded-xl shadow-lg p-8">
      <h2 className="text-3xl font-bold mb-8 text-center">
        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          AI Portfolio Assistant
        </span>
      </h2>
      <div className="space-y-6">
        <p className="text-center text-gray-600 dark:text-gray-300">
          Ask me anything about Mubeen's experience, skills, or projects!
        </p>
        <div className="h-64 overflow-y-auto p-4 bg-white dark:bg-gray-600 rounded-lg custom-scrollbar">
          {/* Messages Container */}
          <div className="flex flex-col-reverse min-h-full">
            {messages.length === 0 && (
              <div className="flex-1 flex items-center justify-center text-gray-500">
                Start a conversation by typing below...
              </div>
            )}
            {messages.map((message, index) => (
              <div 
                key={index}
                className={`flex ${message.isAI ? 'justify-start' : 'justify-end'} mb-3`}
              >
                <div className={`max-w-[70%] rounded-lg p-3 ${
                  message.isAI 
                    ? 'bg-purple-100 dark:bg-gray-500 text-gray-800 dark:text-white'
                    : 'bg-purple-600 text-white'
                }`}>
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs mt-1 opacity-70">
                    {message.isAI ? 'AI Assistant' : 'You'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* ... rest of the form code remains the same ... */}
        <div>
          <form 
            className="flex flex-col md:flex-row gap-4" 
            onSubmit={async (e) => {
              e.preventDefault();
              const input = e.target[0];
              if(input.value === '') {
                toast.error('Please enter a message');
                return;
              }
              
              try {
                setMessages(prev => [
                  { text: input.value, isAI: false },
                  ...prev 
                ]);
                setMsgLoading(true)
                
                const response = await axios.post('/api/chat2', {
                  message: input.value,
                  threadId: threadId
                });
                e.target.reset()
                
                if(response.data.success) {
                  setMsgLoading(false)
                  console.log(response.data.response);
                  
                  setMessages(prev => [
                    { text: response.data.response, isAI: true },
                    ...prev
                  ]);
                  setThreadId(response.data.threadId);
                }
                
                e.target.reset()
              } catch(error) {
                setMsgLoading(false)
                e.target.reset()
                console.error(error);
                toast.error('Error sending message');
              }
            }}
          >
            <input
              type="text"
              disabled={msgLoading}
              placeholder="Type your question..."
              className="flex-1 p-3 border-2 border-purple-200 dark:border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 bg-transparent"
            />
            <button 
              disabled={msgLoading}
              type="submit" 
              className={`bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors shadow-md ${msgLoading?'cursor-not-allowed':null} `}
            >
              {msgLoading?'Sending...':'Send'}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 dark:bg-gray-900 bg-purple-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              Array(3).fill(0).map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="relative h-80 bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-md"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-600 dark:to-gray-700 animate-shimmer" />
                  <div className="p-6 absolute bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent">
                    <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-2" />
                    <div className="h-4 bg-gray-200 dark:bg-gray-500 rounded w-full mb-3" />
                    <div className="flex gap-2">
                      <div className="h-5 w-16 bg-gray-200 dark:bg-gray-500 rounded-full" />
                      <div className="h-5 w-20 bg-gray-200 dark:bg-gray-500 rounded-full" />
                    </div>
                  </div>
                </motion.div>
              ))
            ) : MOCK_PROJECTS.map(project => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gray-200 dark:bg-gray-600 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-purple-100 dark:bg-gray-600 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Technical Expertise
            </span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <skill.icon className={`h-12 w-12 mb-4 ${skill.color}`} />
                <span className="font-medium dark:text-white">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 dark:bg-gray-800 bg-purple-50">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">
              Let's Work Together
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 dark:text-gray-200">
                  Name
                </label>
                <div className="relative">
                  <input
                    {...register('name', { required: 'Name is required' })}
                    className={`w-full p-3 border-2 rounded-lg focus:outline-none ${errors.name
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-purple-200 dark:border-gray-600 focus:border-purple-500'
                      } bg-white dark:bg-gray-800 dark:text-white`}
                  />
                  {!errors.name && (
                    <CiCircleCheck  className="h-5 w-5 text-green-500 absolute right-3 top-4" />
                  )}
                  {errors.name && (
                    <FiXCircle className="h-5 w-5 text-red-500 absolute right-3 top-4" />
                  )}
                </div>
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 dark:text-gray-200">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    className={`w-full p-3 border-2 rounded-lg focus:outline-none ${errors.email
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-purple-200 dark:border-gray-600 focus:border-purple-500'
                      } bg-white dark:bg-gray-800 dark:text-white`}
                  />
                  {!errors.email && (
                    <CiCircleCheck className="h-5 w-5 text-green-500 absolute right-3 top-4" />
                  )}
                  {errors.email && (
                    <FiXCircle className="h-5 w-5 text-red-500 absolute right-3 top-4" />
                  )}
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 dark:text-gray-200">
                  Message
                </label>
                <div className="relative">
                  <textarea
                    {...register('message', {
                      required: 'Message is required',
                      minLength: {
                        value: 20,
                        message: 'Message must be at least 20 characters'
                      }
                    })}
                    rows="5"
                    className={`w-full p-3 border-2 rounded-lg focus:outline-none ${errors.message
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-purple-200 dark:border-gray-600 focus:border-purple-500'
                      } bg-white dark:bg-gray-800 dark:text-white`}
                  />
                  {!errors.message && (
                    <CiCircleCheck className="h-5 w-5 text-green-500 absolute right-3 top-4" />
                  )}
                  {errors.message && (
                    <FiXCircle className="h-5 w-5 text-red-500 absolute right-3 top-4" />
                  )}
                </div>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <AnimatePresence>
                {formStatus.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`p-4 rounded-lg ${formStatus.success
                        ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-100'
                        : 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-100'
                      }`}
                  >
                    <div className="flex items-center space-x-2">
                      {formStatus.success ? (
                        <CiCircleCheck className="h-5 w-5" />
                      ) : (
                        <HiArrowPath  className="h-5 w-5 animate-spin" />
                      )}
                      <span>{formStatus.message}</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="submit"
                disabled={formStatus.message === 'Sending...'}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg transition-colors flex items-center justify-center disabled:opacity-50 shadow-md"
              >
                <IoMail className="h-5 w-5 mr-2" />
                {formStatus.message === 'Sending...' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer darkMode={darkMode} />
      <ToastContainer />
    </div>
  );
}