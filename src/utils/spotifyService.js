// spotifyService.js
import axios from 'axios';
import { OpenAI } from 'openai';

const refreshToken = process.env.REACT_APP_REFRESH_TOKEN;
const client_id = process.env.REACT_APP_CLIENT_ID;
const client_secret = process.env.REACT_APP_CLIENT_SECRET;

const getAccessToken = async () => {
    try {
        const response = await axios.post(
            'https://accounts.spotify.com/api/token',
            new URLSearchParams({
                grant_type: 'refresh_token',
                refresh_token: refreshToken,
                client_id,
                client_secret,
            }),
            { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        );
        return response.data.access_token;
    } catch (error) {
        console.error('Error fetching access token:', error);
    }
};

const getTopArtists = async () => {
    const token = await getAccessToken();
    const response = await axios.get('https://api.spotify.com/v1/me/top/artists', {
        headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response.data.items);

    return response.data.items;
};
const getAllFollowedArtists = async () => {
    const token = await getAccessToken();
    let allArtists = [];
    let nextUrl = 'https://api.spotify.com/v1/me/following?type=artist&limit=50';

    try {
        while (nextUrl) {
            const response = await axios.get(nextUrl, {
                headers: { Authorization: `Bearer ${token}` },
            });

            const { artists } = response.data;
            allArtists = allArtists.concat(artists.items); // Agregar los artistas obtenidos a la lista total
            nextUrl = artists.next; // Actualizar nextUrl para la próxima página de resultados
        }
    } catch (error) {
        console.error('Error fetching followed artists:', error);
    }
    console.log(allArtists);

    return allArtists;
};
const getGenresByMoodAndActivity = async (mood, activity) => {
    const openAiClient = new OpenAI({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true
    });
    const openAiResponse = await openAiClient.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            {
                role: 'user', content: `Sugiere géneros o estilos musicales que combinen con el estado de ánimo '${mood}' y la actividad '${activity}'.Devuelve la respuesta en un array de strings sin explicaciones adicionales y en inglés.
            Ejemplo: ["rock", "jazz", "lo-fi"]` }
        ],
        max_tokens: 20,
    });
    console.log(openAiResponse.choices[0].message.content);


    return JSON.parse(openAiResponse.choices[0].message.content);
};

const createPlaylist = async (mood, activity, numberOfSongs) => {
    const allArtists = await getAllFollowedArtists();
    const genres = await getGenresByMoodAndActivity(mood, activity);
    const token = await getAccessToken();
    let playlist = [];

    const seed_artists = allArtists.slice(0, 5).map(artist => artist.id).filter(id => id);
    const seed_genres = genres.slice(0, 5).filter(genre => genre);

    const seeds = [...seed_artists, ...seed_genres].slice(0, 5);
    const seed_artists_final = seeds.filter(seed => allArtists.some(artist => artist.id === seed)).join(',');
    const seed_genres_final = seeds.filter(seed => genres.includes(seed)).join(',');

    const response = await axios.get('https://api.spotify.com/v1/recommendations', {
        headers: { Authorization: `Bearer ${token}` },
        params: {
            seed_artists: seed_artists_final,
            seed_genres: seed_genres_final,
            limit: numberOfSongs
        }
    });

    playlist = response.data.tracks;

    return playlist;
};

export default createPlaylist;