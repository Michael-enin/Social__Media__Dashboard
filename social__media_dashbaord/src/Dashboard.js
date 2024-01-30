import React, { useEffect, useState } from 'react'

import Jsondata from  "./Posts.json"
import './Dashboard.css'
function Dashboard() {

    const [posts, setPosts] = useState([]);
    useEffect(() =>{
        const fetchPosts  = async() =>{
            try{
                setPosts(Jsondata);
            }
            catch(error){
                console.error("Posts Data Fetching Error", error);
            }
        }
        fetchPosts();
    }, []);
  return (
    <div>
    <h1>Social Media Dashboard</h1>
    {posts.map((post) => (
      <div key={post.id}>
        <h2>{post.title}</h2>
        <div className='content'>
            <p>{post.description}</p><br />
        </div>
        <span>Posted at: {" "+post.postedAt}</span>

      </div>
    ))}
  </div>
  )
}

export default Dashboard