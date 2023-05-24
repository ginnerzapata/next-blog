import Link from "next/link";
import React from "react";
import ReactMarkdown from "react-markdown";
export default function PostContent({ post }) {
  const createdAt =
    typeof post?.createAt === "number"
      ? new Date(post.createAt)
      : post?.createdAt.toDate();
  return (
    <div className="card">
      <h1>{post?.title}</h1>
      <span className="text-sm">
        Written by:{" "}
        <Link href={`/${post.username}`}>
          <a className="text-info">@{post.username}</a> on{" "}
          {createdAt.toISOString()}
        </Link>
      </span>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </div>
  );
}
