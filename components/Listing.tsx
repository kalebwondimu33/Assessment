"use client";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

// Define a type for the blog data
interface Blog {
  _id: string;
  image: string;
  title: string;
  description: string;
  author?: {
    name: string;
  };
  tags: string[];
}

const Listing: React.FC = () => {
  // Use the Blog type for the state
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    // Fetch the blog posts
    axios
      .get<Blog[]>("https://a2sv-backend.onrender.com/api/blogs")
      .then((response) => {
        setBlogs(response.data); // Update state with blog data
        console.log("Fetched blogs:", response.data); // Moved here to log fetched data
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      });
  }, []);

  // Slice the array to limit to a maximum of 5 blogs
  const displayedBlogs = blogs.slice(0, 5);

  // Check updated state in the render
  console.log("Blogs state:", displayedBlogs);

  return (
    <div className="blog-list">
      {displayedBlogs.map((blog) => (
        <Card
          key={blog._id}
          image={blog.image}
          title={blog.title}
          description={blog.description}
          author={blog.author}
          tags={blog.tags}
        />
      ))}
    </div>
  );
};

export default Listing;
