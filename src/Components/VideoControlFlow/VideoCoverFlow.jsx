import React, { useState, useEffect, useRef } from 'react';
import { Maximize2, Minimize2, ChevronLeft, ChevronRight, Play, Pause, SkipBack, SkipForward, Clock, Calendar, ThumbsUp, MessageCircle, ListPlus, Eye, } from 'lucide-react';
import './VideoCoverFlow.css';
import Navbar from '../Navbar/Navbar';
import { assets } from '../../assets/assets';

// Local video data with updated titles and thumbnails
const videos = [
  {
    id: 1,
    title: "SEBI'S new rules: what every investor needs to know",
    videoUrl: assets.Pod1,
    thumbnail: "/api/placeholder/640/360", // Using placeholder images for testing
    views: Math.floor(Math.random() * 500000) + 50000 // Random views between 50K and 550K
  },
  {
    id: 2,
    title: "Robert Kiyosaki's Cryptocurrency interview",
    videoUrl: assets.Pod2,
    thumbnail: "/api/placeholder/640/360",
    views: Math.floor(Math.random() * 800000) + 100000 // Random views between 100K and 900K
  },
  {
    id: 3,
    title: "Shasank's talk on Money Allocation",
    videoUrl: assets.Pod3,
    thumbnail: "/api/placeholder/640/360",
    views: Math.floor(Math.random() * 400000) + 70000 // Random views between 70K and 470K
  },
  {
    id: 4,
    title: "Monika halan's thought on How financial literacy differs for womens",
    videoUrl: assets.Pod4,
    thumbnail: "/api/placeholder/640/360",
    views: Math.floor(Math.random() * 600000) + 80000 // Random views between 80K and 680K
  },
  {
    id: 5,
    title: "Different Ways of Investing",
    videoUrl: assets.Pod5,
    thumbnail: "/api/placeholder/640/360",
    views: Math.floor(Math.random() * 700000) + 120000 // Random views between 120K and 820K
  }
];

// Helper function to format view counts
const formatViewCount = (count) => {
  if (count >= 1000000) {
    return (count / 1000000).toFixed(1) + 'M';
  } else if (count >= 1000) {
    return (count / 1000).toFixed(1) + 'K';
  }
  return count.toString();
};

const VideoCoverFlow = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRefs = useRef([]);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [videoDurations, setVideoDurations] = useState({});
  const [thumbnailsLoaded, setThumbnailsLoaded] = useState(Array(videos.length).fill(false));

  const toggleFullscreen = (e) => {
    e.stopPropagation();
    const video = videoRefs.current[activeIndex];
    if (!video) return;

    if (!document.fullscreenElement) {
      video.requestFullscreen()
        .then(() => {
          setIsFullscreen(true);
        })
        .catch(err => {
          console.error(`Error attempting to enable fullscreen: ${err.message}`);
        });
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, videos.length);
  }, []);

  // Handle metadata loaded to get video duration
  const handleMetadataLoaded = (index) => {
    const video = videoRefs.current[index];
    if (video && video.duration) {
      setVideoDurations(prev => ({
        ...prev,
        [index]: formatDuration(video.duration)
      }));
    }
  };

  // Handle thumbnail load error - fallback to a CSS background
  const handleThumbnailError = (index) => {
    const newThumbnailsLoaded = [...thumbnailsLoaded];
    newThumbnailsLoaded[index] = false;
    setThumbnailsLoaded(newThumbnailsLoaded);
    
    // Add fallback styling to the video element
    if (videoRefs.current[index]) {
      videoRefs.current[index].style.backgroundColor = '#000';
      videoRefs.current[index].style.objectFit = 'contain';
    }
  };

  // Handle thumbnail load success
  const handleThumbnailLoad = (index) => {
    const newThumbnailsLoaded = [...thumbnailsLoaded];
    newThumbnailsLoaded[index] = true;
    setThumbnailsLoaded(newThumbnailsLoaded);
  };

  const skipTime = (seconds) => {
    const video = videoRefs.current[activeIndex];
    if (!video) return;

    const newTime = video.currentTime + seconds;
    video.currentTime = Math.max(0, Math.min(newTime, video.duration));
  };

  const getCardStyle = (index) => {
    const diff = index - activeIndex;
    const absPosition = Math.abs(diff);

    let translateZ = -120 * absPosition;
    let translateX = 320 * diff;
    let rotateY = diff < 0 ? Math.min(30 * absPosition, 60) : Math.max(-30 * absPosition, -60);

    let opacity = 1 - (0.15 * absPosition);
    let zIndex = 100 - absPosition;
    let scale = 1 - (0.08 * absPosition);

    if (absPosition > 4) {
      opacity = 0;
    }

    return {
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity,
      zIndex
    };
  };

  const handleVideoClick = (index) => {
    if (index === activeIndex) {
      togglePlayPause();
    } else {
      if (isPlaying) {
        pauseCurrentVideo();
      }
      setActiveIndex(index);
    }
  };

  const togglePlayPause = () => {
    const video = videoRefs.current[activeIndex];
    if (!video) return;

    if (video.paused) {
      video.play().then(() => {
        setIsPlaying(true);
      }).catch(error => {
        console.error("Error playing video:", error);
      });
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const pauseCurrentVideo = () => {
    const currentVideo = videoRefs.current[activeIndex];
    if (currentVideo && !currentVideo.paused) {
      currentVideo.pause();
      setIsPlaying(false);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  const navigateTo = (index) => {
    if (index >= 0 && index < videos.length) {
      if (isPlaying) {
        pauseCurrentVideo();
      }
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === ',') skipTime(-10);
      if (e.key === '.') skipTime(10);
      if (e.key === '<') navigate(-1);
      if (e.key === '>') navigate(1);
      if (e.key === ' ') {
        e.preventDefault();
        togglePlayPause();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, isPlaying]);

  const navigate = (direction) => {
    navigateTo(activeIndex + direction);
  };

  // Format duration
  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' + secs : secs}`;
  };

  return (
    <>
    <Navbar/>
      <div className="video-coverflow">
        <div className="progress-indicators">
          <div className="indicators-container">
            {videos.map((_, idx) => (
              <button
                key={idx}
                className={`indicator ${idx === activeIndex ? 'active' : ''}`}
                onClick={() => navigateTo(idx)}
              />
            ))}
          </div>
        </div>

        <div className="perspective-container">
          <div className="coverflow-container">
            {videos.map((video, index) => (
              <div
                key={video.id}
                className="video-card"
                data-position={index === activeIndex ? "active" :
                  index < activeIndex ? "previous" : "next"}
                style={getCardStyle(index)}
                onClick={() => handleVideoClick(index)}
              >
                {/* Add thumbnail image before video */}
                <div className="video-thumbnail" 
                     style={{
                       position: 'absolute',
                       width: '100%',
                       height: '100%',
                       backgroundImage: `url(${video.thumbnail})`,
                       backgroundSize: 'cover',
                       backgroundPosition: 'center',
                       zIndex: isPlaying && index === activeIndex ? -1 : 1
                     }}
                />
                
                <video
                  ref={el => videoRefs.current[index] = el}
                  src={video.videoUrl}
                  className="video-element"
                  preload="metadata"
                  onEnded={handleVideoEnd}
                  onLoadedMetadata={() => handleMetadataLoaded(index)}
                  playsInline
                  style={{
                    position: 'relative',
                    zIndex: isPlaying && index === activeIndex ? 2 : 0
                  }}
                />

                <div className={`overlay ${index === activeIndex ? 'active' : ''}`}>
                  {index === activeIndex && (
                    <>
                      <button
                        className="play-pause-button"
                        onClick={(e) => {
                          e.stopPropagation();
                          togglePlayPause();
                        }}
                      >
                        {isPlaying ? (
                          <Pause className="icon" />
                        ) : (
                          <Play className="icon" />
                        )}
                      </button>
                      <button
                        className="fullscreen-button"
                        onClick={toggleFullscreen}
                        title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                      >
                        {isFullscreen ? (
                          <Minimize2 className="icon" />
                        ) : (
                          <Maximize2 className="icon" />
                        )}
                      </button>
                    </>
                  )}
                </div>

                <div className="title-overlay">
                  <h3 className="video-title">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="video-details-section">
          <div className="video-info">
            <h2 className="current-video-title">{videos[activeIndex].title}</h2>
            <div className="video-metadata">
              <span className="video-duration">
                <Clock className="metadata-icon" /> 
                {videoDurations[activeIndex] || "Loading..."}
              </span>
              <span className="video-views">
                <Eye className="metadata-icon" /> {formatViewCount(videos[activeIndex].views)} views
              </span>
              <span className="video-date">
                <Calendar className="metadata-icon" /> 3 days ago
              </span>
            </div>
          </div>

          <div className="video-actions">
            <button className="action-button">
              <ThumbsUp className="action-icon" />
              <span>Like</span>
            </button>
            <button className="action-button">
              <MessageCircle className="action-icon" />
              <span>Comment</span>
            </button>
            <button className="action-button">
              <ListPlus className="action-icon" />
              <span>Add to playlist</span>
            </button>
          </div>
        </div>

        <div className="controls-panel">
          <button
            className={`control-button ${activeIndex === 0 ? 'disabled' : ''}`}
            onClick={() => navigate(-1)}
            disabled={activeIndex === 0}
            title="Previous video"
          >
            <SkipBack className="icon-sm" />
          </button>
          <button
            className="control-button"
            onClick={() => skipTime(-10)}
            title="Back 10 seconds"
          >
            <ChevronLeft className="icon" />
          </button>

          <button
            className="play-button"
            onClick={togglePlayPause}
            title={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <Pause className="icon-sm" />
            ) : (
              <Play className="icon-sm" />
            )}
          </button>

          <button
            className="control-button"
            onClick={() => skipTime(10)}
            title="Forward 10 seconds"
          >
            <ChevronRight className="icon" />
          </button>
          <button
            className={`control-button ${activeIndex === videos.length - 1 ? 'disabled' : ''}`}
            onClick={() => navigate(1)}
            disabled={activeIndex === videos.length - 1}
            title="Next video"
          >
            <SkipForward className="icon-sm" />
          </button>
        </div>

        <div className="video-counter">
          {activeIndex + 1} / {videos.length}
        </div>
      </div>
    </>
  );
};

export default VideoCoverFlow;