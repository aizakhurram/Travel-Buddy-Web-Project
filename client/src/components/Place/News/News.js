import React, { useEffect, useState } from "react";
import axios from "axios";
import "./News.scss";
import { useSelector } from "react-redux";
import { getPlace } from "../../../features/placeSlice";



const News = () => {
  const [news, setNews] = useState([]);
  const { place } = useSelector(getPlace);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://bing-news-search1.p.rapidapi.com/news/search',
      params: {
        q: place,
        freshness: 'Day',
        textFormat: 'Raw',
        safeSearch: 'Off'
      },
      headers: {
        'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '31fc5ecd54msh6c3318ded59c821p1ae672jsnf5a80148b6da',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
      },
    };
    const getNews = async () => {
      try {
        const response = await axios.request(options);
        setNews(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

   
      getNews();
    
  }, [place]);
  return (
    <>
      {news && (
        <div className="news-container">
          <h5 style={{ fontWeight: "700" }}>News from {place.toUpperCase()}</h5>
          {news.map((n, i) => (
            <div className="card" key={i}>
              <div className="headline">
                <a href={n.url} target="_blank" rel="noreferrer noopener">
                  {n.name}
                </a>
                <p>{n.description}</p>
              </div>
              <div className="img">
                <img
                  src={n.image ? n.image.thumbnail.contentUrl : ""}
                  alt="news"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default News;