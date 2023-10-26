import React from 'react';
import Image from "next/image";
import Link from "next/link";

const MovieCard = ({jawSummary}) => {
    const {id, type, title, synopsis} = jawSummary

    return (
        <>
            <div className={'movie-card shadow-lg py-4 w-[45%] sm:w-auto max-w-[250px] rounded-lg'}>
                <div className="image">
                    {/*<img src={jawSummary?.backgroundImage?.url} alt=""/>*/}
                    <Image src={jawSummary.backgroundImage.url} alt={title} width={250} height={200} className={'w-full rounded-t-lg'}/>
                </div>
                <div className="details flex flex-col gap-2 px-6">
                    <h2 className={'text-lg font-bold line-clamp-1'}>{title}</h2>
                    <p className={'line-clamp-3'}>{synopsis}</p>
                    <Link href={`/movie/${id}`}>
                        <button className={'bg-black px-4 py-1 rounded-full text-white border-2 hover:border-2 border-black hover:text-black hover:bg-transparent transition duration-150'}>Read More</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default MovieCard;