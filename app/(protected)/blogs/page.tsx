import BlogCard from "@/components/BlogCard";
import Container from "@/components/Container";
import Image from "next/image";
import React from "react";

function Blogs() {
  return (
    <Container>
      <h2 className="font-semibold text-3xl my-10">Welcome User,</h2>
      <h3 className="font-semibold text-xl mb-5">Your Blogs:</h3>
      <div className="flex flex-col gap-6">
        <BlogCard
          blog={{
            id: 1,
            title: "The Rise of JavaScript Frameworks in 2025",
            description:
              '<p><strong>Description:</strong></p><p> In 2025, JavaScript frameworks have evolved far beyond just building websites — they now power cross-platform apps, backend systems, and even AI-driven interfaces. Let’s take a look at why JS frameworks are dominating the developer landscape more than ever.</p><p><br></p><p><strong>Content:</strong></p><p><strong>The Evolution Continues</strong></p><p> Back in the early 2010s, JavaScript was mainly used to add interactivity to websites. Fast forward to 2025, and it has become the core language behind full-scale applications, thanks to the evolution of frameworks like React, Vue, Angular, Svelte, and the newer entrants like Qwik and SolidJS.</p><p><strong>Key Trends in 2025</strong></p><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><strong>Full-Stack JavaScript:</strong> Frameworks like Next.js and Remix have made server-side rendering and API integration seamless.</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><strong>Performance First:</strong> Lightweight frameworks like Qwik and Svelte are leading the push for faster page loads and zero-JS by default.</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><strong>AI Integration:</strong> Many JS frameworks now support built-in tools for integrating LLMs and AI features.</li></ol><p><strong>The Developer Experience</strong></p><p> Tooling has drastically improved. Frameworks now come with their own CLIs, file-based routing, hybrid rendering strategies, and built-in testing libraries — making the development process smoother than ever.</p><p><strong>What’s Next?</strong></p><p> We’re already seeing movement toward even more automation and AI-assisted development inside these frameworks. In the near future, writing an entire application in plain English using JavaScript’s ecosystem might not be far off.</p><p>Whether you\'re a new dev or a seasoned engineer, 2025 is an exciting time to be part of the JavaScript ecosystem.</p>',
            image: "/images/image1.png",
            createdAt: "2025-04-10T06:53:51.386Z",
          }}
        />
        <BlogCard
          blog={{
            id: 1,
            title: "The Rise of JavaScript Frameworks in 2025",
            description:
              '<p><strong>Description:</strong></p><p> In 2025, JavaScript frameworks have evolved far beyond just building websites — they now power cross-platform apps, backend systems, and even AI-driven interfaces. Let’s take a look at why JS frameworks are dominating the developer landscape more than ever.</p><p><br></p><p><strong>Content:</strong></p><p><strong>The Evolution Continues</strong></p><p> Back in the early 2010s, JavaScript was mainly used to add interactivity to websites. Fast forward to 2025, and it has become the core language behind full-scale applications, thanks to the evolution of frameworks like React, Vue, Angular, Svelte, and the newer entrants like Qwik and SolidJS.</p><p><strong>Key Trends in 2025</strong></p><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><strong>Full-Stack JavaScript:</strong> Frameworks like Next.js and Remix have made server-side rendering and API integration seamless.</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><strong>Performance First:</strong> Lightweight frameworks like Qwik and Svelte are leading the push for faster page loads and zero-JS by default.</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><strong>AI Integration:</strong> Many JS frameworks now support built-in tools for integrating LLMs and AI features.</li></ol><p><strong>The Developer Experience</strong></p><p> Tooling has drastically improved. Frameworks now come with their own CLIs, file-based routing, hybrid rendering strategies, and built-in testing libraries — making the development process smoother than ever.</p><p><strong>What’s Next?</strong></p><p> We’re already seeing movement toward even more automation and AI-assisted development inside these frameworks. In the near future, writing an entire application in plain English using JavaScript’s ecosystem might not be far off.</p><p>Whether you\'re a new dev or a seasoned engineer, 2025 is an exciting time to be part of the JavaScript ecosystem.</p>',
            image: "/images/image1.png",
            createdAt: "2025-04-10T06:53:51.386Z",
          }}
        />
      </div>
    </Container>
  );
}

export default Blogs;
