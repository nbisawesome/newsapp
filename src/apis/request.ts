import { News } from "../components/declarations";
import BaseApiRequest from "./baseapi";

export type Category = "business" | "entertainment" | "general" | "health" | "science" | "sports" | "technology";
const BASE_URL = 'https://newsapi.org/v2';
const API_KEY = import.meta.env.VITE_API_KEY; // Use the API key from the environment
const api = new BaseApiRequest(BASE_URL);

export async function getLatestNews(): Promise<News[]> {
    const endpoint = `top-headlines?country=us&apiKey=${API_KEY}`;
    const data = await api.get(endpoint);
    return (data as { articles: News[] }).articles || [];
}

export async function getNewsByCategory(category: Category): Promise<News[]> {
    const endpoint = `top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;
    const data = await api.get(endpoint);
    return (data as { articles: News[] }).articles || [];
}
