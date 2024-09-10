import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [notes, setNotes] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Retrieve the token from localStorage
        const token = localStorage.getItem('authToken');

        if (!token) {
            // If no token, redirect to login page
            navigate('/login');
        }

        // Fetch notes with the token in headers
        const fetchNotes = async () => {
            try {
                const res = await axios.get('/api/notes', {
                    headers: {
                        'x-auth-token': token,
                    },
                });
                setNotes(res.data);
            } catch (err) {
                setError('Failed to fetch notes');
            }
        };

        fetchNotes();
    }, [navigate]);

    return (
        <div>
            <h1>Your Notes</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {notes.length > 0 ? (
                <ul>
                    {notes.map(note => (
                        <li key={note._id}>
                            <h2>{note.title}</h2>
                            <p>{note.content}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No notes available</p>
            )}
        </div>
    );
};

export default Home;
