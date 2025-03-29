import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa"; // Import YouTube icon

const videosList = [
  { id: 6, title: "Video 5", url: "https://www.youtube.com/embed/_NgexBmerhE" },
  { id: 1, title: "Video 1", url: "https://www.youtube.com/embed/Hpepqc1p45Q" },
  { id: 2, title: "Video 2", url: "https://www.youtube.com/embed/hTmlpuLh_wM" },
  { id: 3, title: "Video 3", url: "https://www.youtube.com/embed/DfLrjvHmD6w" },
  { id: 4, title: "Video 4", url: "https://www.youtube.com/embed/HZt2DjEr7eo" },
  { id: 5, title: "Video 6", url: "https://www.youtube.com/embed/hY46dQEiA0I" },
];

const VideosList = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setSelectedVideo(videosList[index]);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  const prevVideo = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedVideo(videosList[currentIndex - 1]);
    }
  };

  const nextVideo = () => {
    if (currentIndex < videosList.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedVideo(videosList[currentIndex + 1]);
    }
  };

  return (
    <div className="p-4">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {videosList.map((video, index) => (
          <div
            key={video.id}
            className="relative cursor-pointer  hover:shadow-lg transition-transform transform hover:scale-105"
            onClick={() => openModal(index)}
          >
            {/* Thumbnail Image */}
            <img
              src={`https://img.youtube.com/vi/${
                video.url.split("/embed/")[1]
              }/hqdefault.jpg`}
              alt={video.title}
              className="w-full h-48 rounded-md"
            />
            {/* YouTube Play Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <FaYoutube className="text-red-600 text-7xl p-2 shadow-lg" />
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className=" p-4 rounded-lg shadow-lg  w-1/2 text-center relative">
            <button
              className="absolute top-0 right-0 text-red-600 text-xl"
              onClick={closeModal}
            >
              <AiFillCloseCircle />
            </button>
            <iframe
              width="100%"
              height="500"
              src={selectedVideo.url}
              title={selectedVideo.title}
              className="rounded-lg"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="flex justify-between mt-4">
              <button
                onClick={prevVideo}
                disabled={currentIndex === 0}
                className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
              >
                Prev
              </button>
              
              <button
                onClick={nextVideo}
                disabled={currentIndex === videosList.length - 1}
                className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideosList;
