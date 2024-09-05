import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const User = () => {
    const { userName } = useParams();
    const [user, setUser] = useState();

    const fetchUserName = userName || 'eswarnadh';

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch("https://api.github.com/users/" + fetchUserName);
                const json = await response.json();
                setUser(json);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUser();
    }, [fetchUserName]);

    return (
        <div className="user-card p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex flex-col items-center space-y-4">
            {user ? (
                <>
                    <img 
                        src={user.avatar_url} 
                        alt="User avatar" 
                        className="w-32 h-32 rounded-full border-2 border-gray-300"
                    />
                    <h2 className="text-xl font-bold">{user.login}</h2>
                    <p className="text-gray-600">Location: {user.location || 'N/A'}</p>
                    <p className="text-gray-600">Public Repos: {user.public_repos}</p>
                    <p className="text-gray-600">Followers: {user.followers}</p>
                    <p className="text-gray-600">Following: {user.following}</p>
                    <Link 
                        to={user.html_url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-500 hover:text-blue-700"
                    >
                        View Profile
                    </Link>
                </>
            ) : (
                <p className="text-gray-500">No user data available</p>
            )}
        </div>
    );
};

export default User;
