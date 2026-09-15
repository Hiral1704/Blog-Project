import { createSlice } from "@reduxjs/toolkit";

const defaultBlogs = [
  {
    id: 1,
    title: "Learn React JS",
    category: "Technology",
    author: "Admin",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    description:
      "React is a popular JavaScript library used to build modern user interfaces.",
    content:
      "React JS is a JavaScript library created by Facebook. It allows developers to create reusable UI components. React uses a virtual DOM and makes it easier to build interactive web applications.",
    likes: 0,
  },

  {
    id: 2,
    title: "How to Become a Web Developer",
    category: "Education",
    author: "Admin",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    description:
      "Learn the important skills required to become a web developer.",
    content:
      "To become a web developer, start with HTML, CSS and JavaScript. After learning the fundamentals, learn React, APIs, Git and backend technologies.",
    likes: 0,
  },

  {
    id: 3,
    title: "Best Places to Travel",
    category: "Travel",
    author: "Admin",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7",
    description:
      "Explore some amazing destinations around the world.",
    content:
      "Traveling gives us an opportunity to explore different cultures, food and beautiful places. Planning your trip properly can make your journey more enjoyable.",
    likes: 0,
  },
];

const savedBlogs =
  JSON.parse(localStorage.getItem("blogs")) ||
  defaultBlogs;

const initialState = {
  blogs: savedBlogs,
};

const blogSlice = createSlice({
  name: "blogs",

  initialState,

  reducers: {

    addBlog: (state, action) => {

      const newBlog = {
        ...action.payload,
        id: Date.now(),
        likes: 0,
      };

      state.blogs.push(newBlog);

      localStorage.setItem(
        "blogs",
        JSON.stringify(state.blogs)
      );
    },

    updateBlog: (state, action) => {

      const {
        id,
        updatedData
      } = action.payload;

      const index =
        state.blogs.findIndex(
          (blog) =>
            blog.id === Number(id)
        );

      if (index !== -1) {

        state.blogs[index] = {
          ...state.blogs[index],
          ...updatedData,
        };
      }

      localStorage.setItem(
        "blogs",
        JSON.stringify(state.blogs)
      );
    },

    deleteBlog: (state, action) => {

      const id = Number(action.payload);

      state.blogs =
        state.blogs.filter(
          (blog) => blog.id !== id
        );

      localStorage.setItem(
        "blogs",
        JSON.stringify(state.blogs)
      );
    },

    likeBlog: (state, action) => {

      const id = Number(action.payload);

      const blog =
        state.blogs.find(
          (blog) => blog.id === id
        );

      if (blog) {
        blog.likes =
          (blog.likes || 0) + 1;
      }

      localStorage.setItem(
        "blogs",
        JSON.stringify(state.blogs)
      );
    },
  },
});

export const {
  addBlog,
  updateBlog,
  deleteBlog,
  likeBlog,
} = blogSlice.actions;

export default blogSlice.reducer;