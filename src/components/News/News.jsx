import React from "react";
import { productData } from "../../data/ProductData";
import NewsBox from "../NewsBox/NewsBox";
import { newsData } from "../../data/NewsData";

const News = () => {
  return (
    <div className="w-[85%] mx-auto h-[100%] gap-3 grid grid-cols-1 md:grid-cols-3">
      {newsData.map((news) => {
        return (
          <NewsBox
            key={news.id}
            image={news.image}
            title={news.title}
            author={news.author}
            date={news.date}
            event={news.event}
            message={news.message}
          />
        );
      })}
    </div>
  );
};

export default News;
