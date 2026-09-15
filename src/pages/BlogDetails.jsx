import React from "react";

import {
  Link,
  useNavigate,
  useParams
} from "react-router-dom";

import {
  useSelector,
  useDispatch
} from "react-redux";

import {
  deleteBlog,
  likeBlog
} from "../redux/slices/blogSlice";

function BlogDetails() {

  const { id } = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const blogs = useSelector(
    (state) => state.blogs.blogs
  );

  const user = useSelector(
    (state) => state.auth.user
  );

  const blog = blogs.find(
    (item) => item.id === Number(id)
  );

  if (!blog) {

    return (
      <div className="container">

        <h1>
          Blog Not Found
        </h1>

      </div>
    );
  }

  function handleDelete() {

    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this blog?"
      );

    if (confirmDelete) {

      dispatch(
        deleteBlog(blog.id)
      );

      navigate("/blogs");
    }
  }

  return (
    <section className="container">

      <article className="blog-details">

        <img
          src={blog.image}
          alt={blog.title}
        />

        <span className="category">
          {blog.category}
        </span>

        <h1>
          {blog.title}
        </h1>

        <p className="author">
          Written by {blog.author}
        </p>

        <p className="blog-content">
          {blog.content}
        </p>

        <button
          className="like-btn"
          onClick={() =>
            dispatch(
              likeBlog(blog.id)
            )
          }
        >
          ❤️ Like {blog.likes || 0}
        </button>

        {user && (
          <div className="admin-actions">

            <Link
              to={`/edit-blog/${blog.id}`}
              className="edit-btn"
            >
              Edit
            </Link>

            <button
              className="delete-btn"
              onClick={handleDelete}
            >
              Delete
            </button>

          </div>
        )}

      </article>

    </section>
  );
}

export default BlogDetails;