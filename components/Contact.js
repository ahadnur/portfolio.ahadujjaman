import React from 'react'
import Link from 'next/link'

const Contact = () => {
  return (
    <div id="contact" className="contact container text-center h-[70vh] flex justify-center items-center">
        <div>
            <h3 className="font-mono text-main">04. What&apos;s next?</h3>
            <h2 className="text-3xl md:text-6xl text-white/90 font-bold">Get In Touch</h2>
            <p className="text-white/60 w-4/5 mt-3 mx-auto">Currently I&apos;m looking for an opportunity to work in a team or a company. My inbox is always open for you. If you have any question or anything want to know just write some text to me. I will come back to you as soon as possible.</p>

           <div className="mt-10">
                <Link href="mailto:ahadnur44@gmail.com">
                    <a className="px-5 py-3 border border-main rounded-md text-main hover:bg-main/10 transition-all duration-300">Say Something</a>
                </Link>
           </div>
        </div>
    </div>
  )
}

export default Contact