'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp } from "react-icons/fa6";
import Link from 'next/link';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        setIsVisible(window.scrollY > -10)
    }

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth',
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const jumpAnimation = {
        y: [0, -10, 0, -10, 0],
        transition: {
            y: {
            duration: 0.7,
            ease: 'easeOut',
            repeat: 1,
            },
        },
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-8 right-8 md:bottom-12 md:right-12 z-50"
            >
            {isVisible && (
                <Link 
                    href="https://wa.me/6282299968965" 
                    target='_blank'
                    className='flex flex-row justify-center gap-2'
                    >
                    <motion.button
                        onClick={scrollToTop}
                        aria-label="Back to top"
                        className='flex flex-row gap-4 justify-center items-center bg-[#25D366] p-4 md:px-6 py-4 cursor-pointer rounded-full'
                    >
                        <FaWhatsapp
                            size={32}
                            color='white'
                            absoluteStrokeWidth={true}
                            strokeWidth={1.5}
                        />
                        <span className='hidden md:flex leading-[0.6] text-sm text-white'>Hubungi kami <br /><br />via whatsapp</span>

                    </motion.button>
                </Link>
                
            )}
        </motion.div>
    ) 
} 

export default BackToTopButton