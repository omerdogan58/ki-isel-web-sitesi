import React from 'react';
import '../index.css';

function Profile() {
    return (
        <section className="profile">
        <h2>Profile</h2>
        <div className="basic-info">
          <h3>Basic Information</h3>
          <p>Doğum tarihi: 24.03.1998</p>
        </div>
        <div className="about-me">
          <h3>About me</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vivatum aut, odit laborum aliquam voluptatum nisi mollitia.</p>
        </div>
        <div className="education">
          <h3>Egitim Durumu</h3>
          <p>Hacettepe Univ. Blyde / Lisana, 2016</p>
        </div>
      </section>
    )
}

export default Profile;