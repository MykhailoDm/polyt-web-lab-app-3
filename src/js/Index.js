import { Link } from "react-router-dom";

function Index() {

    return (
        <div>
            <h1>Welcome to playlist King</h1>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>
    );
}

export default Index;