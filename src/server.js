const express = require('express');
const axios = require('axios');
const querystring = require('querystring');
const app = express();
require('dotenv').config();

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const redirect_uri = 'http://localhost:3000/callback';

app.get('/login', (req, res) => {
    const scope = 'user-follow-read user-top-read';
    const auth_url = `https://accounts.spotify.com/authorize?${querystring.stringify({
        response_type: 'code',
        client_id,
        scope,
        redirect_uri,
    })}`;
    res.redirect(auth_url);
});

app.get('/callback', async (req, res) => {
    const code = req.query.code || null;

    try {
        const response = await axios.post(
            'https://accounts.spotify.com/api/token',
            querystring.stringify({
                grant_type: 'authorization_code',
                code,
                redirect_uri,
                client_id,
                client_secret,
            }),
            { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        );
        console.log(response);

        const { access_token, refresh_token } = response.data;
        console.log('Refresh Token:', refresh_token); // Almacena este token para uso futuro
        res.send('Authorization complete. Check console for the refresh token.');
    } catch (error) {
        res.send('Error retrieving access token');
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});