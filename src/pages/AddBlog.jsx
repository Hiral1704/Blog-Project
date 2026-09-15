import React, {
  useState
} from "react";

import {
  useNavigate
} from "react-router-dom";

import {
  useSelector,
  useDispatch
} from "react-redux";

import {
  addBlog
} from "../redux/slices/blogSlice";

function AddBlog() {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const user = useSelector(
    (state) => state.auth.user
  );

  const [title, setTitle] =
    useState("");

  const [category, setCategory] =
    useState("Technology");

  const [image, setImage] =
    useState("");

  const [description, setDescription] =
    useState("");

  const [content, setContent] =
    useState("");

  function handleSubmit(e) {

    e.preventDefault();

    if (
      !title ||
      !image ||
      !description ||
      !content
    ) {

      alert(
        "Please fill all fields"
      );

      return;
    }

    dispatch(
      addBlog({
        title,
        category,
        image,
        description,
        content,
        author: user.name
      })
    );

    alert(
      "Blog added successfully!"
    );

    navigate("/blogs");
  }

  return (
    <section className="form-container">

      <h1>
        Create New Blog
      </h1>

      <form
        onSubmit={handleSubmit}
      >

        <label>
          Blog Title
        </label>

        <input
          type="text"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          placeholder="Enter blog title"
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
          type="text"
          value={image}
          onChange={(e) =>
            setImage(e.target.value)
          }
          placeholder="Enter image URL"
        />

        <label>
          Short Description
        </label>

        <textarea
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          placeholder="Enter short description"
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
          placeholder="Write your blog..."
        />

        <button
          type="submit"
          className="submit-btn"
        >
          Publish Blog
        </button>

      </form>

    </section>
  );
}

export default AddBlog;