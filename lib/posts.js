// lib/posts.js (or wherever you fetch your data)

export async function getAllPosts() {
    // Replace with your data fetching logic (e.g., from a database, API, Markdown files)
    const posts = [
      { slug: 'first-post', title: 'First Post' },
      { slug: 'second-post', title: 'Second Post' },
    ];
    return posts;
  }