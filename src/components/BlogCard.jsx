import React from "react";
import { Link } from "react-router-dom";

function BlogCard({ blog }) {

  return (
    <div className="blog-card">

      <img
        src={blog.image}
        alt={blog.title}
      />

      <div className="blog-card-content">

        <span className="category">
          {blog.category}
        </span>

        <h2>
          {blog.title}
        </h2>

        <p>
          {blog.description}
        </p>

        <div className="blog-info">

          <span>
            By {blog.author}
          </span>

          <span>
            ❤️ {blog.likes || 0}
          </span>

        </div>

        <Link
          to={`/blog/${blog.id}`}
          className="read-btn"
        >
          Read More
        </Link>

      </div>

    </div>
  );
}

export default BlogCard;