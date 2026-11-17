
import React from 'react'
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

import Container from '../Components/Container'
import Flex from '../Components/Flex'

const Navbar = () => {

    let text = "NEWTRON ACADEMY"

    return (
        <nav className=''>
            <div className='py-5 shadow-sm'>
                <Container>
                    <Flex className={'justify-between items-center'}>

                        {/* Logo Animation */}
                        <h1 className='text-2xl font-bold text-blue-700 pl-10'>
                            {text.split("").map((letter, index) => (
                                <span
                                    key={index}
                                    className='inline-block animate-letter'
                                    style={{
                                        animationDelay: `${index * 0.15}s`
                                    }}
                                >
                                    {letter === " " ? "\u00A0" : letter}
                                </span>
                            ))}
                        </h1>

                        {/* Menu Items */}
                        <ul>
                            <Flex className={'gap-x-10 items-center'}>
                                {['Home', 'About', 'Courses', 'Service', 'Contact'].map((item, index) => (
                                    <li
                                        key={index}
                                        className='text-gray-700 font-medium cursor-pointer hover:text-blue-600 transition-all duration-300'
                                    >
                                        {item}
                                    </li>
                                ))}
                            </Flex>
                        </ul>

                        {/* Icons */}

                        {/* Contact Icons */}
                        <Flex className={'gap-x-6 items-center pr-5'}>

                            {/* Phone */}
                            <a href="tel:+8801881789713">
                                <FaPhoneAlt className='text-xl text-blue-600 cursor-pointer hover:scale-125 transition-all duration-300' />
                            </a>

                            {/* WhatsApp */}
                            <a
                                href="http://wa.me/01881789713"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaWhatsapp className='text-2xl text-green-500 cursor-pointer hover:scale-125 transition-all duration-300' />
                            </a>

                        </Flex>
                       

                    </Flex>
                </Container>
            </div>
        </nav>
    )
}

export default Navbar
