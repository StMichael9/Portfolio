const API_BASE_URL = process.env.VITE_API_BASE_URL || 'http://localhost:5000';
const TIMEOUT_MS = 5000; // 5 seconds timeout

/**
 * Fetches data from the API with timeout and cancellation support.
 * @param {AbortSignal} [signal] - Optional AbortSignal for request cancellation.
 * @returns {Promise<Object>} The fetched data.
 * @throws {Error} If the request fails or times out.
 */
export const fetchApiData = async (signal) => {
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

        const response = await fetch(`${API_BASE_URL}/api/data`, {
            signal: signal || controller.signal,
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        if (error.name === 'AbortError') {
            console.error("Request was cancelled or timed out");
            throw new Error('Request timed out');
        } else if (error instanceof TypeError) {
            console.error("Network error:", error);
            throw new Error('Network error occurred');
        } else {
            console.error("There was a problem with the fetch operation:", error);
            throw error;
        }
    }
};

export default {
    path: '/api',
    async handler(context) {
        const data = await fetchApiData(context.signal);
        context.response.setHeader('Content-Type', 'application/json');
        context.response.writeHead(200);
        context.response.end(JSON.stringify(data));
    },
};

