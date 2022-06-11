import { Link } from "react-router-dom";
import '../css/general_styles.css'

function Index() {

    return (
        <div className="text-format">
            <h3>Welcome to playlist King</h3>
            <h3>PlaylistKING® is a groundbreaking b2b music playlist solution that combines the human expertise of record producers with the horsepower of cloud computing.</h3>
            <h3>Our global team evaluates tracks based on our own critical criteria, creating the highest quality metadata.</h3>
            <h3>Our technology solutions leverage this proprietary dataset to deliver impressive playlists and recommendations that can be refreshed automatically.</h3>
            <h3>Our Unique Playlist Solutions</h3>
            <h3>Our proprietary metadata combined with our unique recommendation algorithms deliver quality and accuracy every time</h3><h3>Bespoke Playlists at the touch of a button</h3>
            <h3>Seed Track Recommendations from millions of potential tracks</h3>
            <h3>Seed Artist Recommendations from artists across the globe</h3>
            <h3>Local Relevance settings to ensure quality for every major market</h3>
            <h3>Playlist Assimilation to import and improve your existing playlists</h3>
            <h3>Auto Refresh to schedule brand new playlists as often as you desire</h3>
            <h3>PlaylistKING can be accessed via our Pro or Lite Web Apps or direct from our REST API, and compatible with all the leading digital music providers including Spotify, Napster, Deezer and 7Digital.</h3>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>
    );
}

export default Index;