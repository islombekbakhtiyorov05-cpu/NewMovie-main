import { ThumbsUp, Volume2 } from "lucide-react";
import React, { useState } from "react";

const Banner = () => {

  const [isPlayingTrailer, setIsPlayingTrailer] = useState(false);

  // Ссылка на трейлер (замени ID видео на нужный)

  const trailerUrl = `https://www.youtube.com/embed/HhesaQXLuRY?si=xV3Us03M_f-jNVeH&autoplay=1`;

  return (
    <div className="h-[90vh]">
      {isPlayingTrailer ? (
        // --- СОСТОЯНИЕ 1: ВИДЕО ПЛЕЕР (Скриншот 2) ---
        <div className="w-full h-full flex flex-col">
          {/* Плеер занимает 90% высоты */}
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

          {/* Кнопка Close под видео, внутри того же контейнера (Скриншот 2) */}
          {/* 3. При клике возвращаем состояние в false */}
          <button
            onClick={() => setIsPlayingTrailer(false)}
            className="w-full h-[10%] bg-red-600 hover:bg-red-700 text-white font-semibold text-lg transition-colors shadow-lg active:scale-[0.99]"
          >
            Close
          </button>
        </div>
      ) : (
        <div className="relative w-full rounded-[9px] h-[88vh] overflow-hidden">
          <img
            src="https://cdn.britannica.com/49/251849-050-54AE4F9E/bryan-cranston-aaron-paul-breaking-bad.jpg" // замени на свою картинку
            alt="banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
          <div className="absolute w-[100%] inset-0 flex flex-col items-center justify-end p-[40px] text-white">

            <h1 className="text-3xl font-bold">Breaking Bad</h1>
            <p className="mt-[10px] text-sm max-w-[500px] text-gray-300 text-center w-[80%]">
              A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands.
            </p>
            <div className="flex items-center justify-center gap-[10px] mt-[20px]">

              <button
                onClick={() => setIsPlayingTrailer(true)}
                className="bg-red-600 px-[20px] py-[10px] rounded flex items-center gap-2 hover:bg-red-700">
                <i className="fa-solid fa-play"></i> Play Now
              </button>

              <button

                className="bg-black/60 p-[10px] text-[20px] rounded hover:bg-black">
                +
              </button>

              <button className="bg-black/60 p-[10px] rounded hover:bg-black">
                <ThumbsUp />
              </button>

              <button className="bg-black/60 p-[10px] rounded hover:bg-black">
                <Volume2 />
              </button>

            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Banner;