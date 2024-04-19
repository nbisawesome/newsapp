import { News } from './declarations';
import fallbackImg from '../assets/fallback.svg'
import { calculateMinuteRead, convertIsoDateToHumanReadable, fallbackNews } from '../utils/helpers';

interface NewsCardItemProps {
    index: number;
    newsItem: News | null;
    isPlaceholder?: boolean;
}

const NewsCardItem = ({ index, newsItem, isPlaceholder }: NewsCardItemProps) => {
    if (isPlaceholder || !newsItem) {
        return (
            <div className="col-md-3 col-sm-3 mb-3" key={index}>
                <div className="card" style={{ height: "100%" }}>
                    <div className="placeholder-image" style={{ height: "200px", backgroundColor: "#f0f0f0" }}>
                        <img src={fallbackImg} className="card-img-top img-fluid" alt={fallbackNews.title} style={{ objectFit: "cover", height: "200px" }} />
                    </div>
                    <div className="card-body" style={{ height: "100%" }}>
                        <h5 className="card-title placeholder-glow" style={{ maxWidth: "100%", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontSize: "14px", fontWeight: "bold" }}>
                            <span className="placeholder col-12"></span>
                        </h5>
                        <p className="card-text placeholder-glow" style={{ fontSize: "11px" }}>
                            <strong>Source:</strong> <span className="placeholder col-4"></span>
                        </p>
                        <p className="card-text placeholder-glow" style={{ fontSize: "12px", margin: "0" }}>
                            <span className="placeholder col-12"></span>
                            <span className="placeholder col-12"></span>
                            <span className="placeholder col-12"></span>
                            <span className="placeholder col-12"></span>
                            <span className="placeholder col-10"></span>
                        </p>
                    </div>
                </div>
            </div>
        );
    }


    return (
        <div className="col-md-3 mb-3" key={index}>
            <div className="card" style={{ height: "100%" }}>
                <img src={newsItem.urlToImage || fallbackImg} onError={(e) => (e.target as HTMLImageElement).src = fallbackImg} className="card-img-top img-fluid" alt={newsItem.title || fallbackNews.title} style={{ objectFit: "cover", height: "150px" }} />
                <div className="card-body" style={{ height: "14rem" }}>
                    <h5 className="card-title" style={{ maxWidth: "100%", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontSize: "14px", fontWeight: "bold" }}>{newsItem.title}</h5>
                    <p className="card-text" style={{ fontSize: "11px" }}><strong>Source:</strong> {newsItem.source.name}</p>
                    <p className="card-text" style={{ fontSize: "12px", margin: "0" }}>{newsItem.description}</p>
                    <p className="card-text" style={{ fontSize: "11px", position: "absolute", bottom: "5px", left: "5px" }}>{calculateMinuteRead(newsItem.content)}</p>
                    <p className="card-text" style={{ fontSize: "11px", position: "absolute", bottom: "5px", right: "5px" }}>{convertIsoDateToHumanReadable(newsItem.publishedAt)}</p>
                    <a href={newsItem.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px", position: "absolute", bottom: "5px", left: "5px" }}>Read More</a>
                </div>
            </div>
        </div>
    );
}

export default NewsCardItem;