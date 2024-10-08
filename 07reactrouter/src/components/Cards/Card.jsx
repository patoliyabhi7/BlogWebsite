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

function stripHtmlTags(str) {
  return str.replace(/<[^>]*>/g, '');
}

export default function Card({ title, body, id, imgUrl }) {
  const cleanTitle = stripHtmlTags(title);
  const cleanBody = stripHtmlTags(body);
  const truncatedBody = truncateText(cleanBody, 30, "words");

  return (
    <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 m-2">
      <div className="relative m-2.5 overflow-hidden text-white rounded-md ">
        <img
          src={imgUrl}
          alt="card-image"
          className="h-[244px] w-full object-cover"
        />
      </div>
      <div className="p-4 my-auto">
        <h6 className="mb-2 text-slate-800 text-xl font-semibold">{cleanTitle}</h6>
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
            rel="noopener noreferrer"
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