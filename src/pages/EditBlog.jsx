import React, {useState} from "react";

import {useNavigate,useParams} from "react-router-dom";

import {useSelector,useDispatch} from "react-redux";

import {updateBlog} from "../redux/slices/blogSlice";

function EditBlog() {

  const { id } = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const blogs = useSelector(
    (state) => state.blogs.blogs
  );

  const blog = blogs.find(
    (item) => item.id === Number(id)
  );

  const [title, setTitle] =
    useState(blog?.title || "");

  const [category, setCategory] =
    useState(blog?.category || "");

  const [image, setImage] =
    useState(blog?.image || "");

  const [description, setDescription] =
    useState(blog?.description || "");

  const [content, setContent] =
    useState(blog?.content || "");

  if (!blog) {

    return (
      <div className="container">

        <h1>
          Blog Not Found
        </h1>

      </div>
    );
  }

  function handleSubmit(e) {

    e.preventDefault();

    dispatch(
      updateBlog({
        id,
        updatedData: {
          title,
          category,
          image,
          description,
          content
        }
      })
    );

    alert(
      "Blog updated successfully!"
    );

    navigate(`/blog/${id}`);
  }

  return (
    <section className="form-container">

      <h1>
        Edit Blog
      </h1>

      <form
        onSubmit={handleSubmit}
      >

        <label>
          Blog Title
        </label>

        <input
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <label>
          Category
        </label>

        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        >

          <option>
            Technology
          </option>

          <option>
            Education
          </option>

          <option>
            Travel
          </option>

          <option>
            Food
          </option>

          <option>
            Lifestyle
          </option>

        </select>

        <label>
          Image URL
        </label>

        <input
          value={image}
          onChange={(e) =>
            setImage(e.target.value)
          }
        />

        <label>
          Short Description
        </label>

        <textarea
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
        />

        <label>
          Blog Content
        </label>

        <textarea
          rows="8"
          value={content}
          onChange={(e) =>
            setContent(e.target.value)
          }
        />

        <button
          type="submit"
          className="submit-btn"
        >
          Update Blog
        </button>

      </form>

    </section>
  );
}

export default EditBlog;