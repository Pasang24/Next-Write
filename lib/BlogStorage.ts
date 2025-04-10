import { Blog } from "@/types";

const BLOG_KEY = "blogs";

// get all blogs
export const getBlogs = (): Blog[] => {
  const blogs: Blog[] = JSON.parse(localStorage.getItem(BLOG_KEY) || "[]");
  return blogs;
};

// set blogs
export const setBlogs = (blogs: Blog[]): void => {
  localStorage.setItem(BLOG_KEY, JSON.stringify(blogs));
};

// add a new blog
export const addBlog = (blog: Blog): void => {
  const blogs = getBlogs();
  setBlogs([...blogs, blog]);
};

// update a blog
export const updateBlog = (updatedBlog: Blog): void => {
  const updatedBlogs = getBlogs().map((blog) =>
    blog.id === updatedBlog.id ? updatedBlog : blog
  );
  setBlogs(updatedBlogs);
};

// delete a blog
export const deleteBlog = (blogId: number): void => {
  const updatedBlogs = getBlogs().filter((blog) => blog.id !== blogId);
  setBlogs(updatedBlogs);
};

// get a single blog by id
export const getBlogById = (blogId: number): Blog | undefined => {
  const blog = getBlogs().find((blog) => blog.id === blogId);
  return blog;
};
