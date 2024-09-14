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
    <div className="flex flex-wrap justify-center bg-[#D3D3D3]">
      {blogs.map((blog, index) => (
        <Card key={blog._id} title={blog.title} body={blog.body} id={blog._id} imgUrl={blog.imageURL}/>
      ))}
     
    </div>
  );
}
