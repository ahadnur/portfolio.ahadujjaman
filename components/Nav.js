import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { AiFillCloseCircle, AiOutlineBars } from 'react-icons/ai'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)
    function toggleMenu() {
        setIsOpen(!isOpen)
    }
    function closeMenu() {
        setIsOpen(false)
    }
  return (
      <>
        <div>
            <div className="px-5 md:px-24 py-5 text-gray-200 drop-shadow-lg shadow-sky-300/20 flex justify-between items-center">
                <div className="logo cursor-pointer">
                    <a href="/">
                        <Image src="/img/logo.svg" alt="Portfolio Logo" height="48" width="48"/>
                    </a>
                </div>
                <div className="menu font-mono hidden md:block">
                    <ul className="flex items-center space-x-5 text-white">
                        <li className="cursor-pointer hover:text-main">
                            <a href="#about"> <span className="text-main">01.</span> About</a>
                        </li>
                        <li className="cursor-pointer hover:text-main">
                            <a href="#services"><span className="text-main">02.</span> Services</a>
                        </li>
                        <li className="cursor-pointer hover:text-main">
                            <a href="#works"><span className="text-main">03.</span> Works</a>
                        </li>
                        <li className="cursor-pointer hover:text-main">
                            <a href="#testimonials"><span className="text-main">04.</span> Testimonials</a>
                        </li>
                        <li className="cursor-pointer hover:text-main">
                            <a href="#contact"><span className="text-main">05.</span> Contact</a>
                        </li>
                        <li className="px-5 py-2 border-[1px] border-main text-main rounded-md hover:bg-main/20 transition-all duration-300 cursor-pointer">
                            <Link href="/">Resume</Link>
                        </li>
                    </ul>
                </div>
                <div className="ham md:hidden" onClick={toggleMenu}>
                    <AiOutlineBars className="cursor-pointer text-main h-6 w-6" />
                </div>
            </div>
            <div className={isOpen ? 'h-screen bg-gray fixed md:hidden top-0 right-0 grid place-items-center transition duration-300' : 'hidden'}>
                <div className="relative">
                    <div className="menu font-mono w-[400px]">
                        <ul className="flex justify-between flex-col items-center text-white space-y-10">
                            <li className="cursor-pointer hover:text-main" onClick={closeMenu}>
                                <a href="#about" className="flex flex-col items-center"> <span className="text-main">01.</span> <span>About</span></a>
                            </li>
                            <li className="cursor-pointer hover:text-main" onClick={closeMenu}>
                                <a href="#services" className="flex flex-col items-center"><span className="text-main">02.</span> <span>Services</span></a>
                            </li>
                            <li className="cursor-pointer hover:text-main" onClick={closeMenu}>
                                <a href="#works" className="flex flex-col items-center"><span className="text-main">03.</span> <span>Works</span></a>
                            </li>
                            <li className="cursor-pointer hover:text-main" onClick={closeMenu}>
                                <a href="#testimonials" className="flex flex-col items-center"><span className="text-main">04.</span> <span>Testimonials</span></a>
                            </li>
                            <li className="cursor-pointer hover:text-main" onClick={closeMenu}>
                                <a href="#contact" className="flex flex-col items-center"><span className="text-main">05.</span> <span>Contact</span></a>
                            </li>
                            <li className="px-5 py-2 border-[1px] border-main text-main rounded-md hover:bg-main/20 transition-all duration-300 cursor-pointer" onClick={closeMenu}>
                                <Link href="/">Resume</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="closeBtn absolute -top-[197px] right-5">
                        <AiFillCloseCircle className="cursor-pointer text-main h-6 w-6" onClick={closeMenu} />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Nav