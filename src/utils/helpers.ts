import { Category } from "../apis/request";
import { News } from "../components/declarations";

export function convertIsoDateToHumanReadable(isoDate: string): string {
    const date = new Date(isoDate);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) {
        return `${diffInSeconds}s ago`;
    } else if (diffInSeconds < 3600) {
        const diffInMinutes = Math.floor(diffInSeconds / 60);
        return `${diffInMinutes}m ago`;
    } else if (diffInSeconds < 86400) {
        const diffInHours = Math.floor(diffInSeconds / 3600);
        return `${diffInHours}h ago`;
    } else {
        const diffInDays = Math.floor(diffInSeconds / 86400);
        return `${diffInDays}d ago`;
    }
}
export function calculateMinuteRead(content: string): string {
    if(!content) return '0 minute read';
    const wordsPerMinute = 200;
    const wordCount = content.split(' ').length;
    const minuteRead = Math.ceil(wordCount / wordsPerMinute + extractNumberFromString(content.slice(content.indexOf('[+')))/1000);

    return `${minuteRead>1?minuteRead:1} minute read`;
}
export function extractNumberFromString(str: string): number {
    const regex = /\d+/;
    const match = str.match(regex);
    if (match) {
        return Number(match[0]);
    }
    return 1;
}

export function validateCategory(categoryParam: string | null): Category | null {
    if (categoryParam === "business" || categoryParam === "entertainment" || categoryParam === "general" || categoryParam === "health" || categoryParam === "science" || categoryParam === "sports" || categoryParam === "technology") {
    return categoryParam as Category;
    } else {
    return null;
    }
}

export const properNews = (news: News[]) => {
    return news.filter(item => (
        item.content && !item.content.includes('[Removed]') && item.content.length > 50 &&
        item.title && !item.title.includes('[Removed]') && item.title.length > 10 &&
        item.description && !item.description.includes('[Removed]') && item.description.length > 50
    ));
};

export const fallbackNews: News = {
    source: {
        id: "unknown",
        name: "Unknown"
    },
    author: "Unknown",
    content: "No content available",
    title: '',
    description: '',
    url: '',
    urlToImage: '',
    publishedAt: ''
};