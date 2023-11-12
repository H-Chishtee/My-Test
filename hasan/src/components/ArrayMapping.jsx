import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
const ArrayMapping = () => {
  const arr = [
    {
      id: 1,
      posted_By: "User 1",
      post_caption: "Any thing",
      post_image: "image1.jpg",
      like_counts: 0,
      isliked: false,
    },
  ];
  const [posts, setPosts] = useState(arr);
  const [newPostCaption, setNewPostCaption] = useState("");

  const handleLike = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? { ...post, like_counts: post.like_counts + 1, isLiked: true }
          : post
      )
    );
  };

  const handleDelete = (postId) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  };

  const handleAddPost = () => {
    const newPost = {
      id: posts.length + 1,
      posted_by: "NewUser",
      post_caption: newPostCaption,
      like_counts: 0,
      isLiked: false,
    };

    setPosts((prevPosts) => [...prevPosts, newPost]);
    setNewPostCaption("");
  };
  return (
    <div>
      {posts.map((post) => (
        <div
          key={post.id}
          style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}
        >
          <p>{`Posted by: ${post.posted_By}`}</p>
          <p>{`Caption: ${post.post_caption}`}</p>
          <p>{`Likes: ${post.like_counts}`}</p>
          <button
            onClick={() => handleLike(post.id)}
            style={{ color: post.isLiked ? "red" : "grey" }}
          >
            <FontAwesomeIcon icon={faHeart} />
            Like
          </button>
          <button onClick={() => handleDelete(post.id)}>Delete</button>
        </div>
      ))}
      <div>
        <h3>Add New Post</h3>
        <input
          type="text"
          value={newPostCaption}
          onChange={(e) => setNewPostCaption(e.target.value)}
        />
        <button onClick={handleAddPost}>Add Post</button>
      </div>
    </div>
  );
};

export default ArrayMapping;
