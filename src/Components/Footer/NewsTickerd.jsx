import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "./NewsTicker.css";

const NewsTicker = () => {
  const [news, setNews] = useState([]);
  const control = useAnimation();
  
  // Title constant to ensure consistency throughout the component
  const TICKER_TITLE = "Financial Market Updates";
  
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_NEWS_API_KEY");
        const data = await response.json();
        setNews(data.articles.slice(0, 10)); // Reduced to 10 items for better scrolling
      } catch (error) {
        console.error("Error fetching news:", error);
        // Financial news fallback data
        setNews([
          { title: "Breaking: S&P 500 Reaches All-Time High of 6,830" },
          { title: "Treasury Yields Fall as Fed Signals Possible Rate Cut" },
          { title: "Oil Prices Steady at $72 per Barrel Amid Supply Concerns" },
          { title: "Tech Stocks Rally: AI Sector Leads Gains with 3.2% Increase" },
          { title: "Dollar Strengthens Against Euro, Reaches 1.06 Exchange Rate" },
          { title: "Gold Prices Continue Upward Trend, Hitting $2,450 per Ounce" },
          { title: "Banking Sector Reports Strong Q4 Earnings, Exceeding Expectations" },
          { title: "Market Volatility Index (VIX) Drops to 16-Month Low" },
          { title: "Retail Investor Participation Reaches Record Levels in Market" },
          { title: "Housing Market Shows Signs of Cooling as Mortgage Rates Hold Steady" },
          { title: "Cryptocurrency Market Cap Surpasses $3.2 Trillion" },
          { title: "Consumer Confidence Index Improves for Third Consecutive Month" },
          { title: "Inflation Data Shows 2.8% Annual Rate, Slightly Below Expectations" },
          { title: "Manufacturing PMI Edges Up to 54.2, Signaling Expansion" },
          { title: "Green Energy Stocks Outperform Broader Market with 4.5% Gain" }
        ]);
      }
    };
    fetchNews();
  }, []);

  useEffect(() => {
    if (news.length > 0) {
      control.start({
        x: "-100%",
        transition: {
          repeat: Infinity,
          duration: 20,
          ease: "linear",
          repeatType: "loop"
        },
      });
    }
  }, [news]);

  return (
    <div className="ticker-wrapper">
      <div className="ticker-container">
        <div className="ticker-title">
          {TICKER_TITLE}
        </div>
        {news.length > 0 ? (
          <div className="ticker-scroll">
            <motion.div
              className="ticker-content"
              animate={control}
              initial={{ x: "0%" }}
            >
              {[...news, ...news].map((article, index) => (
                <motion.button
                  key={index}
                  className="ticker-item"
                  onMouseEnter={async () => {
                    await control.stop();
                  }}
                  onMouseLeave={() => {
                    control.start({
                      x: "-100%",
                      transition: {
                        repeat: Infinity,
                        duration: 20,
                        ease: "linear",
                        repeatType: "loop"
                      },
                    });
                  }}
                >
                  {article.title}
                </motion.button>
              ))}
            </motion.div>
          </div>
        ) : (
          <p className="loading-text">Loading financial updates...</p>
        )}
      </div>
    </div>
  );
};

export default NewsTicker;