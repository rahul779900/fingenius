import React, { useEffect, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import "./NewsTicker.css";

const NewsTicker = () => {
  const [news, setNews] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const control = useAnimation();
  
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_NEWS_API_KEY");
        const data = await response.json();
        setNews(data.articles.slice(0, 10)); // Reduced to 10 items for better scrolling
      } catch (error) {
        console.error("Error fetching news:", error);
        setNews([
          { title: "Breaking: Market Hits New Highs", description: "Stock markets reached unprecedented levels today as technology and financial sectors showed strong performance." },
          { title: "Sports: Local Team Wins Championship", description: "After a thrilling overtime game, the local team secured their first championship title in over a decade." },
          { title: "Weather: Storm Approaching Coast", description: "Meteorologists warn residents to prepare for heavy rainfall and strong winds as a tropical storm approaches." },
          { title: "Tech: New Smartphone Released", description: "The latest smartphone features advanced AI capabilities and a revolutionary camera system that sets new industry standards." },
          { title: "Politics: Election Results Announced", description: "The final count confirms a narrow victory with several key districts determining the overall outcome." },
          { title: "Economy: Inflation Rates Rising", description: "Central bank officials discuss potential measures to address the sharpest inflation increase in the past five years." },
          { title: "Entertainment: Movie Premiere Draws Crowd", description: "Celebrities and fans gathered for the long-awaited premiere of the final installment in the popular film series." },
          { title: "Health: New Study on Sleep Patterns", description: "Research reveals connections between irregular sleep schedules and increased risk of certain health conditions." },
          { title: "Science: Mars Rover Sends New Images", description: "NASA scientists analyze stunning new photographs revealing previously unseen geological features on the Martian surface." },
          { title: "Business: Startup Raises Millions in Funding", description: "The innovative clean energy company secured major backing from several prominent venture capital firms." }
        ]);
      }
    };
    fetchNews();
  }, []);

  useEffect(() => {
    if (news.length > 0) {
      startAnimation();
    }
  }, [news]);

  const startAnimation = () => {
    control.start({
      x: "-100%",
      transition: {
        repeat: Infinity,
        duration: 20,
        ease: "linear",
        repeatType: "loop"
      },
    });
  };

  const handleMouseEnter = (article) => {
    setSelectedArticle(article);
    control.stop();
  };

  const handleMouseLeave = () => {
    setSelectedArticle(null);
    startAnimation();
  };

  const handleDescriptionClick = () => {
    window.open('https://www.timesofindia.com', '_blank');
  };

  return (
    <div className="ticker-wrapper">
      <div className="ticker-container">
        <div className="ticker-title">
          Financial Trends
        </div>
        {news.length > 0 ? (
          <div className="ticker-scroll">
            <motion.div
              className="ticker-content"
              animate={control}
              initial={{ x: "0%" }}
            >
              {[...news, ...news].map((article, index) => (
                <motion.div
                  key={index}
                  className="ticker-item"
                  onMouseEnter={() => handleMouseEnter(article)}
                  onMouseLeave={handleMouseLeave}
                >
                  {article.title}
                </motion.div>
              ))}
            </motion.div>
          </div>
        ) : (
          <p className="loading-text">Loading news...</p>
        )}
        
        <AnimatePresence>
          {selectedArticle && (
            <motion.div 
              className="news-description-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div 
                className="news-description-box"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                onClick={handleDescriptionClick}
              >
                <h2>{selectedArticle.title}</h2>
                <p>{selectedArticle.description || "No additional details available for this story."}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default NewsTicker;