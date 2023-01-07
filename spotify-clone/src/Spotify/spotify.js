export const authEndpoint = "https://account.spotify.com/authorize";
const redirectUri = "https://localhost:5173";
const clientId = "332a5140c71b46deac076b160aa3e08e";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&respnose_type=token&show_dialog=true`