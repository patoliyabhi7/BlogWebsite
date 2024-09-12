import React from "react";
import { Link } from "react-router-dom";

function truncateText(text, limit, type = "words") {
  if (type === "words") {
    const words = text.split(" ");
    return words.length > limit
      ? words.slice(0, limit).join(" ") + "..."
      : text;
  } else if (type === "characters") {
    return text.length > limit ? text.substring(0, limit) + "..." : text;
  }
}

export default function Card({ title, body, id }) {
  const truncatedBody = truncateText(body, 30, "words");
  console.log(id);
  return (
    <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 m-2">
      <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
        <img
          src="https://media.istockphoto.com/id/1517344698/photo/white-cyborg-robotic-hand-pointing-his-finger-to-human-hand-with-stretched-finger-ai.jpg?s=1024x1024&w=is&k=20&c=pxvURfhx_12Axs1cIsFgRHzupBABWM-BvRz4zpfFcaU="
          alt="card-image"
        />
      </div>
      <div className="p-4 my-auto">
        <h6 className="mb-2 text-slate-800 text-xl font-semibold">{title}</h6>
        <p className="text-slate-600 leading-normal font-light">
          {truncatedBody}
        </p>
        <h1 className="text-2xl text-blue-600 font-semibold">
          Visit our site to know more...
        </h1>
        <h1 className="text-2xl text-blue-700 font-bold underline">
          <a
            href="https://www.movya.com"
            className="text-2xl text-blue-700 font-bold underline"
            target="_blank"
          >
            www.movya.com
          </a>
        </h1>
      </div>
      <div className="px-4 pb-4 pt-0 mt-2">
        <Link to={{ pathname: "/blog/" + id, state: { title, body } }}>
          <button
            className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Read more
          </button>
        </Link>
      </div>
    </div>
  );
}
