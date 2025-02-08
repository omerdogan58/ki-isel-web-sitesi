import React from 'react';
import '../index.css';

function Header() {
    return (
        <header className="header">
            <h1>HI! I'm Ömer Doğan.</h1>
            <p>I'm a full-stack developer. I can craft solid and scalable frontend products.</p>
            <button onClick={() => window.location.href = 'mailto:omerdogan35@hotmail.com'}>Invite me to join your team</button>
        </header>
    )
}

export default Header;