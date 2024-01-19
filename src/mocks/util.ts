export const API_URL = "http://localhost";
export const PORT = 3001;

// PROD:
// export const API_URL = "https://jsonplaceholder.typicode.com";
// export const PORT = 443;

export const getBaseUrl = () => {
  return `${API_URL}:${PORT}`;
};