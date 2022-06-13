import React from 'react'
import Link from 'next/link'

import { AiFillEdit, AiFillGithub, AiOutlineTwitter, AiFillLinkedin, AiFillFacebook, AiFillYoutube } from 'react-icons/ai'
import { FaTelegramPlane } from 'react-icons/fa'


const Footer = () => {
  return (
    <div className=" py-5 ">
        <div className="mb-5 lg:hidden">
            <ul className="flex justify-center items-center space-x-5">
                <li className="cursor-pointer h-5 w-5">
                    <Link href="https://www.github.com/ahadnur">
                        <a target="_blank"><AiFillGithub className="h-full w-full text-white/60 hover:text-main transition-all duration-300 hover:animate-ping" /></a>
                    </Link>
                </li>
                <li className="cursor-pointer h-5 w-5">
                    <Link href="https://www.facebook.com/ahadnur44">
                        <a target="_blank"><AiFillFacebook className="h-full w-full text-white/60 hover:text-main transition-all duration-300 hover:animate-ping" /></a>
                    </Link>
                </li>
                <li className="cursor-pointer h-5 w-5">
                    <Link href="https://www.twitter.com/ahadnur44">
                        <a target="_blank"><AiOutlineTwitter className="h-full w-full text-white/60 hover:text-main transition-all duration-300 hover:animate-ping" /></a>
                    </Link>
                </li>
                <li className="cursor-pointer h-5 w-5">
                    <Link href="https://t.me/ahadnur44">
                        <a target="_blank"><FaTelegramPlane className="h-full w-full text-white/60 hover:text-main transition-all duration-300 hover:animate-ping" /></a>
                    </Link>
                </li>
                <li className="cursor-pointer h-5 w-5">
                    <Link href="https://www.linkedin.com/in/ahadnur44/">
                        <a target="_blank"><AiFillLinkedin className="h-full w-full text-white/60 hover:text-main transition-all duration-300 hover:animate-ping" /></a>
                    </Link>
                </li>
                <li className="cursor-pointer h-5 w-5">
                    <Link href="https://www.youtube.com/channel/UCen4h4v9NnDKEHzOvE93BIA">
                        <a target="_blank"><AiFillYoutube className="h-full w-full text-white/60 hover:text-main transition-all duration-300 hover:animate-ping" /></a>
                    </Link>
                </li>
            </ul>
        </div>
        <p className="text-center text-white/40">Developed by Ahadujjaman Nur</p>
    </div>
  )
}

export default Footer