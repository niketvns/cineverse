import React from 'react';
import Link from "next/link";
import Image from "next/image";
import Nav from "@/app/components/Nav";

const Header = () => {
    return (
        <header className={'bg-black text-white flex justify-between items-center px-2 py-2 sm:px-10'}>
            <div className="navbar-brand">
                <Link href={'/'}>
                    <Image src={'/logo.png'} alt={'logo'} width={'170'} height={'40'}/>
                </Link>
            </div>
            <div className="nav">
                <Nav/>
            </div>
        </header>
    );
};

export default Header;