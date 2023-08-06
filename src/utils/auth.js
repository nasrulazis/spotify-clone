
function handleLogin() {
    const CLIENT_ID = "bc60edbf60994ac9aaad9742dd17d617"
    const REDIRECT_URI = "http://localhost:3000/auth"
    const scopes = ["user-read-private", "user-read-email", "user-modify-playback-state"];

    const authEndpoint = "https://accounts.spotify.com/authorize";
    const queryParams = new URLSearchParams({
        client_id: CLIENT_ID,
        response_type: "token",
        redirect_uri:REDIRECT_URI,
        scope: scopes.join(" "),
    });
    window.location = `${authEndpoint}?${queryParams}`;
}

export {handleLogin}