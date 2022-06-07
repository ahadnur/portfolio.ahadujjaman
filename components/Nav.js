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
            <div className="px-5 md:px-10 py-3 text-gray-200 drop-shadow-md shadow-[#212121]/20 flex justify-between items-center fixed top-0 left-0 w-full z-20 bg-[#212121]/90">
                <div className="logo cursor-pointer">
                    <Link href="/">
                        <a><Image src="/img/logo.svg" alt="Portfolio Logo" height="48" width="48"/></a>
                    </Link>
                </div>
                <div className="ham" onClick={toggleMenu}>
                    {
                        isOpen
                        ? 
                        <AiFillCloseCircle className="cursor-pointer text-main h-8 w-8 transition-all duration-3000" />
                        :
                        <AiOutlineBars className="cursor-pointer text-main h-8 w-8 transition-all duration-3000" />
                    }
                </div>
            </div>
            <div className={isOpen ? "right-0 bg-gray w-[400px] fixed bottom-0 h-[calc(100vh-77.5px)] grid place-items-center z-10 transition-all duration-3000" : "bg-gray w-[400px] fixed bottom-0 -right-[400px] h-[calc(100vh-77.5px)] grid place-items-center z-10 transition-all duration-3000"}>
                <div className="relative">
                    <div className="menu font-mono w-[400px]">
                        <ul className="flex justify-between flex-col items-center text-white space-y-10">
                            <li className="cursor-pointer hover:text-main" onClick={closeMenu}>
                                <Link href="#about">
                                    <a className="flex flex-col items-center"> <span className="text-main">01.</span> <span>About</span></a>
                                </Link>
                            </li>
                            <li className="cursor-pointer hover:text-main" onClick={closeMenu}>
                                <Link href="#services">
                                    <a className="flex flex-col items-center"><span className="text-main">02.</span> <span>Services</span></a>
                                </Link>
                            </li>
                            <li className="cursor-pointer hover:text-main" onClick={closeMenu}>
                                <Link href="#works">
                                    <a className="flex flex-col items-center"><span className="text-main">03.</span>  <span>Works</span></a>
                                </Link>
                            </li>
                            <li className="cursor-pointer hover:text-main" onClick={closeMenu}>
                                <Link href="#testimonials">
                                    <a className="flex flex-col items-center"><span className="text-main">04.</span> <span>Testimonials</span></a>
                                </Link>
                            </li>
                            <li className="cursor-pointer hover:text-main" onClick={closeMenu}>
                                <Link href="#contact">
                                    <a className="flex flex-col items-center"><span className="text-main">05.</span> <span>Contact</span></a>
                                </Link>
                            </li>
                            <li className="px-5 py-2 border-[1px] border-main text-main rounded-md hover:bg-main/20 transition-all duration-300 cursor-pointer" onClick={closeMenu}>
                                <Link href="/">Resume</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Nav