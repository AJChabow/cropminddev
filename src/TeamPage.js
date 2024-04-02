import React from 'react';
import './TeamPage.css'; 

function TeamPage() {
  const team = [
    { 
      id: 1, 
      name: 'Tobias Nolte', 
      role: 'Founder', 
      description: "Tobias Nolte is experienced in leading digital transformation initiatives...",  
      img: process.env.PUBLIC_URL + "/images/tob_headshot.jpeg" 
    },
    { 
      id: 2, 
      name: 'Gabriel Scali', 
      role: 'Founder', 
      description: "Gabriel is a professor and has lots of experience yada yada....", 
      img: process.env.PUBLIC_URL + "/images/gab_headshot.png" 
    },
    { 
      id: 3, 
      name: 'Artur Chabowski', 
      role: 'Founder', 
      description: "Artur has a degree in Physics and has been working as a software engineer.", 
      img: process.env.PUBLIC_URL + "/images/art_headshot.jpeg"
    },
  ];

  return (
    <div></div>
  );
}

export default TeamPage;