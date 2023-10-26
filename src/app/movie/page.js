import React from 'react';
import MovieCard from "@/app/components/MovieCard";

const Page = async () => {

    const url = process.env.RAPID_KEY;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '24c3f57f8dmshf7aa871cf8758d8p1e5c30jsn8a175eb5548f',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options)
    const data = await res.json()
    const movieData = data.titles;

    return (
        <>
            <section>
                <div className={'flex flex-col items-center py-8 gap-5 px-6'}>
                    <h1 className={'text-4xl font-bold border-b-2 border-black'}>Movies and Series</h1>
                    <div className="all-movies flex flex-wrap justify-center items-start gap-4">
                        {
                            movieData.map(movie => (
                                <MovieCard key={movie.id} {...movie}/>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;