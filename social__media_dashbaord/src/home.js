import React from 'react'
import "./Home.css"
function Home() {
  return (
    <div className='navbar' id='home'>
        <ul className='menu'>
            <li><a href ="#home">Home<span className="sr-only">(current)</span></a></li>
            <li><a href ="#posts">Posts<span className="sr-only">(current)</span></a></li>
            <li><a href ="#profile">Your Profile<span className="sr-only">(current)</span></a></li>
            <li><a href ="#createPost">Creact Post<span className="sr-only">(current)</span></a></li>
            <li><a href ="#logout">logout<span className="sr-only">(current)</span></a></li>
            </ul>
    </div>
  )
}

export default Home