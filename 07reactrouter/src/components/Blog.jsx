import Card from "./Cards/Card";
import React, { useState, useEffect } from "react";
import { getBlogs } from "./../../apiService";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const data = await getBlogs();
      setBlogs(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  return (
    <div className="flex flex-wrap justify-center bg-orange-100">
      {blogs.map((blog, index) => (
        <Card key={index} title={blog.title} body={blog.body} id={blog._id} />
      ))}
     
    </div>
  );
}
