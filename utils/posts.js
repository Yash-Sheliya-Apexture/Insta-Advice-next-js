// utils/posts.js
export const allPosts = async () => {
    const apiUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/posts?per_page=100&_embed`;

    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.map((post) => {
        return {
            slug: post.slug,
            modified: post.modified,
        };
    });
};