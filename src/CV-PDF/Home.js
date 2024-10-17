import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <header className="header">
                <h1><span style={{color:"yellow"}}>"</span>PDF-CV<span style={{color:"yellow"}}>"</span></h1>
            </header>
            <div
                style={{
                    height: '100vh',
                    backgroundImage: 'url("https://i.pinimg.com/736x/b7/3b/00/b73b00fad0a2f24f43739911da68741a.jpg")', // Replace with your background image URL
                    backgroundSize: 'cover',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Link to="/Form">
                    <button
                        style={{
                            backgroundColor: "#003e10",
                            color: "white",
                            border: "solid white 2px",
                            borderRadius: "4px",
                            padding: '10px 20px',
                            fontSize: '18px',
                            cursor: 'pointer'
                        }}
                    >
                        Create Your CV 
                    </button>
                </Link>
            </div>
        </>

    );
}

export default Home;
