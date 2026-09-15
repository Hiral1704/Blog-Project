import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import BlogCard from "../components/BlogCard";

function Home() {

  const blogs = useSelector(
    (state) => state.blogs.blogs
  );

  return (
    <>

      <section className="hero">

        <div>

          <h1>
            Welcome to MyBlog
          </h1>

          <p>
            Discover interesting stories,
            tutorials and ideas.
          </p>

          <Link
            to="/blogs"
            className="hero-btn"
          >
            Explore Blogs
          </Link>

        </div>

      </section>

      <section className="container">

        <h1 className="section-title">
          Latest Blogs
        </h1>

        <div className="blog-grid">

          {blogs
            .slice(0, 3)
            .map((blog) => (

              <BlogCard
                key={blog.id}
                blog={blog}
              />

            ))}

        </div>

      </section>

    </>
  );
}

export default Home;