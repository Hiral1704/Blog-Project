import React, {
  useState
} from "react";

import { useSelector } from "react-redux";

import BlogCard from "../components/BlogCard";

function Blogs() {

  const blogs = useSelector(
    (state) => state.blogs.blogs
  );

  const [search, setSearch] =
    useState("");

  const [category, setCategory] =
    useState("All");

  const categories = [
    "All",
    "Technology",
    "Education",
    "Travel",
    "Food",
    "Lifestyle"
  ];

  const filteredBlogs =
    blogs.filter((blog) => {

      const matchesSearch =
        blog.title
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesCategory =
        category === "All" ||
        blog.category === category;

      return (
        matchesSearch &&
        matchesCategory
      );
    });

  return (
    <section className="container">

      <h1 className="section-title">
        All Blogs
      </h1>

      <div className="filters">

        <input
          type="text"
          placeholder="Search blogs..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        >

          {categories.map(
            (item) => (
              <option
                key={item}
                value={item}
              >
                {item}
              </option>
            )
          )}

        </select>

      </div>

      <div className="blog-grid">

        {filteredBlogs.length > 0 ? (

          filteredBlogs.map(
            (blog) => (

              <BlogCard
                key={blog.id}
                blog={blog}
              />

            )
          )

        ) : (

          <h2>
            No blogs found.
          </h2>

        )}

      </div>

    </section>
  );
}

export default Blogs;