class BaseApiRequest {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async get<T>(endpoint: string): Promise<T> {
        try {
            const url = `${this.baseUrl}/${endpoint}`;
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Failed to make GET request to ${endpoint}: ${response.status} ${response.statusText}`);
            }
            const data: T = await response.json();
            return data;
        } catch (error: unknown) {
            throw new Error(`Failed to make GET request to ${endpoint}: ${error}`);
        }
    }
}

export default BaseApiRequest;