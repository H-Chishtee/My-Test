import React, { useState } from "react";

const postsData = [
  {
    id: 1,
    post_name: "Post 1",
    post_image: "image1.jpg",
    post_category: "old posts",
    price: 10,
  },
  {
    id: 2,
    post_name: "Post 2",
    post_image: "image2.jpg",
    post_category: "new posts",
    price: 20,
  },
  {
    id: 3,
    post_name: "Post 3",
    post_image: "image3.jpg",
    post_category: "all posts",
    price: 30,
  },
  {
    id: 4,
    post_name: "Post 4",
    post_image: "image4.jpg",
    post_category: "old posts",
    price: 40,
  },
  // Add more posts as needed
];

const Records = () => {
  const [selectedCategory, setSelectedCategory] = useState("all posts");

  const filterPosts = () => {
    if (selectedCategory === "all posts") {
      return postsData;
    } else {
      return postsData.filter(
        (post) => post.post_category.toLowerCase() === selectedCategory
      );
    }
  };

  return (
    <div>
      <div>
        <button onClick={() => setSelectedCategory("old posts")}>
          Old Posts
        </button>
        <button onClick={() => setSelectedCategory("new posts")}>
          New Posts
        </button>
        <button onClick={() => setSelectedCategory("all posts")}>
          All Posts
        </button>
        <button onClick={() => setSelectedCategory("latest posts")}>
          Latest Posts
        </button>
      </div>

      <div>
        {filterPosts().length === 0 ? (
          <p>No records found</p>
        ) : (
          filterPosts().map((post) => (
            <div
              key={post.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                margin: "10px",
              }}
            >
              <p>{`Post Name: ${post.post_name}`}</p>
              <p>{`Category: ${post.post_category}`}</p>
              <p>{`Price: ${post.price}`}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Records;
