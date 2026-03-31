import { ThumbsUp, Volume2 } from "lucide-react";
import React, { useState } from "react";

const Banner = ({Movie}) => {

  const [isPlayingTrailer, setIsPlayingTrailer] = useState(false);

  const trailerUrl = `https://www.youtube.com/embed/HhesaQXLuRY?si=xV3Us03M_f-jNVeH&autoplay=1`;

  return (
    <div className="h-[60vh] md:h-[90vh]">
      {isPlayingTrailer ? (
        <div className="w-full h-full flex flex-col">
          <div className="w-full h-[90%] bg-black">
            <iframe
              className="w-full h-full"
              src={trailerUrl}
              title="12 Angry Men Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <button
            onClick={() => setIsPlayingTrailer(false)}
            className="w-full h-[10%] bg-red-600 hover:bg-red-700 text-white font-semibold text-lg transition-colors shadow-lg active:scale-[0.99]"
          >
            Close
          </button>
        </div>
      ) : (
        <div className="relative w-full rounded-[9px] h-[58vh] md:h-[88vh] overflow-hidden">
          <img
            src={`https://image.tmdb.org/t/p/w500/${Movie?.backdrop_path}`}
            alt="banner"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
          <div className="absolute w-full inset-0 flex flex-col items-center justify-end p-[16px] md:p-[40px] text-white">

            <h1 className="text-[20px] md:text-3xl font-bold text-center">{Movie?.title}</h1>
            <p className="mt-[8px] md:mt-[10px] text-xs md:text-sm max-w-[500px] text-gray-300 text-center w-[90%] md:w-[80%]">
              {Movie?.overview}
            </p>
            <div className="flex items-center justify-center gap-[8px] md:gap-[10px] mt-[14px] md:mt-[20px]">

              <button
                onClick={() => setIsPlayingTrailer(true)}
                className="bg-red-600 px-[14px] md:px-[20px] py-[8px] md:py-[10px] rounded flex items-center gap-2 hover:bg-red-700 text-[14px] md:text-[16px]">
                <i className="fa-solid fa-play"></i> Play Now
              </button>

              <button className="bg-black/60 p-[8px] md:p-[10px] text-[18px] md:text-[20px] rounded hover:bg-black">
                +
              </button>

              <button className="bg-black/60 p-[8px] md:p-[10px] rounded hover:bg-black">
                <ThumbsUp size={18} className="md:w-[24px] md:h-[24px]" />
              </button>

              <button className="bg-black/60 p-[8px] md:p-[10px] rounded hover:bg-black">
                <Volume2 size={18} className="md:w-[24px] md:h-[24px]" />
              </button>

            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Banner;