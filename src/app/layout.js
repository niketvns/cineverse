import './globals.css'
import {Inter} from 'next/font/google'
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'CineVerse',
    description: 'This is a movie webapp build with Next.js and Tailwind CSS built by Niket Mishra',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={inter.className}>
            <Header/>
            {children}
            <Footer/>
        </body>
        </html>
    )
}
