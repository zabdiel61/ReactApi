import React, { useEffect, useState } from "react";

export default function ListPost() {
 const url = "https://jsonplaceholder.typicode.com/posts";
 const [posts, setPosts] = useState();
 const fetchApi = async () => {
  const response = await fetch(url);
  const responseJSON = await response.json();
  setPosts(responseJSON);
 };

 useEffect(() => {
  fetchApi();
 }, []);
 return (
  <div>
   <ul>
    {!posts
     ? "cargando..."
     : posts.map((post, index) => {
        return <li key={index}>{post.title}</li>;
       })}
   </ul>
  </div>
 );
}
