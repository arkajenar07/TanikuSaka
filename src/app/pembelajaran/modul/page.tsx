'use client';
import { useState } from "react";

const VideoPage: React.FC = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [sideMenuClosed, setSideMenuClosed] = useState(false);
  const videos = [
    { id: 1, src: "/asset/video/jokowinanem.mp4", title: "1. Pendahuluan" },
    { id: 2, src: "/asset/video/nanemsayur.mp4", title: "2. Alat dan bahan" },
    { id: 3, src: "/asset/video/video3.mp4", title: "3. Instalasi" },
  ];

  const handlePlay = (index: number) => {
    const video = document.getElementById(`video${index}`) as HTMLVideoElement;
    video.setAttribute("controls", "controls");
    video.play();
  };

  const handlePause = (index: number) => {
    const video = document.getElementById(`video${index}`) as HTMLVideoElement;
    video.removeAttribute("controls");
  };

  const handleVideoEnd = (index: number) => {
    if (index < videos.length - 1) {
      setCurrentVideoIndex(index + 1);
    }
  };

  return (
    <div>
      <div className="menu-back">
        <a href="/dashboard">
          <img src="/back.png" alt="" /> Kembali
        </a>
        <h1>Otomatisasi penyiraman tanaman dengan teknologi IoT</h1>
      </div>
      <div className="main-container">
        <div className="video-container">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className={`video-item ${
                index === currentVideoIndex ? "" : "hidden"
              }`}
            >
              <video
                id={`video${index}`}
                width="320"
                height="240"
                onEnded={() => handleVideoEnd(index)}
                onPause={() => handlePause(index)}
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <button
                className="play-button"
                onClick={() => handlePlay(index)}
              >
                <img src="/video-play.svg" alt="Play" />
              </button>
            </div>
          ))}
          <div className="title">
            <h1>{videos[currentVideoIndex]?.title}</h1>
            <p>Otomatisasi penyiraman tanaman dengan teknologi IoT</p>
          </div>
        </div>
        <div className={`sidemenu ${sideMenuClosed ? "closed" : ""}`}>
          <button
            id="close"
            onClick={() => setSideMenuClosed((prev) => !prev)}
          >
            {sideMenuClosed ? "-->" : "<--"}
          </button>
          <div className="vid-sections">
            <div className="title-and-toggle-container">
              <div className="title-toggle">
                <h2>Section 1: Persiapan</h2>
                <button>
                  <img src="/settings-arr.png" alt="Toggle" />
                </button>
              </div>
              <p>4 / 4 jam - 1 jam 10 menit</p>
            </div>
            {videos.map((video, index) => (
              <div key={video.id} className="vid-section">
                <div className="checkboxes">
                  <input
                    type="checkbox"
                    className="check"
                    id={`checkbox${index}`}
                    checked={index < currentVideoIndex}
                    readOnly
                  />
                  <h2>{video.title}</h2>
                </div>
                <p>
                  <img src="/video-icon.png" alt="Video" /> 5 menit
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .video-container {
          position: relative;
        }
        .video-item button {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: none;
          border: none;
          cursor: pointer;
        }
        .video-item video {
          width: 100%;
          height: auto;
        }
        .hidden {
          display: none;
        }
        .sidemenu {
          transition: transform 0.3s ease;
        }
        .sidemenu.closed {
          transform: translateX(100%);
        }
      `}</style>
    </div>
  );
};

export default VideoPage;