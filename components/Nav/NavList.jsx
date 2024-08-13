import React from 'react';
import Link from "next/link";
import { motion } from 'framer-motion';

const links = [ 
    { href: "/", name: "Home" },
    { href: "/", name: "Explore" },
    { href: "/", name: "About" },
    { href: "/", name: "Menu" },
    { href: "/", name: "Contact" },
];

const letterAnim = {
    initial: {
        y: "100%",
        opacity: 0
    },
    enter: (i) => ({
        y: 0,
        opacity: 1,
        transition: { 
            duration: 1, 
            ease: [0.60, 0, 0.20, 1], 
            delay: i * 0.04 // Delay based on index
        },
    }),
    exit: (i) => ({
        y: "100%",
        opacity: 0,
        transition: { 
            duration: 0.8, 
            ease: [0.60, 0, 0.20, 1], 
            delay: (i * 0.04) + 0.1 // Exit delay
        },
    })
}

const getLetter = (name) => {
    return name.split("").map((letter, index) => (
        <motion.span 
            variants={letterAnim} 
            initial="initial" 
            animate="enter" 
            exit="exit"
            custom={index} // Pass the index to the animation variants
            key={index}
        >
            {letter}
        </motion.span>
    ));
}

const NavList = () => {
  return (
    <ul className='flex flex-col gap-8 font-primary text-4xl font-semibold text-accent items-center uppercase'>
        {links.map((link, index) => {
            return (
                <Link href={link.href} key={index} 
                className='flex overflow-hidden hover:text-white transition-all'>
                    {getLetter(link.name)}
                </Link>
            );
        })}
    </ul>
  );
};

export default NavList;
