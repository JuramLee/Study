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
  // let posts: Array<IPosts> = [];
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

  console.log(posts);

  return (
    <div>
      <h2>posts 페이지</h2>
      {/* {posts &&
        posts.map((post) => {
          <div>{post.id}</div>;
        })} */}
    </div>
  );
}
