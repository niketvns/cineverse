import React from "react";
import Image from "next/image";
import Link from "next/link";

const Page = async ({ params }) => {
  const movieId = params.movieId;

  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${movieId}&lang=en`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": `${process.env.RAPID_API_KEY}`,
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const movieData = data[0]?.details;

  return data.length ? (
    <div className={"movie-page p-1 sm:p-8 md:p-12 lg:px-24"}>
      <h1 className={"text-2xl font-bold"}>
        Netflix \ <span className={"text-red-600"}>{movieData?.type}</span>
      </h1>
      <div className="movie max-w-[800px]">
        <div className="img py-4 sm:pb-8">
          <Image
            src={movieData?.backgroundImage.url}
            alt={movieData?.title}
            width={500}
            height={500}
          />
        </div>
        <div className="details flex flex-col gap-2">
          <h2 className={"text-2xl md:text-3xl font-bold"}>
            {movieData?.title}
          </h2>
          <p>{movieData?.synopsis}</p>
        </div>
      </div>
    </div>
  ) : (
    <div
      className={
        "movie-page p-4 sm:p-8 flex flex-col gap-5 items-center justify-center min-h-[50vh]"
      }
    >
      <h1 className={"text-2xl font-bold"}>
        {" "}
        Movie not available on <span className={"text-red-600"}>Netflix</span>
      </h1>
      <Link href="/movie">
        <button
          className={
            "bg-black px-4 py-1 rounded-full text-white border-2 hover:border-2 border-black hover:text-black hover:bg-transparent transition duration-150"
          }
        >
          Explore Movies
        </button>
      </Link>
    </div>
  );
};

export default Page;
