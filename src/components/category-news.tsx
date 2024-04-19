import  { useEffect, useState } from 'react';

import {  getLatestNews, getNewsByCategory } from "../apis/request";
import { News } from "./declarations";
import NewsCardItem from "./NewsCardItem";
import { properNews, validateCategory } from '../utils/helpers';

const CategoryNews = () => {
    const [news, setNews] = useState<News[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    const category = validateCategory(categoryParam);

    
    async function fetchData() {
        let fetchedNews: News[] = [];
        if (!category) {
                fetchedNews = await getLatestNews();
        } else {
                fetchedNews = await getNewsByCategory(category);
        }
        const filteredNews = properNews(fetchedNews);
        console.log(filteredNews[0].content);
        setNews(filteredNews);
        setIsLoading(false);
}

    useEffect(() => {
        fetchData();
    }, []);
return (
    <div className="container">
            <div className="d-flex justify-content-between align-items-center mb-2">
<a className="icon-link" href={`/`}>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
</svg>
                </a>
                            <h2>{category ? category.charAt(0).toUpperCase() + category.slice(1) : 'Latest'}</h2>
                    </div>
                    <div className="row">
                            {isLoading ? (
                                    <>
                                            {Array.from({ length: 10 }).map((_, index) => (
                                                    <NewsCardItem isPlaceholder newsItem={null} index={index} />
                                            ))}
                                    </>
                            ) : (
                                    news.slice(0, 20).map((item, index) => (
                                            <NewsCardItem  newsItem={item} index={index} />
                                    ))
                            )}
                    </div>
            </div>
)
}

export default CategoryNews