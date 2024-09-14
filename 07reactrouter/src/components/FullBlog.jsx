import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
import { getBlogById } from "./../../apiService";

export default function FullBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const data = await getBlogById(id);
        setBlog(data);
      } catch (err) {
        setError("Error fetching blog.");
      }
    };

    fetchBlog();
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div>

      <section className="p-8">
        <div className="mx-auto max-w-screen-md">
          <img
            src={blog.imageURL}
            alt="team work"
            className="mb-4 h-[28rem] w-full rounded-xl object-cover"
          />
          <Typography variant="small" className="font-medium !text-blue-500">
            #blog #post
          </Typography>
          <Typography
            variant="h2"
            color="blue-gray"
            className="my-4 font-black text-4xl !leading-snug"
          >
            {blog.title || "The Castle Looks Different at Night..."}
          </Typography>
          <Typography className="font-normal !text-gray-500">
            {blog.body || "No content available."}
          </Typography>
        </div>
      </section>
    </div>
  );
}
