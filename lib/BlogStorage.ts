import { Blog } from "@/types";
import { dummyBlogs } from "@/data/dummyBlogs";

const BLOG_KEY = "blogs";

// get all blogs
export const getBlogs = (): Blog[] => {
  const storedBlogs = localStorage.getItem(BLOG_KEY);

  if (!storedBlogs) {
    setBlogs(dummyBlogs);
    return dummyBlogs;
  }
  const blogs: Blog[] = JSON.parse(storedBlogs);

  return blogs;
};

// set blogs
export const setBlogs = (blogs: Blog[]): void => {
  localStorage.setItem(BLOG_KEY, JSON.stringify(blogs));
};

// add a new blog
export const addBlog = (blog: Omit<Blog, "id" | "createdAt">): void => {
  const blogs = getBlogs();
  // if there are no blogs then just assign id as 1
  // else get id of the last created blog and add one to create id for new blog
  const newId =
    blogs.length === 0 ? 1 : Math.max(...blogs.map((blog) => blog.id)) + 1;
  const newBlog: Blog = {
    ...blog,
    id: newId,
    createdAt: new Date().toISOString(),
  };
  setBlogs([...blogs, newBlog]);
};

// update a blog
export const updateBlog = (updatedBlog: Omit<Blog, "createdAt">): void => {
  const updatedBlogs = getBlogs().map((blog) =>
    blog.id === updatedBlog.id
      ? { ...blog, ...updatedBlog, updatedAt: new Date().toISOString() }
      : blog
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
