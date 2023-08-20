"use client";

import { useEffect, useState } from "react";

interface IPosts {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export default function PostsMain() {
  const [posts, setPosts] = useState<IPosts[]>();

  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((result) => {
        setPosts(result);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>posts 페이지</h2>
      {posts &&
        posts.map((post) => {
          return (
            <div
              key={post.id}
              style={{
                border: "1px solid grey",
                marginBottom: "20px",
                padding: "10px 15px",
              }}
            >
              <div style={{ fontWeight: "bold", margin: "10px 0" }}>
                {post.title}
              </div>
              <div>{post.body}</div>
            </div>
          );
        })}
    </div>
  );
}
