import { useState } from "react";
import video_thumb from "/assets/furnessia-video/video_thumb.png";
import play_button from "/assets/furnessia-video/play_button.png";

const FurnessiaVideo = () => {
    const [playVideo, setPlayVideo] = useState(false);

    return (
        <section className="max-w-480 mx-auto px-4 sm:px-6 lg:px-20 lg:py-[96px] py-8 sm:py-12 ">
            <div className="h-full w-full  space-y-12">
                <div className="flex w-full justify-between items-baseline uppercase">
                    <h2 className="font-familjen text-4xl md:text-[96px] lg:text-[150px] font-bold text-[#030712]">
                        Furnessia
                    </h2>
                    <p className="text-xl md:text-3xl lg:text-6xl font-albert font-semibold lg:font-medium text-[#4A5565] uppercase">
                        on the go
                    </p>
                </div>

                <div className="flex-1 aspect-video min-h-[360px] overflow-hidden max-w-full mx-auto rounded-[48px] relative  cursor-pointer">

                    {!playVideo ? (
                        <div
                            className="w-full h-full relative"
                            onClick={() => setPlayVideo(true)}
                        >
                            <img
                                src={video_thumb}
                                alt="Video thumbnail"
                                className="w-full h-full object-cover"
                            />

                            {/* Play Button */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <figure>
                                    <img src={play_button} alt="Play button" className="h-[60px] w-[60px] md:h-[100px] md:w-[100px] lg:h-[180px] lg:w-[180px]" />
                                </figure>

                            </div>
                        </div>
                    ) : (
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/S-A0qLTxf-U?autoplay=1&rel=0&modestbranding=1"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    )}
                </div>
            </div>
        </section>
    );
};

export default FurnessiaVideo;