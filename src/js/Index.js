import { Link } from "react-router-dom";

function Index() {

    return (
        <div>
            <h1>Welcome to playlist King</h1>
            <h1>PlaylistKING® is a groundbreaking b2b music playlist solution that combines the human expertise of record producers with the horsepower of cloud computing.</h1>
            <h1>Our global team evaluates tracks based on our own critical criteria, creating the highest quality metadata.</h1>
            <h1>Our technology solutions leverage this proprietary dataset to deliver impressive playlists and recommendations that can be refreshed automatically.</h1>
            <h1>Our Unique Playlist Solutions</h1>
            <h1>Our proprietary metadata combined with our unique recommendation algorithms deliver quality and accuracy every time</h1><h1>Bespoke Playlists at the touch of a button</h1>
            <h1>Seed Track Recommendations from millions of potential tracks</h1>
            <h1>Seed Artist Recommendations from artists across the globe</h1>
            <h1>Local Relevance settings to ensure quality for every major market</h1>
            <h1>Playlist Assimilation to import and improve your existing playlists</h1>
            <h1>Auto Refresh to schedule brand new playlists as often as you desire</h1>
            <h1>PlaylistKING can be accessed via our Pro or Lite Web Apps or direct from our REST API, and compatible with all the leading digital music providers including Spotify, Napster, Deezer and 7Digital.</h1>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>
    );
}

export default Index;