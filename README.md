# NextWrite - Your Next Story Starts Here

NextWrite is a sleek, minimal blogging platform built with Next.js. Write, edit, and manage your blogs effortlessly — your next story starts here.

## Tech Stack

- **Frontend Framework**: [Next.js](https://nextjs.org)
- **Styling**: Tailwind CSS
- **State Management**: React Hooks
- **Icons**: Lucide React
- **Rich Text Editor**: React Quill
- **Local Storage**: Browser's `localStorage`
- **Deployment**: Vercel

## Routes

### Public Routes

1. **Home Page** (`/`)

   - **Description**: Landing page introducing the platform.
   - **Features**:
     - Displays a welcoming message.
     - Includes a call-to-action button to log in.
     - SVG illustration (`WritingHandSvg`).

2. **Login Page** (`/login`)

   - **Description**: Allows users to log in to their accounts.
   - **Features**:
     - Login form (`LoginForm`).
     - Metadata for SEO.

3. **Signup Page** (`/signup`)
   - **Description**: Allows users to create a new account.
   - **Features**:
     - Signup form (`SignupForm`).
     - Metadata for SEO.

### Protected Routes

1. **Blogs Page** (`/blogs`)

   - **Description**: Displays a list of blogs created by the user.
   - **Features**:
     - Blog list (`BlogList`).
     - Displays an empty state with an SVG (`EmptyStreetSvg`) if no blogs exist.
     - Metadata for SEO.

2. **Add Blog Page** (`/add-blog`)

   - **Description**: Allows users to create a new blog.
   - **Features**:
     - Blog creation form (`BlogForm` with `mode="create"`).
     - Metadata for SEO.

3. **Blog View Page** (`/blogs/[blogId]`)

   - **Description**: Displays a single blog post.
   - **Features**:
     - Shows blog details (title, description, image, creation date, and edit date).
     - Edit and delete options (`Edit Blog` button and `DeleteBlogButton`).
     - Metadata for SEO.

4. **Edit Blog Page** (`/blogs/[blogId]/edit`)

   - **Description**: Allows users to edit an existing blog.
   - **Features**:
     - Blog editing form (`BlogForm` with `mode="edit"`).
     - Metadata for SEO.

5. **Blog Not Found Page** (`/blogs/[blogId]/not-found`)
   - **Description**: Displays a 404 error if the blog does not exist.
   - **Features**:
     - Error message with a link to go back to the blogs page.

### Global Not Found Page

- **Description**: Displays a 404 error for any undefined route.
- **Features**:
  - Checks if the user is logged in and redirects them to the appropriate page (`/blogs` or `/`).

## Features

- **Authentication**: AuthGuard ensures protected routes are accessible only to logged-in users.
- **Blog Management**:
  - Create, edit, and delete blogs.
  - Blogs are stored in `localStorage`.
- **Responsive Design**: Fully responsive UI built with Tailwind CSS.
- **Dark Mode**: Theme toggle functionality using `next-themes`.
- **Rich Text Editor**: Blog descriptions are created using React Quill.
- **SEO**: Metadata is defined for each route.

## Getting Started

1. Clone the repo:
   ```bash
   git clone https://github.com/Pasang24/Next-Write.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

Open `http://localhost:3000` to view the app.
