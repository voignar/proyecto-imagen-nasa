const API_KEY = 'Sq9AyE9AlR7ZuEZqABNnuD2toPU7XqOvczUaaWKF';
const BASE_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;
export default async function fetcher(method:string, queryParams: string = '') {
    try {
        switch (method) {
            case 'revalidate':
                return await fetch(BASE_URL + queryParams, { next: { revalidate: 60 } }).then((res) => res.json());
            break;
            case 'no-cache':
                return await fetch(BASE_URL + queryParams, { cache: 'no-store' }).then((res) => res.json());
            break;
            default:
                return await fetch(BASE_URL + queryParams).then((res) => res.json());
                break;
        }
         } catch (error) {
        Promise.reject(error);
    }
    
}