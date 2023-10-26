'use client'

import React, {useState} from 'react';
import Link from "next/link";
import {RxHamburgerMenu} from 'react-icons/rx'
import {AiOutlineClose} from 'react-icons/ai'

const Nav = () => {
    const [isMenu, setIsMenu] = useState(false)

    return (
        <nav className={'relative'}>
            <div className="hamburger pr-2 text-2xl cursor-pointer sm:hidden select-none"
                 onClick={() => setIsMenu(prevState => !prevState)}>
                {
                    isMenu ?
                        <AiOutlineClose/> :
                        <RxHamburgerMenu/>
                }
            </div>
            <div
                className={`fixed -right-2 top-16 ${isMenu ? "translate-x-0" : 'translate-x-[150px] sm:translate-x-0' } transition duration-300 backdrop-sepia-0 bg-white/30 text-black sm:text-white p-4 px-10 rounded sm:p-0 sm:rounded-none sm:static sm:bg-transparent z-10`}>
                <ul className={'navigation flex flex-col sm:flex-row gap-4 sm:gap-8 items-center'}>
                    <li>
                        <Link href={'/'} className={'hover:text-blue-500'} onClick={()=>setIsMenu(false)}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href={'/movie'} className={'hover:text-blue-500'} onClick={()=>setIsMenu(false)}>
                            Movie
                        </Link>
                    </li>
                    <li>
                        <Link href={'/about'} className={'hover:text-blue-500'} onClick={()=>setIsMenu(false)}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href={'/contact'} className={'hover:text-blue-500'} onClick={()=>setIsMenu(false)}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;