import Link from 'next/link'

 const NotFound = () => {
    return (
        <div className={'min-h-[60vh] flex flex-col items-center justify-center gap-2'}>
            <h1 className={'text-3xl font-bold text-red-600'}>404</h1>
            <h2 className={'text-xl'}>Not Found</h2>
            <p>Could not find requested resource</p>
            <p>
                <Link href="/movie">
                    <button className={'bg-black px-4 py-1 rounded-full text-white border-2 hover:border-2 border-black hover:text-black hover:bg-transparent transition duration-150'}>
                        Explore Movies
                    </button>
                </Link>
            </p>
        </div>
    )
}

export default NotFound