import { useState, useEffect } from "react";
import { Category, getLatestNews, getNewsByCategory } from "../apis/request";
import { News } from "./declarations";
import NewsCardItem from "./NewsCardItem";
import { properNews } from "../utils/helpers";

const NewsCardList = ({ category, newsSection }: { category?: Category, newsSection: string }) => {
    const [news, setNews] = useState<News[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            let fetchedNews: News[] = [];
            if (!category) {
                fetchedNews = await getLatestNews();
            } else {
                fetchedNews = await getNewsByCategory(category);
            }

            const filteredNews = properNews(fetchedNews);
            setNews(filteredNews);
            setIsLoading(false);
        };

        fetchData();
    }, [category]);

    return (
        <div className="container">
            <div className="d-flex justify-content-between align-items-center mb-2">
                <h4>{newsSection}</h4>
                <a className="icon-link" href={`/all?category=${category}`}>
                    See All
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                    </svg>
                </a>
            </div>
            <div className="row">
                {isLoading ? (
                    <>
                        <NewsCardItem isPlaceholder newsItem={null} index={0} />
                        <NewsCardItem isPlaceholder newsItem={null} index={1} />
                        <NewsCardItem isPlaceholder newsItem={null} index={2} />
                        <NewsCardItem isPlaceholder newsItem={null} index={3} />
                    </>
                ) : (
                    news.slice(0, 4).map((item, index) => (
                        <NewsCardItem  newsItem={item} index={index} />
                    ))
                )}
            </div>
        </div>
    );
};

export default NewsCardList;